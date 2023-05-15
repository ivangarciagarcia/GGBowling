package com.ivang.GGBowling.controller;

import com.ivang.GGBowling.dto.usuario.UsuarioDTO;
import com.ivang.GGBowling.mapperTO.UsuarioMapperTO;
import com.ivang.GGBowling.service.UsuarioServiceInterface;
import com.ivang.GGBowling.to.Usuario.NewUsuarioTO;
import com.ivang.GGBowling.to.Usuario.UsuarioTO;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
@RequestMapping("/usuario")
public class UsuarioController {
  private final UsuarioServiceInterface usuarioService;
  private final PasswordEncoder passwordEncoder;
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

  @GetMapping(value = "/findByEmail/{email}")
  public ResponseEntity<UsuarioTO> getUsuarioByEmail(@PathVariable String email) {
    return new ResponseEntity<>(usuarioMapperTO.toUsuarioTO(
            usuarioService.findByEmail(email)
    ),

            getHeader(), HttpStatus.OK);
  }

  @PatchMapping("/update/{usuarioId}")
  public ResponseEntity<UsuarioTO> updateUsuario(@PathVariable Integer usuarioId, @RequestBody UsuarioTO usuarioActualizado) {
    UsuarioTO usuarioExistente =  usuarioMapperTO.toUsuarioTO(usuarioService.findByUsuarioId(usuarioId));
    UsuarioDTO usuarioDTO = usuarioMapperTO.toUsuarioDTO(
            usuarioActualizado);
    usuarioDTO.setUsuarioId(usuarioId);

    UsuarioTO usuarioActualizadoDB = usuarioMapperTO.toUsuarioTO(usuarioService.save2(usuarioDTO));

    return ResponseEntity.ok(usuarioActualizadoDB);
  }

  @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<Object> loginUsuario(@RequestBody Map<String, String> loginRequest){
    String email = loginRequest.get("email");
    String password = loginRequest.get("password");


    UsuarioTO usuario = usuarioMapperTO.toUsuarioTO(usuarioService.findByEmail(email));

    if (usuario == null) {
      return ResponseEntity.badRequest().body("Usuario no encontrado");
    }else if (!usuario.getPassword().equals(password)) {
      return ResponseEntity.badRequest().body("Contraseña incorrecta");
    }else {
      return ResponseEntity.ok(usuario);
    }
  }

  @PostMapping(value = "/create")
  public ResponseEntity<NewUsuarioTO> createUsuario(@RequestBody NewUsuarioTO newUsuarioTO){
    // Encriptar la contraseña antes de guardarla
    String passwordEncriptada = passwordEncoder.encode(newUsuarioTO.getPassword());
    newUsuarioTO.setPassword(passwordEncriptada);

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
