package com.ivang.GGBowling.mapperDTO;

import com.ivang.GGBowling.dto.Pista.PistaDTO;
import com.ivang.GGBowling.dto.Pista.PistaToShowDTO;
import com.ivang.GGBowling.entity.PistaEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PistaMapperDTO {

  PistaEntity toPistaEntity (PistaDTO pistaDTO);
  PistaDTO toPistaDTO(PistaEntity pistaEntity);
  List<PistaDTO> toPistaDTOList(List <PistaEntity> pistaEntityList);
}
