package com.ivang.GGBowling.dto.usuario;

import com.ivang.GGBowling.dto.reserva.ReservaDTO;
import com.ivang.GGBowling.dto.reserva.ReservaUsuarioDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@Data
@AllArgsConstructor
@Builder
public class UsuarioDTO {
  private Integer usuarioId;
  private String username;
  private String password;
  private String nombre;
  private String primerApellido;
  private String segundoApellido;
  private String email;
  private Integer telefono;
  private Date fechaNacimiento;
  private Set<ReservaUsuarioDTO> reserva;

}
