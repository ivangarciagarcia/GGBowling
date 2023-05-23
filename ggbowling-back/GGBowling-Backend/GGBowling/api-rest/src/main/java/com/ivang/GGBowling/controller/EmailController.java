package com.ivang.GGBowling.controller;

import com.ivang.GGBowling.servicios.EmailService;
import com.ivang.GGBowling.to.email.EmailRequestTO;
import jakarta.mail.MessagingException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/mail")
@CrossOrigin(origins = "*")
public class EmailController {

    private final EmailService emailService;

    @PostMapping("/send")
    public ResponseEntity<String> enviarCorreo(@RequestBody EmailRequestTO emailRequestTO) throws MessagingException {
        emailService.enviarCorreo(emailRequestTO.getDestinatario(), emailRequestTO.getAsunto(), emailRequestTO.getCuerpo());
        return new ResponseEntity<>(getHeader(), HttpStatus.OK);
    }

    private HttpHeaders getHeader() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/json");
        return headers;
    }
}

