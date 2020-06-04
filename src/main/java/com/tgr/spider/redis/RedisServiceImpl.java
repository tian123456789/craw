package com.tgr.spider.redis;

import java.util.Set;


import com.tgr.spider.SpiderConstants;
import com.tgr.spider.util.SiteUtil;
import redis.clients.jedis.Transaction;
import redis.clients.jedis.Tuple;

public class RedisServiceImpl implements RedisService{

	private static final String FUTURE_URLS = "future_urls";//ZSET
	private static final String OK_URLS = "ok_urls";//SET
	private static final String FAIL_URLS = "fail_urls";//HASH
	private static final String	DOWNLOADING_URL = "downloading_urls";//SET
	
	public static ThreadLocal<Transaction> local = new ThreadLocal<Transaction>();
	
	/*public static Jedis getJedis() {
    	 GenericObjectPoolConfig config = new JedisPoolConfig();
         config.setMaxTotal(100); //设置连接池中最多允许放100个Jedis对象
         //我的建议maxidle与maxTotal一样
         config.setMaxIdle(100);//设置连接池中最大允许的空闲连接
         config.setMinIdle(10);//设置连接池中最小允许的连接数
         config.setTestOnBorrow(false); //借出连接的时候是否测试有效性,推荐false
         config.setTestOnReturn(false); //归还时是否测试,推荐false
         config.setTestOnCreate(true); //创建时是否测试有效
         config.setBlockWhenExhausted(true);//当连接池内jedis无可用资源时,是否等待资源 ,true
         config.setMaxWaitMillis(10000); //没有获取资源时最长等待1秒,1秒后还没有的话就报错
         //创建jedis,这句话运行后就自动根据上面的配置来初始化jedis资源了
         @SuppressWarnings("resource")
		JedisPool pool = new JedisPool(config , "127.0.0.1" , 6379);
         return pool.getResource();
     }*/

	/**
	  * 获取下一个url,剪切url
	 * @param site
	 * @return
	 */
	public String getNextUrl(String site) {
		
		 Transaction tx = local.get();
		 String key = site+"_"+RedisServiceImpl.FUTURE_URLS;
		 if(!existsKey(key)) {
			 return null;
		 }
		 //取出最顶端的url地址
		 Set<Tuple> set = tx.zrangeWithScores(key, 0, 0).get();//按照分值取出全部匀速 0 0取第一个 0 -1取出所有
		 if(set != null && !set.isEmpty()) {
			String url = set.iterator().next().getElement();
			//在集合里删除 要取出的元素 后返回url
			tx.zrem(key, url);
			return url;
		 }
		 return null;
	}

	public void addOkUrlAndRemDownloading(String url) {
		Transaction tx = local.get();
		String domainName = SiteUtil.getDomianName(url);
		String ok_key = domainName+"_"+OK_URLS;
		String downloading_key = domainName+"_"+DOWNLOADING_URL;
		
		//下载完成之后 也要从downloading集里删除掉 这个url
		tx.srem(downloading_key, url);
		
		tx.sadd(ok_key, url);
	}

	public void addFailUrl(String url) {
		Transaction tx = local.get();
		String domainName = SiteUtil.getDomianName(url);
		String fail_key = domainName+"_"+RedisServiceImpl.FAIL_URLS;
		String downloading_key = domainName+"_"+RedisServiceImpl.DOWNLOADING_URL;
		//判断key是否存在
		tx.srem(downloading_key, url);//下载失败 将url从DOWNLOADING集剔除
		if(tx.exists(fail_key).get()) {
			String value = tx.hget(fail_key, url).get();
			if(value == null) {
				tx.hset(fail_key, url, "1");
			}else {
				int count = Integer.valueOf(value);
				count++;
				tx.hset(fail_key, url, count+"");
				//尝试未超过上限 继续下载
				if(count < SpiderConstants.SPAIDER_FAILURE_RETRIES) {
					//addFutureUrl(url);
					
					//##################
					String domainNameFuture = SiteUtil.getDomianName(url);
					String keyFuture = domainNameFuture+"_"+RedisServiceImpl.FUTURE_URLS;
					Long index = tx.zrank(keyFuture,url).get();//检索url的索引 排名
					if(index == null) {
						//查找当前集合的最大分数  倒序找到最大分数
						Set<Tuple> set = tx.zrevrangeWithScores(keyFuture, 0, 0).get();
						if(set != null && !set.isEmpty()) {
							double max = set.iterator().next().getScore();
							tx.zadd(keyFuture, max+1, url);
						}else {
							tx.zadd(keyFuture, 1, url);
						}
					}
					
				}
			}
		}else {
			tx.hset(fail_key, url, "1");
		}
	}

