package com.ivang.GGBowling.mapperDTO;

import com.ivang.GGBowling.dto.usuario.NewUsuarioDTO;
import com.ivang.GGBowling.dto.usuario.UsuarioDTO;
import com.ivang.GGBowling.dto.usuario.UsuarioReservaDTO;
import com.ivang.GGBowling.entity.UsuarioEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UsuarioMapperDTO {

  UsuarioEntity toUsuarioEntity (UsuarioDTO usuarioDTO);
  UsuarioReservaDTO toUsuarioReservaDTO (UsuarioDTO usuarioDTO);
  UsuarioDTO toUsuarioDTO(UsuarioEntity usuarioEntity);
  UsuarioEntity toNewUsuarioEntity(NewUsuarioDTO newUsuarioDTO);
  NewUsuarioDTO toNewUsuarioDTO (UsuarioEntity usuarioEntity);
  List<UsuarioDTO> toUsuarioDTOList(List <UsuarioEntity> usuarioEntityList);


}
