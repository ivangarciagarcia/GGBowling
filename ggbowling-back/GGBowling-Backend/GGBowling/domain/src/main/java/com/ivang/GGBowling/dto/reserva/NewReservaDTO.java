package com.ivang.GGBowling.dto.reserva;


import com.ivang.GGBowling.dto.mesa.MesaDTO;
import com.ivang.GGBowling.dto.Pista.PistaDTO;
import com.ivang.GGBowling.dto.usuario.UsuarioReservaDTO;
import lombok.Data;
import java.util.Set;

@Data
public class NewReservaDTO {
  private UsuarioReservaDTO usuario;
  private PistaDTO pista;
  private MesaDTO mesa;
  private String fechaEntrada;
  private String horaEntrada;
  private Integer personas;
  private Integer partidas;
}
