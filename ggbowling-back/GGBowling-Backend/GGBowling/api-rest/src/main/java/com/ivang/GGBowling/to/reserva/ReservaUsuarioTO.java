package com.ivang.GGBowling.to.reserva;

import com.ivang.GGBowling.to.MesaTO;
import com.ivang.GGBowling.to.Pista.PistaTO;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@Data
public class ReservaUsuarioTO {
  private Integer reservaId;
  private Set<PistaTO> pistas;
  private Set<MesaTO> mesas;
  private Date horaEntrada;
  private Date horaSalida;
  private Integer personas;
  private Integer partidas;
  private Float precioPersona;

}
