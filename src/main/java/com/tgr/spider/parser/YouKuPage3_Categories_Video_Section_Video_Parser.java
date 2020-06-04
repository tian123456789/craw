package com.tgr.spider.parser;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.annotation.Resource;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.tgr.domian.YoukuVideo;
import com.tgr.repository.YoukuVideoRepository;

import us.codecraft.xsoup.XElements;
import us.codecraft.xsoup.Xsoup;

/**
 * @author tgr sohu一类页面(首页)解析器
 */
@Component
public class YouKuPage3_Categories_Video_Section_Video_Parser {

	@Resource
	private RestTemplate restTemplate;

	@Autowired
	private YoukuVideoRepository youkuVideoRepository;
	
	public YouKuPage3_Categories_Video_Section_Video_Parser() {
	}

	public Map<String, Object>parse_video(String html0, String url0) {//v.youku.com/v_show/id_.*
		Document doc = null;
		doc = Jsoup.parse(html0);
		if (!Pattern.matches("(http|https)://v.youku.com/v_show/id_.*", url0)) {// 电影页面
			return null;
		}
		
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		try {
			
			XElements tvElements =  Xsoup.select(doc,"//div[@class='tvinfo']//a/@href");
			if(tvElements.list().size() != 0) {
				String sub_url_3 = tvElements.list().get(0);
				returnMap.put("video", null);
				returnMap.put("sub_url_4","https:"+ sub_url_3);//访问某部电视剧 所有剧集列表的链接
				returnMap.put("exception", false);
				return returnMap;//有剧集
			}
			
			String channelPath = "//meta[@name='irCategory']/@content";
			String urlPath = "//meta[@itemprop='url']/@content";
			String namePath = "//meta[@name='irAlbumName']/@content";
			String coverPath = "//meta[@itemprop='image']/@content";
			String timePath = "//meta[@itemprop='datePublished']/@content";
			String yearPath = "//meta[@itemprop='datePublished']/@content";
			String actorPath = "//meta[@name='keywords']/@content";
			String directorPath = "//meta[@name='keywords']/@content";
			String areaPath = "//meta[@itemprop='contentLocation']/@content";
			String categoryPath = "//div[@class='desc']/span[@data-sn='tags']/a";// list
			String descriptionPath = "//code[@id='bpmodule-playpage-matetitle-code']/meta[@name='description']";
			YoukuVideo video = null;
			video = new YoukuVideo();
			String channel = (Xsoup.select(doc, channelPath).list()).size() > 0 ?(Xsoup.select(doc, channelPath).list()).get(0) 
					: "";
			String url = (Xsoup.select(doc, urlPath).list()).size() > 0 ?(Xsoup.select(doc, urlPath).list()).get(0) : "";

			Pattern pattern = Pattern.compile("id_(.*).html"); 
			Matcher matcher = pattern.matcher(url); 
			String vid = matcher.find() ? matcher.group(1) : "is null";

			String name = (Xsoup.select(doc, namePath).list()).size() > 0 ?  (Xsoup.select(doc, namePath).list()).get(0)
					: "";
			String cover = (Xsoup.select(doc, coverPath).list()).size() > 0 ?  (Xsoup.select(doc, coverPath).list()).get(0)
					: "";
			String time = (Xsoup.select(doc, timePath).list()).size() > 0  ?  (Xsoup.select(doc, timePath).list()).get(0)
					: "";
			String year = (Xsoup.select(doc, yearPath).list()).size() > 0 ?  (Xsoup.select(doc, yearPath).list()).get(0)
					: "";
			String actor = (Xsoup.select(doc, actorPath).list()).size() > 0 ?  (Xsoup.select(doc, actorPath).list()).get(0)
					: "";
			String director = (Xsoup.select(doc, directorPath).list()).size() > 0 ?  (Xsoup.select(doc, directorPath).list()).get(0)
					: "";
			String area = (Xsoup.select(doc, areaPath).list()).size() > 0 ?  (Xsoup.select(doc, areaPath).list()).get(0)
					: "";
			String category = (Xsoup.select(doc, categoryPath).list()).size() > 0 ?(Xsoup.select(doc, categoryPath).list()).toArray().toString()
					: "";
			String description = (Xsoup.select(doc, descriptionPath).list()).size() > 0 ?  (Xsoup.select(doc, descriptionPath).list()).get(0)
					: "";
			video.setUrl(url == null ? "" : url);
			video.setVid(vid == null ? "" : url);
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
			
			returnMap.put("video", video);
			returnMap.put("sub_url_4", null);
			returnMap.put("exception", false);
			return returnMap;

		} catch (Exception e) {
			returnMap.put("video", null);
			returnMap.put("sub_url_4", null);
			returnMap.put("exception", true);
			return returnMap;
		}

	}

	public synchronized void save(YoukuVideo _video) {
		youkuVideoRepository.save(_video);
	}

	public String getMatcher(String regex, String source) {
		Pattern pattern = Pattern.compile(regex); // 匹配规则
		Matcher matcher = pattern.matcher(source); // 这个是被测试的内容
		return matcher.find() ? matcher.group(1) : "";
	}

}
