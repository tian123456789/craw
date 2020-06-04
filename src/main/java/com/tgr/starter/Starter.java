package com.tgr.starter;

import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.tgr.spider.SpiderConstants;
import com.tgr.spider.redis.RedisUtil;
import com.tgr.spider.redis.UrlUtil;
import com.tgr.spider.task.SpiderTask;
import com.tgr.spider.util.SiteUtil;

/**
 * @author tgr
 * 爬虫启动器 暂时没有停止功能 爬到哪算拿
 */
@Component
public class Starter {

	@Autowired
	private SpiderTask task;
	
	@Autowired
	private RedisUtil redisUtil;
	
	private boolean status = true;
	
	@SuppressWarnings("unused")
	private String bootUrl;//起始1级地址
	
	@SuppressWarnings("unused")
	private int level;//默认起始地址水平为1
	
	private volatile AtomicInteger hasEpisodeCount = new AtomicInteger();
	
	private volatile AtomicInteger noHasEpisodeCount= new AtomicInteger();
	
	private volatile AtomicInteger level3_ExceptionCount= new AtomicInteger();
	
	private String domainName;//域名 集合名称前缀(youku.com_XXX_url)前缀     youku.com
	
	private int threads = 3;
	
	public Starter() {
	}
	
	public void action(String bootUrl,int level) {
		this.bootUrl = bootUrl;
		this.level = level;
		this.domainName = SiteUtil.getDomianName(bootUrl);
		preprocess(bootUrl+"#"+level);//分布式项目  预处理地址 一个Controller调用我时 我应该查看
									  //如果已经再 future集合 将不再将这个路径加入 而是直接去找 当前的future集合
									  //否则另一个项目又会从头计算一遍 futureUrl 重复操作 无效做功
		fetcherAll();
	}
	
	public void actionStop() {
		this.status = false;
	}
	
	public void fetcherAll() {
		for(int i = 0 ; i < threads ; i++) {//start
			FetcherThread fetcherThread = new FetcherThread();
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			fetcherThread.start();
		}
	}
	
	public class FetcherThread extends Thread{
		
		public FetcherThread() {
		}
		
		@Override
		public void run() {
			while (status) {// 给任务一个将来集 url让其去处理
				String process_future_url = redisUtil.getNextUrl(domainName);
				
				try {
					Thread.sleep(50);
				} catch (InterruptedException e1) {
					e1.printStackTrace();
				}
				
				System.out.println(Thread.currentThread().getName() + "是否获取到process_future_url:"
						+ !StringUtils.isEmpty(process_future_url));
				
				if (!StringUtils.isEmpty(process_future_url)) {
					String request_url = new UrlUtil().extractUrl(process_future_url);// 抽取url地址
					int request_url_level = new UrlUtil().extractLevel(process_future_url);// 抽取url 水平
					task.run(process_future_url, request_url, request_url_level,hasEpisodeCount,noHasEpisodeCount,level3_ExceptionCount);// task去获取future将来集url 进行 前-中-后 处理
				}
			}

		}
	}
	
	/**
	 * 预处理地址 与处理新解析的子url相同   启动器里只有第一个线程起始url 会加入future集合
	 * @param combourl
	 */
	private void preprocess(String combourl) {
		
		if(redisUtil.existsInFutures(combourl)
				|| redisUtil.existsInOks(combourl)//存在ok完成集合
				|| redisUtil.existsDownloadinds(combourl)) {//存在正在下载集合
			return;
		}
		
		if(redisUtil.existsFails(combourl)) {//存在失败集合
			int count = redisUtil.getFailCounts(combourl);
			if(count < SpiderConstants.SPAIDER_FAILURE_RETRIES) {
				redisUtil.addToFutures(combourl);
				return;
			}
		}
		
		redisUtil.addToFutures(combourl);//以上两种都不成立 是个新的url  添加到future集 去爬取
	}
}
