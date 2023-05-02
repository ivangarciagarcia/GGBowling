package com.ivang.GGBowling.to.reserva;

import com.ivang.GGBowling.to.Pista.PistaTO;
import com.ivang.GGBowling.to.mesa.MesaTO;
import lombok.Data;

import java.util.Set;

@Data
public class ReservaUsuarioTO {
  private Integer reservaId;
  private PistaTO pista;
  private MesaTO mesa;
  private String fechaEntrada;
  private String horaEntrada;
  private Integer personas;
  private Integer partidas;
}