	/**
	 * @param url
	 * 添加url到future集 
	 * 如果存在 则忽略
	 * 不存在 在最大score+1
	 */
	public void addFutureUrl(String url) {
		Transaction tx = local.get();
		String domainName = SiteUtil.getDomianName(url);
		String key = domainName+"_"+RedisServiceImpl.FUTURE_URLS;
		Long index = tx.zrank(key,url).get();//检索url的索引 排名
		if(index == null) {
			//查找当前集合的最大分数  倒序找到最大分数
			Set<Tuple> set = tx.zrevrangeWithScores(key, 0, 0).get();
			if(set != null && !set.isEmpty()) {
				double max = set.iterator().next().getScore();
				tx.zadd(key, max+1, url);
			}else {
				tx.zadd(key, 1, url);
			}
		}
	}

	/**
	 * @param url
	 * 添加 url到 下载中集合
	 */
	public void addToDownLoadingUrl(String url) {
		Transaction tx = local.get();
		String domainName = SiteUtil.getDomianName(url);
		String key = domainName+"_"+RedisServiceImpl.DOWNLOADING_URL;
		tx.sadd(key, url);
	}

	/**
	 * 判断Future下是否有指定url元素
	 */
	public boolean existsInFutureUrls(String url) {//zset
		Transaction tx = local.get();
		String domainName = SiteUtil.getDomianName(url);
		String key = domainName+"_"+RedisServiceImpl.FUTURE_URLS;
		Long index = tx.zrank(key, url).get();
		return index == null ? false : true;
	}

	/**
	 * 判断Ok下是否有指定url元素
	 */
	public boolean existsInOkUrls(String url) {//set
		Transaction tx = local.get();
		String domainName = SiteUtil.getDomianName(url);
		String key = domainName+"_"+RedisServiceImpl.OK_URLS;
		return tx.sismember(key, url).get();
	}

	/**
	 * 判断Fail下是否有指定url元素
	 */
	public boolean existsInFailUrls(String url) {//hash
		Transaction tx = local.get();
		String domainName = SiteUtil.getDomianName(url);
		String key = domainName+"_"+RedisServiceImpl.FAIL_URLS;
		String count = tx.hget(key, url).get();
		return count == null ? false : true;
	}

	/**
	 * 查找Fail url的最大值   失败的次数
	 */
	public Integer getmaxInFailurls(String url) {//hash
		Transaction tx = local.get();
		String domainName = SiteUtil.getDomianName(url);
		String key = domainName+"_"+RedisServiceImpl.FAIL_URLS;
		String count = tx.hget(key, url).get();
		return count == null ? Integer.valueOf(0) : Integer.valueOf(count);
	}

	/**
	 * 判断Future下是否有指定url元素
	 */
	public boolean existsInDownloadingUrls(String url) {//set
		Transaction tx = local.get();
		String domainName = SiteUtil.getDomianName(url);
		String key = domainName+"_"+RedisServiceImpl.DOWNLOADING_URL;
		return tx.sismember(key, url).get();//执行之前调用了get
		
	}

	/**
	 * 判断redis中存在指定的key
	 * @return
	 */
	public boolean existsKey(String key) {
		Transaction tx = local.get();
		return tx.exists(key).get();
	}

	/**
	 * Future集合是否存在该站点
	 * @param url
	 * @return
	 */
	public boolean existsSite(String url) {
		Transaction tx = local.get();
		String domainName = SiteUtil.getDomianName(url);
		String future_key = domainName+"_"+RedisServiceImpl.FUTURE_URLS;
		return tx.exists(future_key).get();
	}

	/**
	 * 在Future集合初始化该站点
	 * @param url
	 * @return
	 */
	/*public void initSite(String url) {
		Jedis jedis = getJedis();
		String domainName = SiteUtil.getDomianName(url);
		String future_key = domainName+"_"+FUTURE_URLS;
		if(!existsSite(url)) {
			jedis.zadd(future_key, 1, url);
		}
	}*/
}
