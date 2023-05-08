package com.ivang.GGBowling.dto.usuario;

import lombok.Data;

import java.util.Date;

@Data
public class UsuarioReservaDTO {
  private Integer usuarioId;
  private String username;
  private String nombre;
  private String primerApellido;
  private String segundoApellido;
  private String email;
  private Integer telefono;
  private String fechaNacimiento;
}
