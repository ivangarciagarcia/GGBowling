package com.ivang.GGBowling.servicios;


import com.ivang.GGBowling.dto.MesaDTO;
import com.ivang.GGBowling.mapperDTO.MesaMapperDTO;
import com.ivang.GGBowling.repository.MesaRepository;
import com.ivang.GGBowling.service.MesaServiceInterface;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MesaService implements MesaServiceInterface {

  private final MesaRepository mesaRepository;

  private final MesaMapperDTO mesaMapperDTO;

  @Override
  public List<MesaDTO> findAll() {
    return mesaMapperDTO.toMesaDTOList(mesaRepository.findAll());
  }

  @Override
  public MesaDTO save(MesaDTO mesaDTO) {
    return mesaMapperDTO.toMesaDTO(
            mesaRepository.save(
            mesaMapperDTO.toMesaEntity(mesaDTO)));
  }

  @Override
  public void deleteMesa(Integer mesaId) {
    mesaRepository.deleteById(mesaId);
  }
}
