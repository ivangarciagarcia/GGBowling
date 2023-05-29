package com.ivang.GGBowling.controller;

import com.ivang.GGBowling.exceptions.reserva.PersonasCannotBeNullException;
import com.ivang.GGBowling.exceptions.reserva.ReservaAlreadyDoException;
import com.ivang.GGBowling.exceptions.reserva.UsuarioNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.Map;

@ControllerAdvice
public class ExceptionController extends ResponseEntityExceptionHandler {
    @ExceptionHandler(ReservaAlreadyDoException.class)
    public ResponseEntity<Object> handleReservaAlreadyDoException(
            ReservaAlreadyDoException ex, WebRequest request) {
        return new ResponseEntity<>(getBody(ex, request), HttpStatus.CONFLICT);
    }

    @ExceptionHandler(PersonasCannotBeNullException.class)
    public ResponseEntity<Object> handlePersonasCannotBeNullException(
            PersonasCannotBeNullException ex, WebRequest request) {
        return new ResponseEntity<>(getBody(ex, request), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(UsuarioNotFoundException.class)
    public ResponseEntity<Object> handleUsuarioNotFoundException(
            UsuarioNotFoundException ex, WebRequest request) {
        return new ResponseEntity<>(getBody(ex, request), HttpStatus.BAD_REQUEST);
    }

    private String getUri(WebRequest request) {
        return ((ServletWebRequest) request).getRequest().getRequestURI();
    }

    private Map<String, Object> getBody(Exception ex, WebRequest request) {
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("timestamp", LocalDateTime.now());
        body.put("message", ex.getMessage());
        body.put("path", getUri(request));
        return body;
    }
}
