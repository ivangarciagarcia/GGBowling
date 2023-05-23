package com.ivang.GGBowling.servicios;

import jakarta.activation.DataSource;
import jakarta.activation.URLDataSource;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.apache.commons.io.IOUtils;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

@Service
@AllArgsConstructor
public class EmailService {

    private final JavaMailSender javaMailSender;

    public void enviarCorreo(String destinatario, String asunto, String cuerpo, String qrCodeUrl) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setTo(destinatario);
        helper.setSubject(asunto);

        // Construye el cuerpo del mensaje con la URL del código QR como imagen incrustada
        String cuerpoConQRCode = cuerpo + "<br/><img src=\"" + qrCodeUrl + "\" alt=\"Código QR de reserva\" width=\"200\" height=\"200\" />";
        helper.setText(cuerpoConQRCode, true); // Establece el contenido del cuerpo como HTML

        javaMailSender.send(message);
    }




}
