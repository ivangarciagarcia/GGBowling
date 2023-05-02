package com.ivang.GGBowling.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.Set;

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

  @OneToMany(mappedBy = "pista", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private Set<ReservaEntity> reserva;
}
