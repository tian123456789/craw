package com.tgr.spider.task;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

import org.apache.http.HttpResponse;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.tgr.domian.YoukuVideo;
import com.tgr.spider.DownLoader;
import com.tgr.spider.SpiderConstants;
import com.tgr.spider.parser.YouKuPage1_Categories_Parser;
import com.tgr.spider.parser.YouKuPage2_Categories_Video_Section_Parser;
import com.tgr.spider.parser.YouKuPage3_Categories_Video_Section_Video_Parser;
import com.tgr.spider.parser.YouKuPage4_Categories_Video_Section_Video_Episode_Parser;
import com.tgr.spider.redis.RedisUtil;
import com.tgr.spider.util.PropertiesUtil;


/**
 * @author tgr
 *	爬虫任务
 */
@Component
public class SpiderTask{
	
	@Autowired
	private YouKuPage3_Categories_Video_Section_Video_Parser youKuPage3_Categories_video_section_video_Parser;
	
	@Autowired
	private YouKuPage4_Categories_Video_Section_Video_Episode_Parser youKuPage4_Categories_Video_Section_Video_Episode_Parser;
	
	@Autowired
	private RedisUtil redisUtil;
	
	public SpiderTask() {
	}
	
	/* 
	 * 开始请求处理 futurel 将来集合中弹出的一个url
	 */
	public void run(String process_future_url, String request_url, int request_url_level, AtomicInteger hasEpisode, AtomicInteger noHasEpisode, AtomicInteger level3_Ecveption) {// 感觉不应在run上加锁 感觉多线程会变成单线程
		beforeDownoadProcess(request_url, request_url_level);// 下载前处理 拿到请求url和level 存入下载中集合

		HttpResponse resp = null;
		synchronized (this) {
			resp = DownLoader.getInstance().doDownLoader(request_url);// 开始请求 获取响应
		}

		afterDownLoadProcess(resp, request_url, request_url_level,hasEpisode,noHasEpisode,level3_Ecveption);// 下载后处理
	}
	
	/**
	 * 下载前处理 添加到redis DownLoading url集合
	 */
	private synchronized void beforeDownoadProcess(String url,int level) {
		redisUtil.addToDownloadings(url,level);
	}

