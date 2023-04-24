package com.ivang.GGBowling.dto.reserva;



import com.ivang.GGBowling.dto.mesa.MesaDTO;
import com.ivang.GGBowling.dto.Pista.PistaToShowDTO;
import com.ivang.GGBowling.dto.mesa.MesaToShowDTO;
import com.ivang.GGBowling.dto.usuario.UsuarioDTO;
import com.ivang.GGBowling.entity.MesaEntity;
import com.ivang.GGBowling.entity.PistaEntity;
import com.ivang.GGBowling.entity.UsuarioEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@Data
public class ReservaDTO {

  private Integer reservaId;
  private UsuarioEntity usuario;
  private Set<PistaEntity> pistas;
  private Set<MesaEntity> mesas;
  private String fechaEntrada;
  private String horaEntrada;
  private Integer personas;
  private Integer partidas;

}
