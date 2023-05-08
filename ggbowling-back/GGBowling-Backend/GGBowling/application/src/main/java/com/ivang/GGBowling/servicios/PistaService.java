package com.ivang.GGBowling.servicios;

import com.ivang.GGBowling.dto.Pista.PistaDTO;
import com.ivang.GGBowling.dto.usuario.UsuarioDTO;
import com.ivang.GGBowling.mapperDTO.PistaMapperDTO;
import com.ivang.GGBowling.repository.PistaRepository;
import com.ivang.GGBowling.service.PistaServiceInterface;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PistaService implements PistaServiceInterface {

  private final PistaRepository pistaRepository;

  private final PistaMapperDTO pistaMapperDTO;

  @Override
  public List<PistaDTO> findAll() {
    return pistaMapperDTO.toPistaDTOList(pistaRepository.findAll());
  }

  @Override
  public PistaDTO findByPistaId(Integer pistaId) {
    return pistaMapperDTO.toPistaDTO(pistaRepository.getReferenceById(pistaId));
  }

  @Override
  public PistaDTO save(PistaDTO pistaDTO) {
    return pistaMapperDTO.toPistaDTO(
            pistaRepository.save(
            pistaMapperDTO.toPistaEntity(pistaDTO)));
  }

  @Override
  public void deletePista(Integer pistaId) {
    pistaRepository.deleteById(pistaId);
  }
}
