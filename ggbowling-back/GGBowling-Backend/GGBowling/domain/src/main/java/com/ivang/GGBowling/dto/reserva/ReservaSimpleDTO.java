package com.ivang.GGBowling.dto.reserva;

import com.ivang.GGBowling.dto.usuario.UsuarioReservaDTO;
import lombok.Data;

@Data
public class ReservaSimpleDTO {
    private Integer reservaId;
    private UsuarioReservaDTO usuario;
}
