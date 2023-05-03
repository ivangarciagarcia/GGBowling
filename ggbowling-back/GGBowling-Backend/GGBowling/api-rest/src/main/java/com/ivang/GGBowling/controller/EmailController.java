package com.ivang.GGBowling.controller;

import com.ivang.GGBowling.servicios.EmailService;
import com.ivang.GGBowling.to.email.EmailRequestTO;
import lombok.Data;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Data
public class EmailController {

    private final EmailService emailService;

    @PostMapping("/mail")
    public ResponseEntity<String> enviarCorreo(@RequestBody EmailRequestTO emailRequestTO) {
        emailService.enviarCorreo(emailRequestTO.getDestinatario(), emailRequestTO.getAsunto(), emailRequestTO.getCuerpo());
        return ResponseEntity.ok("Correo electrónico enviado correctamente.");
    }
}

