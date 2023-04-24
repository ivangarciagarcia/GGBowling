package com.ivang.GGBowling.to.Usuario;

import com.ivang.GGBowling.to.reserva.ReservaTO;
import lombok.Data;

import java.util.Date;

@Data
public class UsuarioReservaTO {
  private String username;
  private String nombre;
  private String primerApellido;
  private String segundoApellido;
  private String email;
  private Integer telefono;
  private String fechaNacimiento;
}
