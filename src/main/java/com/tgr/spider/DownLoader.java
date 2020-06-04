package com.tgr.spider;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;

import com.tgr.spider.util.SiteUtil;


/**
 * @author tgr
 *	下载器
 */
public class DownLoader {
	
	//每个站点维护一个HttpClient对象
	public Map<String, HttpClient> clients = new HashMap<String,HttpClient>();
	
	public static DownLoader instance = new DownLoader();
	
	public static DownLoader getInstance() {
		return instance;
	}
	
	private DownLoader() {
	}
	
	/**
	 * @param task
	 * 开始下载
	 */
	public HttpResponse doDownLoader(String request_url) {
		String url = request_url;
		HttpClient client = getClient(url);
		HttpGet get = new HttpGet(url);
		try {
			HttpResponse resp = null;
			resp = client.execute(get);
			return resp;
		} catch (IOException e) {
			//网络失败
			e.printStackTrace();
		}
		return null;
	}
	
	/**
	 * @param url
	 * @return
	 * 通过url获取客户端对象
	 */
	private HttpClient getClient(String url) {
		String domianName = SiteUtil.getDomianName(url);
		HttpClient client = clients.get(domianName);
		if(client == null) {
			client = HttpClientBuilder.create().build();
			clients.put(domianName, client);
			return client;
		}
		return client;
	}
	
	
}
