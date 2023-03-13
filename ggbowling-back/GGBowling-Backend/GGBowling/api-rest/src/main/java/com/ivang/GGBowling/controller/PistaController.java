package com.ivang.GGBowling.controller;

import com.ivang.GGBowling.mapperTO.PistaMapperTO;
import com.ivang.GGBowling.service.PistaServiceInterface;
import com.ivang.GGBowling.to.PistaTO;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/pista")
public class PistaController {

  private final PistaServiceInterface pistaService;

  private final PistaMapperTO pistaMapperTO;

  @GetMapping(value = "/status")
  public ResponseEntity<String> status(){
    return new ResponseEntity<>("PistaController Up", getHeader(), HttpStatus.OK);
  }

  @GetMapping(value = "/findAll")
  public ResponseEntity <List<PistaTO>> getAll(){
    return new ResponseEntity<>(pistaMapperTO.toPistaTOList(
        pistaService.findAll()),

        getHeader(), HttpStatus.OK);
  }

  @PostMapping(value = "/create")
  public ResponseEntity<PistaTO> createPista(@RequestBody PistaTO pistaTO){
    return new ResponseEntity<>(pistaMapperTO.toPistaTO(
        pistaService.save(
            pistaMapperTO.toPistaDTO(pistaTO))),

        getHeader(), HttpStatus.OK);
  }

  @DeleteMapping(value = "/delete/{pistaId}")
  void deletePista(@PathVariable Integer pistaId) {
    pistaService.deletePista(pistaId);
  }

  private HttpHeaders getHeader() {
    HttpHeaders headers = new HttpHeaders();
    headers.add("Content-type", "application/json");
    return headers;
  }
}
