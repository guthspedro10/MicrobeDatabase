package com.pedroguths.microbedatabase.dto.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MicrobeRequest {

    private String name;
    private String type;
    private String disease;
    private String symptoms;
    private String transmission;

}
