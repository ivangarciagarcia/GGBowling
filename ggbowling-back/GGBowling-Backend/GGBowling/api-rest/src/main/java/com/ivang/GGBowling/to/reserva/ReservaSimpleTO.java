package com.ivang.GGBowling.to.reserva;

import com.ivang.GGBowling.to.Usuario.UsuarioReservaTO;
import lombok.Data;

@Data
public class ReservaSimpleTO {
    private Integer reservaId;
    private UsuarioReservaTO usuario;
}
