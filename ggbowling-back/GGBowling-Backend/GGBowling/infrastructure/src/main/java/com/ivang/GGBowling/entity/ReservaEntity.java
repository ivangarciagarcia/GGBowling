package com.ivang.GGBowling.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
@Entity
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

  public Set<MesaEntity> getMesas() {
    if (this.mesas == null) {
      this.mesas = new HashSet<>();
    }
    return this.mesas;
  }

  public Set<PistaEntity> getPistas() {
    if (this.pistas == null) {
      this.pistas = new HashSet<>();
    }
    return this.pistas;
  }

  public Integer getReservaId() {
    return reservaId;
  }

  public void setReservaId(Integer reservaId) {
    this.reservaId = reservaId;
  }

  public UsuarioEntity getUsuario() {
    return usuario;
  }

  public void setUsuario(UsuarioEntity usuario) {
    this.usuario = usuario;
  }

  public Date getHoraEntrada() {
    return horaEntrada;
  }

  public void setHoraEntrada(Date horaEntrada) {
    this.horaEntrada = horaEntrada;
  }

  public Date getHoraSalida() {
    return horaSalida;
  }

  public void setHoraSalida(Date horaSalida) {
    this.horaSalida = horaSalida;
  }

  public Integer getPersonas() {
    return personas;
  }

  public void setPersonas(Integer personas) {
    this.personas = personas;
  }

  public Integer getPartidas() {
    return partidas;
  }

  public void setPartidas(Integer partidas) {
    this.partidas = partidas;
  }

  public Float getPrecioPersona() {
    return precioPersona;
  }

  public void setPrecioPersona(Float precioPersona) {
    this.precioPersona = precioPersona;
  }
}
