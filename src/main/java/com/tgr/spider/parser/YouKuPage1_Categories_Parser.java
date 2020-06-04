package com.tgr.spider.parser;

import java.util.ArrayList;
import java.util.List;

import com.tgr.domian.YoukuVideo;

import us.codecraft.xsoup.Xsoup;

/**
 * @author tgr sohu一类页面(首页)解析器
 */
public class YouKuPage1_Categories_Parser extends PageParser {

	private String html;
	
	private String categorie_UrlXpath;
	
	@SuppressWarnings("unused")
	private String superUrl;
	
	private List<String> all_categories_urls;

	public YouKuPage1_Categories_Parser(String html, String categorieUrlXpath, String superUrl) {
		this.html = html;
		this.categorie_UrlXpath = categorieUrlXpath;
		this.superUrl = superUrl;
		this.all_categories_urls = parse_categories_urls();
	}

	/*
	 * 解析url
	 */
	@Override
	public List<String> parse_categories_urls() {
		
		List<String> urls = Xsoup.select(html, categorie_UrlXpath).list();
		List<String> urls2 = new ArrayList<String>();
		
		for (String url : urls) {
			if (url.startsWith("/category/show/c") || url.startsWith("/category/video/c")) {
				String sourceUrl = "http://list.youku.com" + url;
				urls2.add(sourceUrl);
				String[] arr = sourceUrl.split(".html");
				for (int i = 2; i <= 10; i++) {
					String finalUrl = arr[0] + '_' + 's' + '_' + 6 + '_' + 'd' + '_' + '1' + '_' + 'p' + '_' + i
							+ ".html";
					urls2.add(finalUrl);
				}
				
			} else if (url.startsWith("http://list.youku.com/category/show/c")
					|| url.startsWith("http://list.youku.com/category/video/c")
					|| url.startsWith("https://list.youku.com/category/video/c")
					|| url.startsWith("https://list.youku.com/category/video/c")) {
				String sourceUrl = url;
				urls2.add(sourceUrl);
				String[] arr = sourceUrl.split(".html");
				for (int i = 2; i <= 10; i++) {
					String finalUrl = arr[0] + '_' + 's' + '_' + 6 + '_' + 'd' + '_' + '1' + '_' + 'p' + '_' + i
							+ ".html";
					urls2.add(finalUrl);
				}
			}
		}
		
		return urls2;
	}

	public String getHtml() {
		return html;
	}

	public void setHtml(String html) {
		this.html = html;
	}

	public String getCategorieUrlXpath() {
		return categorie_UrlXpath;
	}

	public void setCategorieUrlXpath(String categorieUrlXpath) {
		this.categorie_UrlXpath = categorieUrlXpath;
	}

	public List<String> getAll_categories_urls() {
		return all_categories_urls;
	}

	public void setAll_categories_urls(List<String> all_categories_urls) {
		this.all_categories_urls = all_categories_urls;
	}

	@Override
	YoukuVideo parse_video() {
		return null;
	}

}
