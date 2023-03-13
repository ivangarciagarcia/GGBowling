package com.ivang.GGBowling.mapperTO;


import com.ivang.GGBowling.dto.MesaDTO;
import com.ivang.GGBowling.to.MesaTO;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MesaMapperTO {
  MesaDTO toMesaDTO (MesaTO mesaTO);
  MesaTO toMesaTO(MesaDTO mesaTO);
  List<MesaDTO> toMesaDTOList(List<MesaTO> mesaTOList);
  List<MesaTO> toMesaTOList(List <MesaDTO> mesaDTOList);
}
