package com.ivang.GGBowling.controller;

import com.ivang.GGBowling.mapperTO.MesaMapperTO;
import com.ivang.GGBowling.service.MesaServiceInterface;
import com.ivang.GGBowling.to.mesa.MesaTO;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/mesa")
public class MesaController {

  private final MesaServiceInterface mesaService;

  private final MesaMapperTO mesaMapperTO;

  @GetMapping(value = "/status")
  public ResponseEntity<String> status(){
    return new ResponseEntity<>("MesaController Up", getHeader(), HttpStatus.OK);
  }

  @GetMapping(value = "/findAll")
  public ResponseEntity <List<MesaTO>> getAll(){
    return new ResponseEntity<>(mesaMapperTO.toMesaTOList(
        mesaService.findAll()),

        getHeader(), HttpStatus.OK);
  }

  @PostMapping(value = "/create")
  public ResponseEntity<MesaTO> createMesa(@RequestBody MesaTO mesaTO){
    return new ResponseEntity<>(mesaMapperTO.toMesaTO(
        mesaService.save(
            mesaMapperTO.toMesaDTO(mesaTO))),

        getHeader(), HttpStatus.OK);
  }

  @DeleteMapping(value = "/delete/{mesaId}")
  void deleteMesa(@PathVariable Integer mesaId) {
    mesaService.deleteMesa(mesaId);
  }


  private HttpHeaders getHeader() {
    HttpHeaders headers = new HttpHeaders();
    headers.add("Content-type", "application/json");
    return headers;
  }
}
