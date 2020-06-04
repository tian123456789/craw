package com.tgr.spider.parser;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;
import com.tgr.domian.YoukuVideo;
import us.codecraft.xsoup.Xsoup;

/**
 * @author tgr sohu一类页面(首页)解析器
 */
public class YouKuPage2_Categories_Video_Section_Parser extends PageParser {

	private String html;
	private String caregorie_video_section_UrlXpath;
	private List<String> all_caregorie_video_section_UrlXpath;

	public YouKuPage2_Categories_Video_Section_Parser(String html, String categorieUrlXpath) {
		this.html = html;
		this.caregorie_video_section_UrlXpath = categorieUrlXpath;
		this.all_caregorie_video_section_UrlXpath = parse_categories_urls();
	}

	/*
	 * 解析url
	 */
	@SuppressWarnings("unused")
	@Override
	public List<String> parse_categories_urls() {

		String pregex1 = "//v.youku.com/v_show/id_.*";
		String pregex2 = "//list.youku.com/show/id_.*";

		String pregex3 = "http://v.youku.com/v_show/id_.*";
		String pregex4 = "http://list.youku.com/show/id_.*";

		String pregex5 = "https://v.youku.com/v_show/id_.*";
		String pregex6 = "https://list.youku.com/show/id_.*";

		String pregex7 = "http://list.youku.com/category/show.*";
		String pregex8 = "http://list.youku.com/category/video.*";

		List<String> urls = Xsoup.select(html, caregorie_video_section_UrlXpath).list();
		List<String> urls2 = new ArrayList<String>();

		for (String url : urls) {
			if (Pattern.matches(pregex1, url)/* || Pattern.matches(pregex2, url)*/) {
				urls2.add("https:" + url);
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

	public String getCaregorie_video_section_UrlXpath() {
		return caregorie_video_section_UrlXpath;
	}

	public void setCaregorie_video_section_UrlXpath(String caregorie_video_section_UrlXpath) {
		this.caregorie_video_section_UrlXpath = caregorie_video_section_UrlXpath;
	}

	public List<String> getAll_caregorie_video_section_UrlXpath() {
		return all_caregorie_video_section_UrlXpath;
	}

	public void setAll_caregorie_video_section_UrlXpath(List<String> all_caregorie_video_section_UrlXpath) {
		this.all_caregorie_video_section_UrlXpath = all_caregorie_video_section_UrlXpath;
	}

	@Override
	public YoukuVideo parse_video() {
		return null;
	}

}
