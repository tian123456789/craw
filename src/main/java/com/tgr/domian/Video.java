package com.tgr.domian;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.tgr.spider.util.StringToArraySerializer;

@Entity
@Table(name = "video")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "origin", discriminatorType = DiscriminatorType.STRING)
public class Video extends BaseEntity implements Serializable {

	private static final long serialVersionUID = 2997027158820827922L;

	// video id
	@Column(name = "vid")
	private String vid;

	// album id
	@Column(name = "album_id")
	private String albumId;

	// tv id
	@Column(name = "tvid")
	private String tvid;

	// 名字
	@Column(name = "name", nullable = false)
	private String name;

	@Column(name = "origin", insertable = false, updatable = false)
	private String origin;

	// 频道
	@Column(name = "channel")
	private String channel;

	@Column(name = "url")
	private String url;

	// 视频源文件地址
	@Column(name = "real_url", columnDefinition = "TEXT")
	private String realUrl;

	// 分类
	@Column(name = "category")
	private String category;

	// 地区
	@JsonSerialize(using = StringToArraySerializer.class, nullsUsing = StringToArraySerializer.class)
	@Column(name = "area")
	private String area;

	// 年份
	@Column(name = "year")
	private String year;

	// 简介
	@Lob
	@Column(name = "description", columnDefinition = "TEXT")
	private String description;

	// 导演
	@JsonSerialize(using = StringToArraySerializer.class, nullsUsing = StringToArraySerializer.class)
	@Column(name = "director")
	private String director;

	// 演员
	@JsonSerialize(using = StringToArraySerializer.class, nullsUsing = StringToArraySerializer.class)
	@Column(name = "actor")
	private String actor;

	// 封面图片地址
	@Column(name = "cover")
	private String cover;

	// 时长
	@Column(name = "time")
	private String time;

	// 是否是VIP，0:不是；1:是；2:用券观看
	@Column(name = "vip")
	private int vip;

	@Column(name = "section_cover")
	private String sectionCover;

	// 摘要，人工编辑
	@Lob
	@Column(name = "abst", columnDefinition = "TEXT")
	private String abst;

	@Enumerated(EnumType.STRING)
	@Column(name = "status", columnDefinition = "VARCHAR(12) DEFAULT 'Off'")
	private Status status = Status.Off;

	// 包含的剧集
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "video_id")
	private Set<Episode> episodes = new HashSet<Episode>();

	// 原始url，备用
	@Transient
	private String originUrl;

	// 发行日期
	@Column(name = "release_date")
	private Date releaseDate;

	// 评分
	private String score;

	public String getVid() {
		return vid;
	}

	public void setVid(String vid) {
		this.vid = vid;
	}

	public String getAlbumId() {
		return albumId;
	}

	public void setAlbumId(String albumId) {
		this.albumId = albumId;
	}

	public String getTvid() {
		return tvid;
	}

	public void setTvid(String tvid) {
		this.tvid = tvid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public String getChannel() {
		return channel;
	}

	public void setChannel(String channel) {
		this.channel = channel;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getRealUrl() {
		return realUrl;
	}

	public void setRealUrl(String realUrl) {
		this.realUrl = realUrl;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDirector() {
		return director;
	}

	public void setDirector(String director) {
		this.director = director;
	}

	public String getActor() {
		return actor;
	}

	public void setActor(String actor) {
		this.actor = actor;
	}

	public String getCover() {
		return cover;
	}

	public void setCover(String cover) {
		this.cover = cover;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public int getVip() {
		return vip;
	}

	public void setVip(int vip) {
		this.vip = vip;
	}

	public String getSectionCover() {
		return sectionCover;
	}

	public void setSectionCover(String sectionCover) {
		this.sectionCover = sectionCover;
	}

	public String getAbst() {
		return abst;
	}

	public void setAbst(String abst) {
		this.abst = abst;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public Set<Episode> getEpisodes() {
		return episodes;
	}

	public void setEpisodes(Set<Episode> episodes) {
		this.episodes = episodes;
	}

	public String getOriginUrl() {
		return originUrl;
	}

	public void setOriginUrl(String originUrl) {
		this.originUrl = originUrl;
	}

	public Date getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getScore() {
		return score;
	}

	public void setScore(String score) {
		this.score = score;
	}

	public enum Status {

		Grabbed, Categorized, Marked, Out, In, On, Off;

		public String label() {
			switch (this) {
			case Grabbed:
				return "未分类";
			case Categorized:
				return "已经分类";
			case Marked:
				return "绑定产品";
			case Out:
				return "出库";
			case In:
				return "入库";
			case On:
				return "上架";
			case Off:
				return "下架";
			default:
				return super.toString();
			}
		}
	}
}
