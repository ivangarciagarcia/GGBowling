package com.ivang.GGBowling.entity;

import jakarta.persistence.*;
import lombok.*;

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

  @JoinColumn(name = "pista_id", nullable = true)
  @ManyToOne(fetch = FetchType.LAZY)
  private PistaEntity pista;

  @JoinColumn(name = "mesa_id", nullable = true)
  @ManyToOne(fetch = FetchType.LAZY)
  private MesaEntity mesa;

  @Column(name = "fecha")
  private String fechaEntrada;

  @Column(name = "hora")
  private String horaEntrada;

  @Column( name = "personas")
  private Integer personas;

  @Column(name = "partidas")
  private Integer partidas;


}
