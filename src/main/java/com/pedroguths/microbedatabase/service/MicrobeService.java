package com.pedroguths.microbedatabase.service;

import com.pedroguths.microbedatabase.dto.request.MicrobeRequest;
import com.pedroguths.microbedatabase.dto.response.MicrobeResponse;
import com.pedroguths.microbedatabase.model.MicrobeModel;
import com.pedroguths.microbedatabase.repository.MicrobeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MicrobeService {

    private final MicrobeRepository microbeRepository;

    public MicrobeService(MicrobeRepository microbeRepository) {
        this.microbeRepository = microbeRepository;
    }

    public void save(MicrobeRequest request) {

        MicrobeModel microbe = MicrobeModel.builder()
                .name(request.getName())
                .type(request.getType())
                .disease(request.getDisease())
                .symptoms(request.getSymptoms())
                .transmission(request.getTransmission())
                .build();

        microbeRepository.save(microbe);
    }

    public List<MicrobeResponse> find() {

        return microbeRepository.findAll().stream()
                .map(microbe -> MicrobeResponse.builder()
                        .id(microbe.getId())
                        .name(microbe.getName())
                        .type(microbe.getType())
                        .disease(microbe.getDisease())
                        .symptoms(microbe.getSymptoms())
                        .transmission(microbe.getTransmission())
                        .build())
                .toList();
    }

    public void delete(Long id) {
        microbeRepository.deleteById(id);
    }
}
