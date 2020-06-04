package com.tgr.domian;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tgr.enums.Origin;

@Entity
@Table(name = "episode")
public class Episode extends BaseEntity implements Serializable {

	private static final long serialVersionUID = -3140029966881143029L;

	@Column(name = "tvid")
	private String tvid;

	@Column(name = "vid")
	private String vid;

	@Column(name = "album_id")
	private String albumId;

	@Column(name = "name")
	private String name;

	@Column(name = "url")
	private String url;

	// 视频源文件地址
	@Column(name = "real_url", columnDefinition = "TEXT")
	private String realUrl;

	// 是否是VIP，0:不是；1:是；2:用券观看
	@Column(name = "vip")
	private int vip;

	@Column(name = "origin", length = 10)
	@Enumerated(EnumType.STRING)
	private Origin origin;

	// 简介
	@Lob
	@Column(name = "description", columnDefinition = "TEXT")
	private String description;

	// 时长
	@Column(name = "time")
	private String time;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "video_id", foreignKey = @ForeignKey(name = "FK_video_id_in_episode"))
	private Video video;

	@Transient
	private String originUrl;

	public String getTvid() {
		return tvid;
	}

	public void setTvid(String tvid) {
		this.tvid = tvid;
	}

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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public int getVip() {
		return vip;
	}

	public void setVip(int vip) {
		this.vip = vip;
	}

	public Origin getOrigin() {
		return origin;
	}

	public void setOrigin(Origin origin) {
		this.origin = origin;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public Video getVideo() {
		return video;
	}

	public void setVideo(Video video) {
		this.video = video;
	}

	public String getOriginUrl() {
		return originUrl;
	}

	public void setOriginUrl(String originUrl) {
		this.originUrl = originUrl;
	}

}
