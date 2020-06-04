package com.tgr.spider.redis;


public interface RedisService{
	
	String getNextUrl(String site) ;

	void addOkUrlAndRemDownloading(String url) ;

	void addFailUrl(String url);

	void addFutureUrl(String url) ;
	
	void addToDownLoadingUrl(String url);

	boolean existsInFutureUrls(String url) ;

	boolean existsInOkUrls(String url) ;
	
	boolean existsInFailUrls(String url) ;

	Integer getmaxInFailurls(String url) ;

	boolean existsInDownloadingUrls(String url) ;

	boolean existsKey(String key) ;
	
    boolean existsSite(String url);
	
	//void initSite(String url) ;
	
	
	
    
    
    
}
