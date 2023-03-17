package com.ivang.GGBowling.to.Pista;

import com.ivang.GGBowling.to.reserva.ReservaSimpleTO;
import com.ivang.GGBowling.to.reserva.ReservaTO;
import lombok.Data;

@Data
public class PistaTO {
  private Integer pistaId;
  private String capacidad;
  private ReservaSimpleTO reserva;
}
