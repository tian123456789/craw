package com.tgr;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.lang.StringUtils;
import org.apache.http.HttpEntity;
import org.apache.http.HttpHost;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.jsoup.select.Elements;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.util.ResourceUtils;

import com.tgr.domian.YoukuVideo;
import com.tgr.spider.util.ResourceUtil;
import com.tgr.spider.util.SiteUtil;

import us.codecraft.xsoup.XElements;
import us.codecraft.xsoup.Xsoup;

/**
 * 测试爬虫
 */
@SuppressWarnings("unused")
@RunWith(SpringRunner.class)
@SpringBootTest(classes = TgrVideosCrawlerApplication.class)
public class TestSpider {
	
	/**
	 * new Object 单线程阶段测试
	 */
	@Test
	public void testSpiderClient() {
		String bootUrl = "http://list.youku.com/category/video";
		// SpiderClient sc = new SpiderClient(bootUrl, 1) ;
		// sc.start();

	}

	@Test
	public void testDomain() {
		String bootUrl = "http://v.youku.com/v_show/id_XMTU5MTg4Njc0OA==.html"; // "http://www.sohu.com/" ;
		String str = SiteUtil.getDomianName(bootUrl);
		System.out.println(str);
	}

	
	@Test
	public void parseTvInfo() throws FileNotFoundException {
		String doc = ResourceUtil.readResource("4剧集播放列表页.html");
		XElements tvElements =  Xsoup.select(doc,"//div[@class='tvinfo']//a/@href");
		if(tvElements.list().size() == 0) {
			System.out.println("tv是空的");//	//list.youku.com/show/id_zcabb2ad9f79f4e9c9896.html
		}
	}
	
	@Test
	public void parseVideo() throws FileNotFoundException {
		String doc = ResourceUtil.readResource("单独电影页.html");
		String channelPath = "//meta[@name='irCategory']/@content";
		String urlPath = "//meta[@itemprop='url']/@content";
		String namePath = "//meta[@name='irAlbumName']/@content";
		String coverPath = "//meta[@itemprop='image']/@content";
		String timePath = "//meta[@itemprop='datePublished']/@content";
		String yearPath = "//meta[@itemprop='datePublished']/@content";
		String actorPath = "//meta[@name='keywords']/@content";
		String directorPath = "//meta[@name='keywords']/@content";
		String areaPath = "//meta[@itemprop='contentLocation']/@content";
		String categoryPath = "//div[@class='desc']/span[@data-sn='tags']/a";//list
		String descriptionPath = "//code[@id='bpmodule-playpage-matetitle-code']/meta[@name='description']";
		
		YoukuVideo video = new YoukuVideo();
	    String channel = Xsoup.select(doc,channelPath).list().get(0);
		String url =  Xsoup.select(doc,urlPath).list().get(0);
			
		Pattern pattern = Pattern.compile("id_(.*).html"); // 匹配规则
		Matcher matcher = pattern.matcher(url); // 这个是被测试的内容
		String vid =  matcher.find() ? matcher.group(1) : "is null";
		//String tvid = matcher.find() ? matcher.group(1) : "";
		
		XElements tvElements =  Xsoup.select(doc,"//div[@class='tvinfo']/a/@href");
		if(tvElements.list().size() == 0) {
			System.out.println("tv是空的");
		}
		//String tv_info_href = Xsoup.select(doc,"//div[@class='tvinfo']/a/@href").list().get(0);
		
		String name =  Xsoup.select(doc,namePath).list().get(0);
		String cover =  Xsoup.select(doc,coverPath).list().get(0);
		String time =  Xsoup.select(doc,timePath).list().get(0);
		String year =  Xsoup.select(doc,yearPath).list().get(0);
		String actor =  Xsoup.select(doc,actorPath).list().get(0);
		String director =  Xsoup.select(doc,directorPath).list().get(0);
		String area =  Xsoup.select(doc,areaPath).list().get(0);
		String category =  Xsoup.select(doc,categoryPath).list().toArray().toString();
		String description =  Xsoup.select(doc,descriptionPath).list().get(0);
		//int vip =  Xsoup.select(doc,);
		video.setUrl(url);
		video.setVid(vid);
		video.setName(name);
		video.setCover(cover);
		video.setCategory(category);
		video.setChannel(channel);
		video.setActor(actor);
		video.setDescription(description);
		video.setDirector(director);
		video.setTime(time);
		video.setArea(area);
		video.setYear(year);
		//video.setVip(vip);
	}
	
	@Test
	public void parseEpisodeVideo() throws FileNotFoundException {
		String doc = ResourceUtil.readResource("单独电影页.html");
		String channelPath = "//meta[@name='irCategory']/@content";
		String urlPath = "//meta[@itemprop='url']/@content";
		String namePath = "//meta[@name='irAlbumName']/@content";
		String coverPath = "//meta[@itemprop='image']/@content";
		String timePath = "//meta[@itemprop='datePublished']/@content";
		String yearPath = "//meta[@itemprop='datePublished']/@content";
		String actorPath = "//meta[@name='keywords']/@content";
		String directorPath = "//meta[@name='keywords']/@content";
		String areaPath = "//meta[@itemprop='contentLocation']/@content";
		String categoryPath = "//div[@class='desc']/span[@data-sn='tags']/a";//list
		String descriptionPath = "//code[@id='bpmodule-playpage-matetitle-code']/meta[@name='description']";
		
		YoukuVideo video = new YoukuVideo();
	    String channel = Xsoup.select(doc,channelPath).list().get(0);
		String url =  Xsoup.select(doc,urlPath).list().get(0);
			
		Pattern pattern = Pattern.compile("id_(.*).html"); // 匹配规则
		Matcher matcher = pattern.matcher(url); // 这个是被测试的内容
		String vid =  matcher.find() ? matcher.group(1) : "is null";
		//String tvid = matcher.find() ? matcher.group(1) : "";
		
		XElements tvElements =  Xsoup.select(doc,"//div[@class='tvinfo']/a/@href");
		if(tvElements.list().size() == 0) {
			System.out.println("tv是空的");
		}
		//String tv_info_href = Xsoup.select(doc,"//div[@class='tvinfo']/a/@href").list().get(0);
		
		String name =  Xsoup.select(doc,namePath).list().get(0);
		String cover =  Xsoup.select(doc,coverPath).list().get(0);
		String time =  Xsoup.select(doc,timePath).list().get(0);
		String year =  Xsoup.select(doc,yearPath).list().get(0);
		String actor =  Xsoup.select(doc,actorPath).list().get(0);
		String director =  Xsoup.select(doc,directorPath).list().get(0);
		String area =  Xsoup.select(doc,areaPath).list().get(0);
		String category =  Xsoup.select(doc,categoryPath).list().toArray().toString();
		String description =  Xsoup.select(doc,descriptionPath).list().get(0);
		//int vip =  Xsoup.select(doc,);
		video.setUrl(url);
		video.setVid(vid);
		video.setName(name);
		video.setCover(cover);
		video.setCategory(category);
		video.setChannel(channel);
		video.setActor(actor);
		video.setDescription(description);
		video.setDirector(director);
		video.setTime(time);
		video.setArea(area);
		video.setYear(year);
		//video.setVip(vip);
	}
	
	

	
	
}
