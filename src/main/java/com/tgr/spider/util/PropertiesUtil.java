package com.tgr.spider.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class PropertiesUtil {

	private static Properties prop ;
	static{
		try {
			InputStream in = Thread.currentThread().getContextClassLoader().getResourceAsStream("spider.properties") ;
			prop = new Properties() ;
			prop.load(in);
			in.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * 字符串属性
	 */
	public static String  getString(String name){
		return prop.getProperty(name) ;
	}

	/**
	 * int类型
	 */
	public static int getInt(String name){
		return Integer.parseInt(prop.getProperty(name)) ;
	}

	/**
	 * 获取 url xpath
	 */
	public static String getUrlXpath(String url , int level){
		String domain = SiteUtil.getDomianName(url) ;
		//%s 代表string字符串
		//%d 有符号整数(十进制)，帮助检验数字类型
		String key = String.format("%s.%d.urlxpath" , domain , level) ;
		return getString(key);
	}

	/**
	 * 获取article xpath
	 */
	public static String getArticleXpath(String url , int level){
		String domain = SiteUtil.getDomianName(url) ;
		String key =  String.format("%s.%d.articlexpath" , domain , level) ;
		return getString(key) ;
	}

	/**
	 * 文章标题
	 */
	public static String getTitleXpath(String url , int level){
		String domain = SiteUtil.getDomianName(url) ;
		String key =  String.format("%s.%d.article.title.xpath" , domain , level) ;
		return getString(key) ;
	}
	/**
	 * 文章发布时间
	 */
	public static String getPublishTimeXpath(String url , int level){
		String domain = SiteUtil.getDomianName(url) ;
		String key =  String.format("%s.%d.article.publishtime.xpath" , domain , level) ;
		return getString(key) ;
	}
	/**
	 * 文章标签
	 */
	public static String getTagsXpath(String url , int level){
		String domain = SiteUtil.getDomianName(url) ;
		String key =  String.format("%s.%d.article.tags.xpath" , domain , level) ;
		return getString(key) ;
	}
	/**
	 * 文章正文
	 */
	public static String getContentXpath(String url , int level){
		String domain = SiteUtil.getDomianName(url) ;
		String key =  String.format("%s.%d.article.content.xpath" , domain , level) ;
		return getString(key) ;
	}
	/**
	 * 文章阅读量
	 */
	public static String getCountXpath(String url , int level){
		String domain = SiteUtil.getDomianName(url) ;
		String key =  String.format("%s.%d.article.count.xpath" , domain , level) ;
		return getString(key) ;
	}
}
