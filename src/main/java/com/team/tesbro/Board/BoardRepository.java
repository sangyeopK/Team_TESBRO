package com.team.tesbro.Board;

import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Integer> {
    Page<Board> findByBoardCategory(String boardCategory, Pageable pageable);
    Page<Board> findBySubjectContainingIgnoreCase(String keyword, Pageable pageable);

    @Query(value = "SELECT * FROM board WHERE BOARD_CATEGORY   = 'notice' ORDER BY CREATE_DATE  DESC LIMIT 1", nativeQuery = true)
    Board findLatestNotice();
}