package com.audisoft.sample.repository;

import com.audisoft.sample.entity.Sample;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SampleRepository extends JpaRepository<Sample, Long> {
    List<Sample> findByUserId(Long userId);

    @Query("SELECT s FROM Sample s WHERE s.userId = :userId ORDER BY s.createdAt DESC")
    List<Sample> findUserSamplesRecent(@Param("userId") Long userId);

    Optional<Sample> findByIdAndUserId(Long id, Long userId);
}
