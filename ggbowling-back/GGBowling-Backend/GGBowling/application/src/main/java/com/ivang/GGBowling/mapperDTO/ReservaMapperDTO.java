package com.ivang.GGBowling.mapperDTO;

import com.ivang.GGBowling.dto.reserva.NewReservaDTO;
import com.ivang.GGBowling.dto.reserva.ReservaDTO;
import com.ivang.GGBowling.dto.usuario.NewUsuarioDTO;
import com.ivang.GGBowling.entity.ReservaEntity;
import com.ivang.GGBowling.entity.UsuarioEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ReservaMapperDTO {
  ReservaEntity toReservaEntity (ReservaDTO pistaDTO);
  ReservaDTO toReservaDTO(ReservaEntity pistaEntity);
  ReservaEntity toReservaEntity2 (NewReservaDTO newReservaDTO);
  NewReservaDTO toNewReservaDTO (ReservaEntity reservaEntity);
  List<ReservaEntity> toReservaEntityList(List<ReservaDTO> pistaDTOList);
  List<ReservaDTO> toReservaDTOList(List <ReservaEntity> pistaEntityList);
}
