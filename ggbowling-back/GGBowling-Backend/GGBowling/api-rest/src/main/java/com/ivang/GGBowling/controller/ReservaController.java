package com.ivang.GGBowling.controller;

import com.ivang.GGBowling.dto.usuario.UsuarioDTO;
import com.ivang.GGBowling.dto.usuario.UsuarioReservaDTO;
import com.ivang.GGBowling.mapperTO.ReservaMapperTO;
import com.ivang.GGBowling.mapperTO.UsuarioMapperTO;
import com.ivang.GGBowling.service.ReservaServiceInterface;
import com.ivang.GGBowling.service.UsuarioServiceInterface;
import com.ivang.GGBowling.to.reserva.NewReservaTO;
import com.ivang.GGBowling.to.reserva.ReservaTO;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@AllArgsConstructor
@RequestMapping("/reserva")
public class ReservaController {

  private final ReservaMapperTO reservaMapperTO;
  private final UsuarioMapperTO usuarioMapperTO;
  private final UsuarioServiceInterface usuarioService;
  private final ReservaServiceInterface reservaService;

  @GetMapping(value = "/status")
  public ResponseEntity<String> status(){
    return new ResponseEntity<>("ReservaController Up", getHeader(), HttpStatus.OK);
  }

  @GetMapping(value = "/findAll")
  public ResponseEntity <List<ReservaTO>> getAll(){
    return new ResponseEntity<>(reservaMapperTO.toReservaTOList(
        reservaService.findAll()),

        getHeader(), HttpStatus.OK);
  }

  @GetMapping(value = "/findById/{reservaId}")
  public ResponseEntity<ReservaTO> getReservaById(@PathVariable Integer reservaId) {
    return new ResponseEntity<>(reservaMapperTO.toReservaTO(
        reservaService.findByReservaId(reservaId)
    ),

        getHeader(), HttpStatus.OK);
  }

  @PostMapping(value = "/create")
  public ResponseEntity<NewReservaTO> createReserva(@RequestBody NewReservaTO newReservaTO){
    // Primero, obtenemos el usuario a partir del id
    UsuarioDTO usuarioDTO = usuarioService.findByUsuarioId(newReservaTO.getUsuario());

    // Reemplazamos el id del usuario con el usuarioDTO encontrado
    newReservaTO.setUsuario(usuarioDTO.getUsuarioId());

    // Guardamos la reserva con el usuario actualizado
    return new ResponseEntity<>(reservaMapperTO.toNewReservaTO(
            reservaService.save(
                    reservaMapperTO.toNewReservaDTO(newReservaTO))),
            getHeader(), HttpStatus.OK);
  }

  @DeleteMapping(value = "/delete/{reservaId}")
  void deleteReserva(@PathVariable Integer reservaId) {
    reservaService.deleteReserva(reservaId);
  }


  private HttpHeaders getHeader() {
    HttpHeaders headers = new HttpHeaders();
    headers.add("Content-type", "application/json");
    return headers;
  }
}
