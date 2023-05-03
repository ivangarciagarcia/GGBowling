package com.ivang.GGBowling.controller;

import com.ivang.GGBowling.servicios.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/mail")
    public ResponseEntity<String> enviarCorreo(@RequestParam String destinatario,
                                               @RequestParam String asunto,
                                               @RequestParam String cuerpo) {

        emailService.enviarCorreo(destinatario, asunto, cuerpo);
        return ResponseEntity.ok("Correo electrónico enviado correctamente.");
    }
}

