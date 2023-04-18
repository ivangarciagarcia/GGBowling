package com.ivang.GGBowling.dto.usuario;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class NewUsuarioDTO {

  private Integer id;
  private String username;
  private String password;
  private String nombre;
  private String primerApellido;
  private String segundoApellido;
  private String email;
  private Integer telefono;
  private Date fechaNacimiento;
}
