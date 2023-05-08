package com.ivang.GGBowling.service;

import com.ivang.GGBowling.dto.usuario.NewUsuarioDTO;
import com.ivang.GGBowling.dto.usuario.UsuarioDTO;

import java.util.List;

public interface UsuarioServiceInterface {

  List<UsuarioDTO> findAll();
  NewUsuarioDTO save(NewUsuarioDTO newUsuarioDTO);
  UsuarioDTO save2(UsuarioDTO UsuarioDTO);
  UsuarioDTO findByUsuarioId(Integer reservaId);
  UsuarioDTO findByEmail(String email);
  void deleteUsuario(Integer usuarioId);


}
