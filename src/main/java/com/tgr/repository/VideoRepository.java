package com.tgr.repository;

import java.math.BigInteger;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.tgr.domian.Video;
import com.tgr.domian.Video.Status;


@Repository
public interface VideoRepository<T extends Video>
		extends PagingAndSortingRepository<T, Long>, JpaSpecificationExecutor<Video> {

	@Query(value = "SELECT COUNT(*) FROM video WHERE id !=?1", nativeQuery = true)
	int findCount(long sectionId);

	@Query(value = "SELECT * FROM video as v WHERE v.status = 'On' LIMIT ?1,?2", nativeQuery = true)
	List<Video> findList(int currentNum, int PAGE_SIZE);

	@Query(value = "SELECT * FROM video as v WHERE id Not In ?1 AND v.status = 'On' LIMIT ?2,?3", nativeQuery = true)
	List<Video> findListNotInIds(List<Long> Ids, int currentNum, int PAGE_SIZE);


	// @Query("select v from Video as v where id in ?1 and v.status = 'On' ")
	Page<Video> findByIdIn(List<Long> ids, Pageable pageable);

	/* @Query(value = "SELECT * FROM video WHERE id In ?1", nativeQuery = true) */
	List<Video> findByIdInOrderByYearDesc(List<Long> videoIds);

	List<Video> findByIdIn(List<Long> videoIds);

	List<Video> findByIdIn(Long[] ids);

	Page<Video> findByStatus(Video.Status status, Pageable Pageable);

	@Query(value = "SELECT * FROM video as v WHERE id In ?1 AND v.status = 'On' LIMIT ?2,?3", nativeQuery = true)
	List<Video> findListInIds(List<Long> ids, int currentNum, int pageSize);

	Page<Video> findByNameContaining(String name, Pageable Pageable);

	List<T> findByOriginAndStatus(String origin, Status status);

	@Query(value = "SELECT COUNT(*) FROM video as v WHERE v.status = 'On'", nativeQuery = true)
	long findCountByStatus();

	@Query(value = "SELECT id FROM video", nativeQuery = true)
	List<BigInteger> findAllId();

	@Query(value = "SELECT * FROM video as v WHERE v.status = 'On'", nativeQuery = true)
	List<Video> findByStatusOn();


}
