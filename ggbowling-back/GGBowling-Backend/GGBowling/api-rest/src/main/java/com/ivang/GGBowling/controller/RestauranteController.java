package com.ivang.GGBowling.controller;

import lombok.AllArgsConstructor;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
@RequestMapping("/restaurante")
public class RestauranteController {

    final String CARTA = "resources/Carta.pdf" ;
    final String MENU = "resources/Menu-del-dia.pdf" ;

    @GetMapping("/carta")
    public ResponseEntity<Resource> descargarCarta() throws IOException {
        File archivo = new File(CARTA);
        InputStreamResource recurso = new InputStreamResource(new FileInputStream(archivo));
        HttpHeaders cabeceras = new HttpHeaders();
        cabeceras.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=Carta.pdf");
        return ResponseEntity.ok().headers(cabeceras).body(recurso);
    }

    @GetMapping("/menu")
    public ResponseEntity<Resource> descargarMenu() throws IOException {
        File archivo = new File(MENU);
        InputStreamResource recurso = new InputStreamResource(new FileInputStream(archivo));
        HttpHeaders cabeceras = new HttpHeaders();
        cabeceras.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=Menu-del-dia.pdf");
        return ResponseEntity.ok().headers(cabeceras).body(recurso);
    }
}
