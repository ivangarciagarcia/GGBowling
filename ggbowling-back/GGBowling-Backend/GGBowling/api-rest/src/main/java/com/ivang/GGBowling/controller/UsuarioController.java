package com.ivang.GGBowling.controller;

import com.ivang.GGBowling.mapperTO.UsuarioMapperTO;
import com.ivang.GGBowling.service.UsuarioServiceInterface;
import com.ivang.GGBowling.to.Usuario.NewUsuarioTO;
import com.ivang.GGBowling.to.Usuario.UsuarioTO;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/usuario")
public class UsuarioController {
  private final UsuarioServiceInterface usuarioService;

  private final UsuarioMapperTO usuarioMapperTO;

  @GetMapping(value = "/status")
  public ResponseEntity<String> status(){
    return new ResponseEntity<>("UserController Up", getHeader(), HttpStatus.OK);
  }

  @GetMapping(value = "/findAll")
  public ResponseEntity <List<UsuarioTO>> getAll(){
    return new ResponseEntity<>(usuarioMapperTO.toUsuarioTOList(
        usuarioService.findAll()),

        getHeader(), HttpStatus.OK);
  }

  @GetMapping(value = "/findById/{usuarioId}")
  public ResponseEntity<UsuarioTO> getUsuarioById(@PathVariable Integer usuarioId) {
    return new ResponseEntity<>(usuarioMapperTO.toUsuarioTO(
        usuarioService.findByUsuarioId(usuarioId)
    ),

        getHeader(), HttpStatus.OK);
  }



  @PostMapping(value = "/create")
  public ResponseEntity<NewUsuarioTO> createUsuario(@RequestBody NewUsuarioTO newUsuarioTO){
    return new ResponseEntity<>(usuarioMapperTO.toNewUsuarioTO(
        usuarioService.save(
            usuarioMapperTO.toNewUsuarioDTO(newUsuarioTO))),

        getHeader(), HttpStatus.OK);
  }

  @DeleteMapping(value = "/delete/{usuarioId}")
  void deleteUsuario(@PathVariable Integer usuarioId) {
    usuarioService.deleteUsuario(usuarioId);
  }

  private HttpHeaders getHeader() {
    HttpHeaders headers = new HttpHeaders();
    headers.add("Content-type", "application/json");
    return headers;
  }

}
