package com.ivang.GGBowling.controller;

import com.ivang.GGBowling.dto.Pista.PistaDTO;
import com.ivang.GGBowling.dto.mesa.MesaDTO;
import com.ivang.GGBowling.dto.reserva.NewReservaDTO;
import com.ivang.GGBowling.dto.reserva.ReservaDTO;
import com.ivang.GGBowling.dto.usuario.UsuarioDTO;
import com.ivang.GGBowling.mapperDTO.ReservaMapperDTO;
import com.ivang.GGBowling.mapperTO.ReservaMapperTO;
import com.ivang.GGBowling.service.MesaServiceInterface;
import com.ivang.GGBowling.service.PistaServiceInterface;
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
  private final ReservaMapperDTO reservaMapperDTO;
  private final ReservaServiceInterface reservaService;

  private final UsuarioServiceInterface usuarioService;
  private final PistaServiceInterface pistaService;
  private final MesaServiceInterface mesaService;

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
  public ResponseEntity<ReservaTO> createReserva(@RequestBody NewReservaTO newReservaTO){
    // Buscar los objetos correspondientes
    UsuarioDTO usuarioDTO = usuarioService.findByUsuarioId(newReservaTO.getUsuarioId());
    PistaDTO pistaDTO = pistaService.findByPistaId(newReservaTO.getPistaId());
    MesaDTO mesaDTO = mesaService.findByMesaId(newReservaTO.getMesaId());

    // Crear una NewReservaDTO con los objetos encontrados
    NewReservaDTO newReservaDTO = new NewReservaDTO();
    newReservaDTO.setUsuarioId(usuarioDTO.getUsuarioId());
    newReservaDTO.setPista(pistaDTO);
    newReservaDTO.setMesa(mesaDTO);
    newReservaDTO.setFechaEntrada(newReservaTO.getFechaEntrada());
    newReservaDTO.setHoraEntrada(newReservaTO.getHoraEntrada());
    newReservaDTO.setPersonas(newReservaTO.getPersonas());
    newReservaDTO.setPartidas(newReservaTO.getPartidas());

    // Guardar la reserva y convertirla a un ReservaTO
    ReservaDTO reservaDTO = reservaMapperDTO.toReservaDTO2(reservaService.save(newReservaDTO));
    ReservaTO reservaTO = reservaMapperTO.toReservaTO(reservaDTO);

    return new ResponseEntity<>(reservaTO, getHeader(), HttpStatus.OK);
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
