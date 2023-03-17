package com.ivang.GGBowling.to.reserva;


import com.ivang.GGBowling.to.MesaTO;
import com.ivang.GGBowling.to.Pista.PistaTO;
import com.ivang.GGBowling.to.Pista.PistaToShowTO;
import com.ivang.GGBowling.to.Usuario.UsuarioReservaTO;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@Data
public class ReservaTO {
  private Integer reservaId;
  private UsuarioReservaTO usuario;
  private Set<PistaToShowTO> pistas;
  private Set<MesaTO> mesas;
  private Date horaEntrada;
  private Date horaSalida;
  private Integer personas;
  private Integer partidas;
  private Float precioPersona;

}
