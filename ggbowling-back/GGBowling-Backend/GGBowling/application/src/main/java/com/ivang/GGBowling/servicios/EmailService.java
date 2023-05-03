package com.ivang.GGBowling.servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendEmail(String to, String subject, String body) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("garciaivan200@gmail.com");
        message.setTo("garciaivan300@gmail.com");
        message.setSubject("PRUEBA");
        message.setText("ESTO ES UNA PRUEBA");

        javaMailSender.send(message);
    }
}
