package com.ivang.GGBowling.to.reserva;

import com.ivang.GGBowling.to.Usuario.UsuarioReservaTO;
import com.ivang.GGBowling.to.mesa.MesaTO;
import com.ivang.GGBowling.to.Pista.PistaTO;
import lombok.Data;
@Data
public class NewReservaTO {
  private UsuarioReservaTO usuario;
  private PistaTO pista;
  private MesaTO mesa;
  private String fechaEntrada;
  private String horaEntrada;
  private Integer personas;
  private Integer partidas;
}
