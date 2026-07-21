package com.pedroguths.microbedatabase.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table (name = "microbe")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MicrobeModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (nullable = false, length = 100)
    private String name;

    @Column (nullable = false, length = 30)
    private String type;

    @Column (nullable = false, length = 100)
    private String disease;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String symptoms;

    @Column (nullable = false, length = 100)
    private String transmission;

}
