package com.ivang.GGBowling.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@Data
@NoArgsConstructor
@Table(name = "mesa")
public class MesaEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "mesa_id")
  private Integer mesaId;

  @Column(name = "capacidad_mesa")
  private String capacidad;

  @JoinColumn(name = "reserva_id")
  @ManyToOne(fetch = FetchType.LAZY)
  private ReservaEntity reserva;
}
