package com.ivang.GGBowling.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "mesa")
public class MesaEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "mesa_id")
  private Integer mesaId;

  @Column(name = "capacidad_mesa")
  private String capacidad;

  @OneToMany(mappedBy = "mesa", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private Set<ReservaEntity> reserva;
}
