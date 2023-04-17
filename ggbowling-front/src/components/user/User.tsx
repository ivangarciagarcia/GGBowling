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

  const handleLogout = () => {
    // Implementación de la función handleLogout
    // Esta función podría llamar a una API para cerrar sesión
    // o eliminar los tokens de autenticación almacenados en el cliente
    // También podría redirigir al usuario a la página de inicio de sesión
    console.log('Sesión cerrada');
  };
  const handleModify = () => {
    // Implementación de la función handleModify
    // Esta función podría abrir un formulario para que el usuario pueda modificar sus datos
    // También podría llamar a una API para guardar los cambios en el servidor
    console.log('Modificar perfil');
  };

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
          <button className="user-btn-modify" onClick={handleModify}>
            Modificar
          </button>
          <button className="user-btn-logout" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};
