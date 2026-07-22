package com.pedroguths.microbedatabase.controller;

import com.pedroguths.microbedatabase.dto.request.MicrobeRequest;
import com.pedroguths.microbedatabase.dto.response.MicrobeResponse;
import com.pedroguths.microbedatabase.service.MicrobeService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/microbe")
public class MicrobeController {

    private final MicrobeService microbeService;

    public MicrobeController(MicrobeService microbeService) {
        this.microbeService = microbeService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody MicrobeRequest microbeRequest) {
        microbeService.save(microbeRequest);
    }

    @GetMapping
    public List<MicrobeResponse> find() {
        return microbeService.find();
    }

    @DeleteMapping({"/{id}"})
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id) {
        microbeService.delete(id);
    }

}
