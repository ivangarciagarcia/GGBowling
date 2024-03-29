package com.ivang.GGBowling.service;


import com.ivang.GGBowling.dto.Pista.PistaDTO;

import java.util.List;

public interface PistaServiceInterface {

  List<PistaDTO> findAll();
  PistaDTO findByPistaId(Integer pistaId);
  PistaDTO save(PistaDTO pistaDTO);

  void deletePista(Integer pistaId);
}
