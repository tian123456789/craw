package com.tgr.domian;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

@Entity
@Table(name = "youku_video")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(discriminatorType = DiscriminatorType.STRING)
@DiscriminatorValue(value = "youku")
public class YoukuVideo extends Video implements Serializable {

	private static final long serialVersionUID = 2997027158820827922L;

	// http://list.youku.com/show/id_zefbfbd61237fefbfbdef.html
	// tvid (电视剧的唯一ID)
	@Column(name = "tvid")
	private String tvid;

	// http://v.youku.com/v_show/id_XMzI3MzcyMTI2MA==.html
	// vid (电视剧的每一集不同)
	@Column(name = "vid")
	private String vid;

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

	public Set<Episode> getEpisodes() {
		return super.getEpisodes();
	}

	public void setEpisodes(Set<Episode> episodes) {
		super.setEpisodes(episodes);
	}

}
