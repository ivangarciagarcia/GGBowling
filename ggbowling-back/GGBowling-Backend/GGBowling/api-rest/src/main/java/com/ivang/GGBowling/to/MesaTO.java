package com.ivang.GGBowling.to;

import com.ivang.GGBowling.to.reserva.ReservaSimpleTO;
import com.ivang.GGBowling.to.reserva.ReservaTO;
import lombok.Data;

@Data
public class MesaTO {
  private Integer mesaId;
  private String capacidad;
  private ReservaSimpleTO reserva;

}
