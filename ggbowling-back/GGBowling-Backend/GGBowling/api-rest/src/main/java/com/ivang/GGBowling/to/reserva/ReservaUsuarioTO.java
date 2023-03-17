package com.ivang.GGBowling.to.reserva;

import com.ivang.GGBowling.to.Pista.PistaToShowTO;
import com.ivang.GGBowling.to.mesa.MesaTO;
import com.ivang.GGBowling.to.Pista.PistaTO;
import com.ivang.GGBowling.to.mesa.MesaToShowTO;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@Data
public class ReservaUsuarioTO {
  private Integer reservaId;
  private Set<PistaToShowTO> pistas;
  private Set<MesaToShowTO> mesas;
  private Date horaEntrada;
  private Date horaSalida;
  private Integer personas;
  private Integer partidas;
  private Float precioPersona;

}
