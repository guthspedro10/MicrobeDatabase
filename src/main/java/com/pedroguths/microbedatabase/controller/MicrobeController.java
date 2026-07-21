package com.pedroguths.microbedatabase.controller;

import com.pedroguths.microbedatabase.model.MicrobeModel;
import com.pedroguths.microbedatabase.repository.MicrobeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/microbe")
public class MicrobeController {

    private final MicrobeRepository microbeRepository;

    public MicrobeController(MicrobeRepository microbeRepository) {
        this.microbeRepository = microbeRepository;
    }

    @PostMapping
    public MicrobeModel save(@RequestBody MicrobeModel microbeModel) {
        return microbeRepository.save(microbeModel);
    };

    @GetMapping
    public List<MicrobeModel> findAll() {
        return microbeRepository.findAll();
    };
}
