package com.ivang.GGBowling.repository;

import com.ivang.GGBowling.entity.MesaEntity;
import com.ivang.GGBowling.entity.PistaEntity;
import com.ivang.GGBowling.entity.ReservaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservaRepository extends JpaRepository<ReservaEntity,Integer> {

    // contar las reservas que tienen la misma fecha, hora y pista
    Integer countByFechaEntradaAndHoraEntradaAndPista(String fechaEntrada, String horaEntrada, PistaEntity pistaEntity);

    // contar las reservas que tienen la misma fecha, hora y mesa
    Integer countByFechaEntradaAndHoraEntradaAndMesa(String fechaEntrada, String horaEntrada, MesaEntity mesaEntity);
}
