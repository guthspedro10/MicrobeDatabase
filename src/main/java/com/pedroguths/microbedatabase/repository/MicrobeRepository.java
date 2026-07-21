package com.pedroguths.microbedatabase.repository;

import com.pedroguths.microbedatabase.model.MicrobeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MicrobeRepository extends JpaRepository<MicrobeModel, Long> {
}
