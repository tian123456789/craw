package com.tgr.spider.parser;

import java.util.List;

import com.tgr.domian.YoukuVideo;

/**
 * @author tgr
 * 页面解析器
 */
public abstract class PageParser { 
	
	/**
	 * @return
	 * 解析所有分类url
	 */
	List<String> parse_categories_urls() {
		return null;
	}
	
	/**
	 * @return
	 * 解析当前分类下所有视频栏 超链接 href
	 */
	List<String> parse_categories_all_video_urls() {
		return null;
	}
	
	/**
	 * @return
	 * 解析视频播放页
	 */
	abstract YoukuVideo parse_video();
	
	
	
}
