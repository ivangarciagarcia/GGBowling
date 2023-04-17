import React from 'react';

import './user.scss';

export interface UserProps {
  username: string;
  password: string;
  nombre: string;
  primerApellido: string;
  email: string;
  telefono: string;
  fechaNacimiento: string;
}

export const User = (props: UserProps) => {
  const {
    username,
    password,
    nombre,
    primerApellido,
    email,
    telefono,
    fechaNacimiento,
  } = props;

  return (
    <div className="user-container">
      <div className="user-header">
        <h1>{username}'s Profile</h1>
      </div>
      <div className="user-info">
        <div className="user-info-row">
          <span className="user-info-label">Username:</span>
          <span>{username}</span>
        </div>
        <div className="user-info-row">
          <span className="user-info-label">Password:</span>
          <span>{password}</span>
        </div>
        <div className="user-info-row">
          <span className="user-info-label">Name:</span>
          <span>
            {nombre} {primerApellido}
          </span>
        </div>
        <div className="user-info-row">
          <span className="user-info-label">Email:</span>
          <span>{email}</span>
        </div>
        <div className="user-info-row">
          <span className="user-info-label">Phone Number:</span>
          <span>{telefono}</span>
        </div>
        <div className="user-info-row">
          <span className="user-info-label">Birthdate:</span>
          <span>{fechaNacimiento}</span>
        </div>
        <div className="user-info-row">
          <button className="user-btn">Modificar</button>
          <button className="user-btn">Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
};
