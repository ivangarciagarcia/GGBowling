package com.ivang.GGBowling.service;

import com.ivang.GGBowling.dto.reserva.NewReservaDTO;
import com.ivang.GGBowling.dto.reserva.ReservaDTO;

import java.util.List;

public interface ReservaServiceInterface {
  List<ReservaDTO> findAll();

  ReservaDTO findByReservaId(Integer reservaId);

  NewReservaDTO save(NewReservaDTO newReservaDTO);
  boolean existeReservaEnMismoHorario(NewReservaDTO reservaDTO);

  void deleteReserva(Integer reservaId);
}
