package com.ivang.GGBowling.mapperTO;

import com.ivang.GGBowling.dto.PistaDTO;
import com.ivang.GGBowling.to.PistaTO;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PistaMapperTO {
  PistaDTO toPistaDTO (PistaTO pistaTO);
  PistaTO toPistaTO(PistaDTO pistaDTO);
  List<PistaDTO> toPistaDTOList(List<PistaTO> pistaTOList);
  List<PistaTO> toPistaTOList(List <PistaDTO> pistaDTOList);
}
