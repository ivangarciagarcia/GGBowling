package com.ivang.GGBowling.mapperDTO;

import com.ivang.GGBowling.dto.PistaDTO;
import com.ivang.GGBowling.entity.PistaEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PistaMapperDTO {

  PistaEntity toPistaEntity (PistaDTO pistaDTO);
  PistaDTO toPistaDTO(PistaEntity pistaEntity);
  List<PistaEntity> toPistaEntityList(List<PistaDTO> pistaDTOList);
  List<PistaDTO> toPistaDTOList(List <PistaEntity> pistaEntityList);
}
