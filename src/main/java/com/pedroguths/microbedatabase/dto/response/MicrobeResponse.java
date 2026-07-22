package com.pedroguths.microbedatabase.dto.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MicrobeResponse {

    private Long id;
    private String name;
    private String type;
    private String disease;
    private String symptoms;
    private String transmission;

}
