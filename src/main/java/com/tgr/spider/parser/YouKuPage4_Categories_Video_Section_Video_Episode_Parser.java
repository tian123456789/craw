package com.tgr.spider.parser;

import java.util.HashSet;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.google.gson.JsonObject;
import com.tgr.domian.Episode;
import com.tgr.domian.YoukuVideo;
import com.tgr.enums.Origin;
import com.tgr.repository.YoukuVideoRepository;
import com.tgr.spider.util.GsonUtils;

/**
 * @author tgr 电视剧解析器
 */
@Component
public class YouKuPage4_Categories_Video_Section_Video_Episode_Parser {

	@Resource
	private RestTemplate restTemplate;

	@Autowired
	private YoukuVideoRepository youkuVideoRepository;

	public YouKuPage4_Categories_Video_Section_Video_Episode_Parser() {
	}

	public YoukuVideo parse_video(String html0, String url0) {
		Document doc = null;
		try {
			if(!Pattern.matches("(http|https)://list.youku.com/show/id_.*", url0)) {
				return null;
			}
			
			YoukuVideo video = new YoukuVideo();
			doc = Jsoup.parse(html0);
			String channel = doc.select("div.p-base li.p-title a").first().text().trim();

			String url = doc.select("div.p-post div.p-thumb a").first().attr("href");
			String vid = getMatcher("id_(.*).html", url0);
			if (StringUtils.isEmpty(vid)) {
				return null;
			}

			String tvid = getMatcher("id_(.*).html", url0);

			String name = doc.select("div.p-post div.p-thumb a").first().attr("title");
			String cover = doc.select("div.p-post div.p-thumb img").first().attr("src");
			String time = doc.select("div.p-post span.p-time span").text();
			String year = doc.select("div.p-base span.sub-title").first().text();
			String actor = doc.select("div.p-base li.p-performer").attr("title").replaceAll("/", ",");
			String director = StringUtils.join(doc.select("div.p-base li:contains(导演) a").eachText(), ",");
			String area = StringUtils.join(doc.select("div.p-base li:contains(地区) a").eachText(), ",");
			String category = doc.select("div.p-base li:contains(类型) a").text();
			String description = doc.select("div.p-base span.intro-more").text();
			int vip = doc.select("span.vip-free").size() > 0 ? 1 : (doc.select("span.vip-ticket").size() > 0 ? 2 : 0);
			video.setUrl(url);
			video.setVid(vid);
			video.setTvid(tvid);
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
			video.setVip(vip);

			String episodeUrl = "http://list.youku.com/show/episode?stage=reload&callback=___&id=" + tvid;
			String body = restTemplate.getForObject(episodeUrl, String.class);
			String jsonStr = getMatcher("___\\((.*)\\);", body);
			JsonObject json = GsonUtils.parse(jsonStr).getAsJsonObject();
			String htmlStr = json.get("html").getAsString();
			doc = Jsoup.parse(htmlStr);
			Elements elements = doc.select("li");
			if (elements.size() <= 0) {
				return video;
			}
			Set<Episode> episodes = new HashSet<Episode>();
			for (Element e : elements) {
				Elements previews = e.getElementsByClass("p-icon-preview");
				if (previews.size() > 0) {
					continue;
				}
				Elements as = e.getElementsByClass("c555");
				if (as.size() > 0) {
					Element a = as.first();
					Episode episode = new Episode();
					episode.setName(a.text());
					episode.setTvid(tvid);
					episode.setUrl(a.attr("href"));
					episode.setVid(vid);
					episode.setOrigin(Origin.youku);
					if (e.getElementsByClass("p-icon-vip").size() > 0) {
						episode.setVip(1);
					}
					episodes.add(episode);
				}
			}
			video.setEpisodes(episodes);

			return video;

		} catch (Exception e) {
			return null;
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
