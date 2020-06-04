package com.tgr;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.junit.Test;

import com.tgr.spider.util.ResourceUtil;

import us.codecraft.xsoup.XElements;
import us.codecraft.xsoup.Xsoup;

public class XpathTest {

	@Test
	public void testXpath() throws FileNotFoundException {// div[@class='p-thumb']/a/@href"
		String doc = ResourceUtil.readResource("1分类.html");// div[@class='box-series']/ul/li/div/div/a/@href
		String xpath = "//div[@class='item noborder']/ul/li[2]/a/@href | //div[@class='item noborder']/ul/li[3]/a/@href";
		XElements eles = Xsoup.select(doc,xpath);
		for (String s : eles.list()) {
			System.out.println(s);
		}
		System.out.println(eles.list().size());
	}
	
	@Test
	public void testGet() throws ClientProtocolException, IOException {
		CloseableHttpClient client = HttpClientBuilder.create().build();
		HttpGet get = new HttpGet("https://list.youku.com/category/show/c_97.html");
		get.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:50.0) Gecko/20100101 Firefox/50.0");
		CloseableHttpResponse response = client.execute(get);
		HttpEntity entity = response.getEntity();
		String str = EntityUtils.toString(entity);
		System.out.println(str);
	}
	
	@Test
	public void testGet3() throws ClientProtocolException, IOException {
		CloseableHttpClient client = HttpClientBuilder.create().build();
		HttpGet get = new HttpGet("https://list.youku.com/show/id_zcabb2ad9f79f4e9c9896.html?spm=a2h0j.11185381.0.0.4ea13b89lMDkiM");
		get.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:50.0) Gecko/20100101 Firefox/50.0");
		CloseableHttpResponse response = client.execute(get);
		HttpEntity entity = response.getEntity();
		 Header[] headers = response.getAllHeaders();
		String str = EntityUtils.toString(entity);
		System.out.println(str);
	}
	
	/**
	 * @throws ClientProtocolException
	 * @throws IOException
	 * 获取剧集列表
	 */
	@Test
	public void testGet4() throws ClientProtocolException, IOException {
		CloseableHttpClient client = HttpClientBuilder.create().build();
		HttpGet get = new HttpGet("https://list.youku.com/show/id_zcabb2ad9f79f4e9c9896.html");
		get.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:50.0) Gecko/20100101 Firefox/50.0");
		CloseableHttpResponse response = client.execute(get);
		HttpEntity entity = response.getEntity();
		String str = EntityUtils.toString(entity);
		Pattern pattern = Pattern.compile("id_(.*).html"); // 匹配规则
		Matcher matcher = pattern.matcher("https://list.youku.com/show/id_zcabb2ad9f79f4e9c9896.html"); // 这个是被测试的内容
		String tvid = matcher.find() ? matcher.group(1) : "is null";
		System.out.println(str);
		System.out.println();
		System.out.println();
		System.err.println("tvid="+tvid);
		String episodeUrl = "https://list.youku.com/show/episode?stage=reload&callback=___&id=" + tvid;
		System.err.println("getList: "+episodeUrl);
		//https://list.youku.com/show/episode?stage=reload&callback=___&id=zcabb2ad9f79f4e9c9896
	}
	
	@Test
	public void testGet5() throws ClientProtocolException, IOException {
		CloseableHttpClient client = HttpClientBuilder.create().build();
		HttpGet get = new HttpGet("https://list.youku.com/show/episode?stage=reload&callback=___&id=zcabb2ad9f79f4e9c9896");
		get.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:50.0) Gecko/20100101 Firefox/50.0");
		CloseableHttpResponse response = client.execute(get);
		HttpEntity entity = response.getEntity();
		String str = EntityUtils.toString(entity);
		System.out.println(str);
	}
	
	@Test
	public void pageableing() {
		String url = "http://list.youku.com/category/show/c_96.html";
		//目标		  http://list.youku.com/category/show/c_97_s_6_d_1_p_2.html
		String[] arr = url.split(".html");
		for(int i = 2 ; i < 30 ; i++) {
			String finalUrl = arr[0] + '_'+'s'+'_'+6+'_'+'d'+'_'+'1'+'_'+'p'+'_' +i+ ".html";
			System.out.println(finalUrl);
		}
	}
	
	
	/**
	 * @throws ClientProtocolException
	 * @throws IOException
	 * 分页响应
	 */
	@Test
	public void testGet6() throws ClientProtocolException, IOException {
		CloseableHttpClient client = HttpClientBuilder.create().build();
		HttpGet get = new HttpGet(
				"https://baike.baidu.com/item/九进十连环/3563802");
		get.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:50.0) Gecko/20100101 Firefox/50.0");
		CloseableHttpResponse response = client.execute(get);
		HttpEntity entity = response.getEntity();
		String str = EntityUtils.toString(entity);
		System.out.println(str);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
