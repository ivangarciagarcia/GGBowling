package com.ivang.GGBowling.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "pista")
public class PistaEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "pista_id")
  private Integer pistaId;

  @Column(name = "capacidad_pista")
  private String capacidad;

  @JoinColumn(name = "reserva_id")
  @ManyToOne(fetch = FetchType.LAZY)
  private ReservaEntity reserva;
}
