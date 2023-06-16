package com.team.tesbro.Academy;

import com.team.tesbro.Review.Review;
import com.team.tesbro.Teacher.Teacher;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
public class Academy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true)
    private String academyName;

    @Column(length = 100)
    private String ceoName;

    @Column
    private String academyTel;

    @Column(columnDefinition = "TEXT")
    private String introduction;

    @Column(columnDefinition = "TEXT")
    private String imgLogo;

    private LocalDateTime createDate;

    @Column
    private String academyAddress;

    @Column
    private String academySi;

    @Column
    private String academyGu;

    @Column
    private String academyDong;

    @Column
    private Integer jjim;

    @OneToMany(mappedBy = "academy", cascade = CascadeType.REMOVE)
    private List<Teacher> teacherList;

    @OneToMany(mappedBy = "academy", cascade = CascadeType.REMOVE)
    private List<Review> reviewList;

    //업체아이디, 수업리스트 <클래스가 없음
    // 찜하기 .. 후기? 사진 < 방법 모름
}