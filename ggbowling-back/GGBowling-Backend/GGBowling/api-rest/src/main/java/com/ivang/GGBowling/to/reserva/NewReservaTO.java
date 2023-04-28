package com.ivang.GGBowling.to.reserva;

import com.ivang.GGBowling.dto.usuario.UsuarioDTO;
import com.ivang.GGBowling.dto.usuario.UsuarioReservaDTO;
import com.ivang.GGBowling.to.mesa.MesaTO;
import com.ivang.GGBowling.to.Pista.PistaTO;
import lombok.Data;

import java.util.Date;
import java.util.Set;
@Data
public class NewReservaTO {
  private Integer usuario;
  private Set<Integer> pistas;
  private Set<Integer> mesas;
  private String fechaEntrada;
  private String horaEntrada;
  private Integer personas;
  private Integer partidas;
}
