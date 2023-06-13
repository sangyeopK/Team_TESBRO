package com.ll.basic1.Academy;

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
}
