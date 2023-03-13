package com.ivang.GGBowling.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.Set;
@Entity
@AllArgsConstructor
@Data
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

  @OneToMany(mappedBy = "reserva",cascade = CascadeType.ALL)
  private Set<PistaEntity> pistas;

  @OneToMany(mappedBy = "reserva",cascade = CascadeType.ALL)
  private Set<MesaEntity> mesas;

  @Column(name = "fecha_hora_inicio")
  private Date horaEntrada;

  @Column(name = "fecha_hora_final")
  private Date horaSalida;

  @Column( name = "personas")
  private Integer personas;

  @Column(name = "partidas")
  private Integer partidas;

  @Column(name = "precio_persona")
  private Float precioPersona;


}
