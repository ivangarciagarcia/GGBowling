package com.ivang.GGBowling.to.reserva;


import com.ivang.GGBowling.to.mesa.MesaTO;
import com.ivang.GGBowling.to.Pista.PistaToShowTO;
import com.ivang.GGBowling.to.Usuario.UsuarioReservaTO;
import com.ivang.GGBowling.to.mesa.MesaToShowTO;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@Data
public class ReservaTO {
  private Integer reservaId;
  private UsuarioReservaTO usuario;
  private Set<PistaToShowTO> pistas;
  private Set<MesaToShowTO> mesas;
  private String fechaEntrada;
  private String horaEntrada;
  private Integer personas;
  private Integer partidas;

}
