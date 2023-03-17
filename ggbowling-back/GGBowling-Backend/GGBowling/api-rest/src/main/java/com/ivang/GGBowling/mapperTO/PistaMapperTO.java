package com.ivang.GGBowling.mapperTO;

import com.ivang.GGBowling.dto.Pista.PistaDTO;
import com.ivang.GGBowling.dto.Pista.PistaToShowDTO;
import com.ivang.GGBowling.to.Pista.PistaTO;
import com.ivang.GGBowling.to.Pista.PistaToShowTO;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PistaMapperTO {
  PistaDTO toPistaDTO (PistaTO pistaTO);
  PistaTO toPistaTO(PistaDTO pistaDTO);
  List<PistaTO> toPistaTOList(List <PistaDTO> pistaDTOList);
}
