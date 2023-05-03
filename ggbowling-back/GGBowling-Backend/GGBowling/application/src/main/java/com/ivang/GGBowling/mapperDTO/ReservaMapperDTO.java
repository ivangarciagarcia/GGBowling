package com.ivang.GGBowling.mapperDTO;

import com.ivang.GGBowling.dto.reserva.NewReservaDTO;
import com.ivang.GGBowling.dto.reserva.ReservaDTO;
import com.ivang.GGBowling.entity.ReservaEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ReservaMapperDTO {
  ReservaDTO toReservaDTO(ReservaEntity reservaEntity);
  ReservaEntity toNewReservaEntity(NewReservaDTO newReservaDTO);
  ReservaDTO toReservaDTO2(NewReservaDTO newReservaDTO);
  NewReservaDTO toNewReservaDTO (ReservaEntity reservaEntity);
  List<ReservaDTO> toReservaDTOList(List <ReservaEntity> reservaEntityList);
}
