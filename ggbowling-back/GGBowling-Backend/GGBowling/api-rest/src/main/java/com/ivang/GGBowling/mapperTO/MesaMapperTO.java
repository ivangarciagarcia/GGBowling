package com.ivang.GGBowling.mapperTO;


import com.ivang.GGBowling.dto.mesa.MesaDTO;
import com.ivang.GGBowling.to.mesa.MesaTO;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MesaMapperTO {
  MesaDTO toMesaDTO (MesaTO mesaTO);
  MesaTO toMesaTO(MesaDTO mesaTO);
  List<MesaTO> toMesaTOList(List <MesaDTO> mesaDTOList);
}
