package com.ivang.GGBowling.repository;

import com.ivang.GGBowling.entity.MesaEntity;
import com.ivang.GGBowling.entity.PistaEntity;
import com.ivang.GGBowling.entity.ReservaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservaRepository extends JpaRepository<ReservaEntity,Integer> {

    long countByFechaEntradaAndHoraEntradaAndPistaAndMesa(
            String fechaEntrada, String horaEntrada, PistaEntity pista, MesaEntity mesa);
}
