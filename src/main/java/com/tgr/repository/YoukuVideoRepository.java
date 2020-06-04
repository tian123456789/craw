package com.tgr.repository;

import org.springframework.stereotype.Repository;

import com.tgr.domian.YoukuVideo;


@Repository
public interface YoukuVideoRepository extends VideoRepository<YoukuVideo> {

	YoukuVideo findFirstByTvid(String tvid);
}
