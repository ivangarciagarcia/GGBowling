package com.ivang.GGBowling.to.email;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmailRequestTO {
    private String destinatario;
    private String asunto;
    private String cuerpo;
    private String qRCodeUrl;

}
