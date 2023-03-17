package com.ivang.GGBowling.dto.reserva;


import com.ivang.GGBowling.dto.MesaDTO;
import com.ivang.GGBowling.dto.Pista.PistaDTO;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@Data
public class ReservaUsuarioDTO {
  private Integer reservaId;
  private Set<PistaDTO> pistas;
  private Set<MesaDTO> mesas;
  private Date horaEntrada;
  private Date horaSalida;
  private Integer personas;
  private Integer partidas;
  private Float precioPersona;

}
