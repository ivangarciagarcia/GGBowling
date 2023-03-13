package com.ivang.GGBowling.service;


import com.ivang.GGBowling.dto.PistaDTO;

import java.util.List;

public interface PistaServiceInterface {

  List<PistaDTO> findAll();

  PistaDTO save(PistaDTO pistaDTO);

  void deletePista(Integer pistaId);
}
