package com.ivang.GGBowling.to.Usuario;

import com.ivang.GGBowling.to.reserva.ReservaTO;
import com.ivang.GGBowling.to.reserva.ReservaUsuarioTO;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@Data
@AllArgsConstructor
public class UsuarioTO {
  private Integer usuarioId;
  private String username;
  private String password;
  private String nombre;
  private String primerApellido;
  private String segundoApellido;
  private String email;
  private Integer telefono;
  private Date fechaNacimiento;
  private Set<ReservaUsuarioTO> reserva;

}