	/**
	 * @param resp
	 * 下载后处理
	 */
	private synchronized void afterDownLoadProcess(HttpResponse resp,String request_url,int request_url_level, AtomicInteger hasEpisode, AtomicInteger noHasEpisode, AtomicInteger level3_Ecveption) {
		
		redisUtil.delFromDownloadings(request_url,request_url_level);//删除下载集合
		
		if(resp != null) {
			
			if(resp.getStatusLine().getStatusCode() == 200) {//成功
				
				try {
					//解析页面
					redisUtil.addToOks(request_url,request_url_level);//添加到ok集合
					String html = EntityUtils.toString(resp.getEntity());

					//一级页面
					if(request_url_level == 1){
						System.err.println("是一级页面");
						
						String urlXpath = PropertiesUtil.getUrlXpath(request_url, request_url_level);
						String superUrl = request_url;
						
						YouKuPage1_Categories_Parser parser = new YouKuPage1_Categories_Parser(html, urlXpath,superUrl);
						List<String> all_categories_urls = parser.getAll_categories_urls();
						
						List<String> suburls = new ArrayList<String>();
						for(String url : all_categories_urls) {
							System.out.println("分类url: "+url);
							suburls.add(url);
						}
						
						processSubUrl(suburls,request_url,request_url_level);//处理子链接  加入将来集
					}
					else if(request_url_level == 2){
						System.err.println("是二级页面");
						
						String urlXpath = PropertiesUtil.getUrlXpath(request_url, request_url_level);
						
						YouKuPage2_Categories_Video_Section_Parser parser = new YouKuPage2_Categories_Video_Section_Parser(
								html, urlXpath);
						List<String> all_categories_urls = parser.getAll_caregorie_video_section_UrlXpath();
						
						List<String> suburls = new ArrayList<String>();
						for(String url : all_categories_urls) {
							System.out.println("视频栏url: "+url);
							suburls.add(url);
						
						}
						
						System.err.println("当前level-2 url: "+request_url_level+" 解析出 level-3 url个数"+request_url+":::::"+suburls.size());
						
						processSubUrl(suburls,request_url,request_url_level);//处理子链接 加入将来集
						
					}else if (request_url_level == 3) {
						System.err.println("是三级页面");
						
						Map<String, Object> returnMap =  youKuPage3_Categories_video_section_video_Parser.parse_video(html,request_url);
						
						if(StringUtils.isEmpty(returnMap.get("exception"))) {
							level3_Ecveption.incrementAndGet();
							
							System.err.println("video_parse ::::  "+"exceptionCount = "+level3_Ecveption.get()
									+" ;; noHasEpisCount = "+noHasEpisode.get()+" ;; hasEpisodeCount = "+hasEpisode.get());
						}
						
						if(!StringUtils.isEmpty(returnMap.get("video"))) {
							noHasEpisode.incrementAndGet();
							
							System.err.println("video_parse ::::  "+"exceptionCount = "+level3_Ecveption.get()
							+" ;; noHasEpisCount = "+noHasEpisode.get()+" ;; hasEpisodeCount = "+hasEpisode.get());
							
							youKuPage3_Categories_video_section_video_Parser.save((YoukuVideo) returnMap.get("video"));
						}
						
						if(!StringUtils.isEmpty(returnMap.get("sub_url_4"))) {
							hasEpisode.incrementAndGet();
							
							System.err.println("video_parse ::::  "+"exceptionCount = "+level3_Ecveption.get()
							+" ;; noHasEpisCount = "+noHasEpisode.get()+" ;; hasEpisodeCount = "+hasEpisode.get());
							
							List<String> suburls = new ArrayList<String>();
							suburls.add((String) returnMap.get("sub_url_4"));
							processSubUrl(suburls,request_url,request_url_level);//访问某部电视剧 所有剧集列表的链接
							
						}
					}else if(request_url_level ==4) {
						System.err.println("是四级剧集页面");
						
						YoukuVideo video = null;
						video = youKuPage4_Categories_Video_Section_Video_Episode_Parser.parse_video(html, request_url);
						
						if(!StringUtils.isEmpty(video)) {
							youKuPage4_Categories_Video_Section_Video_Episode_Parser.save(video);
						}
					}
					
				} catch (Exception e) {
					e.printStackTrace();
				}
			}else {//失败
				Long count = redisUtil.incrToFails(request_url);
				if(count < SpiderConstants.SPAIDER_FAILURE_RETRIES) {
					redisUtil.addToFutures(request_url,request_url_level);
				}
			}
		}
	}

	/**
	 * @param url2
	 * 处理每个新解析出的url
	 */
	private void processSubUrl(List<String> suburls,String request_url,int request_url_level) {//zset 累加不重复
		System.err.println("SpiderTask#processSubUrl");

		if(suburls == null || suburls.isEmpty()) {
			return;
		}
		
		for(String u : suburls) {//处理页面解析出来的子url
			if(redisUtil.existsInFutures(u,request_url_level+1)
					|| redisUtil.existsInOks(u,request_url_level+1)
					|| redisUtil.existsDownloadinds(u,request_url_level+1)) {
				continue;
			}
			
			if(redisUtil.existsFails(u,request_url_level+1)) {//是否在失败集
				int count = redisUtil.getFailCounts(u,request_url_level+1);
				if(count < SpiderConstants.SPAIDER_FAILURE_RETRIES) {
					redisUtil.addToFutures(u,request_url_level+1);
					continue;
				}else {/*大于失败次数阈值  这个路径本次彻底失败*/}
			}
			redisUtil.addToFutures(u,request_url_level+1);//以上两种都不成立 是个新的url  添加到future集 去爬取
		}
	}


}
