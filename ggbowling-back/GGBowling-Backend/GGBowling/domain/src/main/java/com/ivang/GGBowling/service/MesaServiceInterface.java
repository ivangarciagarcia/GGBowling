package com.ivang.GGBowling.service;



import com.ivang.GGBowling.dto.MesaDTO;

import java.util.List;

public interface MesaServiceInterface {

  List<MesaDTO> findAll();

  MesaDTO save(MesaDTO mesaDTO);

  void deleteMesa(Integer mesaId);
}
