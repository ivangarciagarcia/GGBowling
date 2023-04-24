package com.ivang.GGBowling.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "reserva")
public class ReservaEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "reserva_id")
  private Integer reservaId;

  @JoinColumn(name = "usuario_id")
  @ManyToOne(fetch = FetchType.LAZY)
  private UsuarioEntity usuario;

  @OneToMany(mappedBy = "reserva",cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private Set<PistaEntity> pistas;

  @OneToMany(mappedBy = "reserva",cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private Set<MesaEntity> mesas;

  @Column(name = "fecha")
  private String fechaEntrada;

  @Column(name = "hora")
  private String horaEntrada;

  @Column( name = "personas")
  private Integer personas;

  @Column(name = "partidas")
  private Integer partidas;


}
