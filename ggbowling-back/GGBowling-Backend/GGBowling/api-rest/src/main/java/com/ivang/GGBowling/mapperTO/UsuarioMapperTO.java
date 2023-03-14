package com.ivang.GGBowling.mapperTO;

import com.ivang.GGBowling.dto.usuario.NewUsuarioDTO;
import com.ivang.GGBowling.dto.usuario.UsuarioDTO;
import com.ivang.GGBowling.to.Usuario.NewUsuarioTO;
import com.ivang.GGBowling.to.Usuario.UsuarioTO;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UsuarioMapperTO {

  UsuarioDTO toUsuarioDTO (UsuarioTO usuarioTO);
  UsuarioTO toUsuarioTO(UsuarioDTO usuarioDTO);
  NewUsuarioTO toNewUsuarioTO(NewUsuarioDTO newUsuarioDTO);
  NewUsuarioDTO toNewUsuarioDTO(NewUsuarioTO newUsuarioTO);
  List<UsuarioDTO> toUsuarioDTOList(List<UsuarioTO> usuarioTOList);
  List<UsuarioTO> toUsuarioTOList(List <UsuarioDTO> usuarioDTOList);


}
