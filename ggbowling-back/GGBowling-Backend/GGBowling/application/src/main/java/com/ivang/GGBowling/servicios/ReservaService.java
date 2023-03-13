package com.ivang.GGBowling.servicios;

import com.ivang.GGBowling.dto.reserva.NewReservaDTO;
import com.ivang.GGBowling.dto.reserva.ReservaDTO;
import com.ivang.GGBowling.dto.usuario.NewUsuarioDTO;
import com.ivang.GGBowling.mapperDTO.ReservaMapperDTO;
import com.ivang.GGBowling.repository.ReservaRepository;
import com.ivang.GGBowling.service.ReservaServiceInterface;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ReservaService implements ReservaServiceInterface {

  private final ReservaRepository reservaRepository;

  private final ReservaMapperDTO reservaMapperDTO;

  @Override
  public List<ReservaDTO> findAll() {
    return reservaMapperDTO.toReservaDTOList(reservaRepository.findAll());
  }

  @Override
  public ReservaDTO findByReservaId(Integer reservaId) {
    return reservaMapperDTO.toReservaDTO(reservaRepository.getReferenceById(reservaId));
  }

  @Override
  public NewReservaDTO save(NewReservaDTO newReservaDTO) {
    return reservaMapperDTO.toNewReservaDTO(
        reservaRepository.save(
            reservaMapperDTO.toReservaEntity2(newReservaDTO)));
  }

  @Override
  public void deleteReserva(Integer reservaId) {
      reservaRepository.deleteById(reservaId);
  }
}
