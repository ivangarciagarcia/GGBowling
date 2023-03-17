package com.ivang.GGBowling.dto.reserva;



import com.ivang.GGBowling.dto.mesa.MesaDTO;
import com.ivang.GGBowling.dto.Pista.PistaToShowDTO;
import com.ivang.GGBowling.dto.mesa.MesaToShowDTO;
import com.ivang.GGBowling.dto.usuario.UsuarioDTO;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@Data
public class ReservaDTO {
  private Integer reservaId;
  private UsuarioDTO usuario;
  private Set<PistaToShowDTO> pistas;
  private Set<MesaToShowDTO> mesas;
  private Date horaEntrada;
  private Date horaSalida;
  private Integer personas;
  private Integer partidas;
  private Float precioPersona;

}
