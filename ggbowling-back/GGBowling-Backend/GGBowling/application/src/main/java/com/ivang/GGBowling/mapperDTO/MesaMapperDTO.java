package com.ivang.GGBowling.mapperDTO;

import com.ivang.GGBowling.dto.mesa.MesaDTO;
import com.ivang.GGBowling.entity.MesaEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MesaMapperDTO {

  MesaEntity toMesaEntity (MesaDTO mesaDTO);
  MesaDTO toMesaDTO(MesaEntity mesaEntity);
  List<MesaDTO> toMesaDTOList(List <MesaEntity> mesaEntities);

}
