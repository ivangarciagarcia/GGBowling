package com.ivang.GGBowling.mapperTO;

import com.ivang.GGBowling.dto.reserva.NewReservaDTO;
import com.ivang.GGBowling.dto.reserva.ReservaDTO;
import com.ivang.GGBowling.to.reserva.NewReservaTO;
import com.ivang.GGBowling.to.reserva.ReservaTO;
import org.mapstruct.Mapper;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ReservaMapperTO {
  ReservaDTO toReservaDTO (ReservaTO reservaTO);
  ReservaTO toReservaTO(ReservaDTO reservaDTO);
  ReservaTO toReservaTO2(NewReservaTO newReservaTO);

  NewReservaTO toNewReservaTO(NewReservaDTO newReservaDTO);
  NewReservaDTO toNewReservaDTO(NewReservaTO newReservaTO);
  List<ReservaDTO> toReservaDTOList(List<ReservaTO> reservaTOList);
  List<ReservaTO> toReservaTOList(List <ReservaDTO> reservaDTOList);
}
