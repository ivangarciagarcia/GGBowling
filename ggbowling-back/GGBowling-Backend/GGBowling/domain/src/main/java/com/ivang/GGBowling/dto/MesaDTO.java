package com.ivang.GGBowling.dto;

import com.ivang.GGBowling.dto.reserva.ReservaDTO;
import com.ivang.GGBowling.dto.reserva.ReservaSimpleDTO;
import lombok.Data;

@Data
public class MesaDTO {
  private Integer mesaId;
  private String capacidad;
  private ReservaSimpleDTO reserva;

}
