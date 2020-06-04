package com.tgr.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.tgr.domian.Episode;
import com.tgr.enums.Origin;


@Repository
public interface EpisodeRepository extends PagingAndSortingRepository<Episode, Long> {

	@Modifying
	@Transactional
	void deleteByVideoIsNull();

	@Modifying
	@Transactional
	@Query(value = "delete from episode where id=?1", nativeQuery = true)
	void deleteById(long id);

	Episode findEpisodeByOriginAndVid(Origin origin, String vid);

	List<Episode> findByOriginAndUrlLike(Origin origin, String url);
}
