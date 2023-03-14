package com.ivang.GGBowling.servicios;


import com.ivang.GGBowling.dto.usuario.NewUsuarioDTO;
import com.ivang.GGBowling.dto.usuario.UsuarioDTO;
import com.ivang.GGBowling.entity.UsuarioEntity;
import com.ivang.GGBowling.mapperDTO.UsuarioMapperDTO;
import com.ivang.GGBowling.repository.UsuarioRepository;
import com.ivang.GGBowling.service.UsuarioServiceInterface;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UsuarioService implements UsuarioServiceInterface {
  private final UsuarioRepository usuarioRepository;

  private final UsuarioMapperDTO usuarioMapperDTO;


  @Override
  public List<UsuarioDTO> findAll() {
    return usuarioMapperDTO.toUsuarioDTOList(usuarioRepository.findAll());
  }

  @Override
  public NewUsuarioDTO save(NewUsuarioDTO newUsuarioDTO) {
    return usuarioMapperDTO.toNewUsuarioDTO(
        usuarioRepository.save(
          usuarioMapperDTO.toUsuarioEntity2(newUsuarioDTO)));
  }

  @Override
  public UsuarioDTO findByUsuarioId(Integer usuarioId) {
    return usuarioMapperDTO.toUsuarioDTO(usuarioRepository.getReferenceById(usuarioId));
  }

  @Override
  public UsuarioDTO findByEmail(String email) {
    return usuarioMapperDTO.toUsuarioDTO(usuarioRepository.findByEmail(email));
  }

  @Override
  public void deleteUsuario(Integer usuarioId) {
    usuarioRepository.deleteById(usuarioId);
  }

}
