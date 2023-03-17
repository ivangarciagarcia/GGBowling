package com.ivang.GGBowling.dto.Pista;

import com.ivang.GGBowling.dto.reserva.ReservaDTO;
import com.ivang.GGBowling.dto.reserva.ReservaSimpleDTO;
import lombok.Data;

@Data
public class PistaDTO {
  private Integer pistaId;
  private String capacidad;
  private ReservaSimpleDTO reserva;
}
