import React, { useState } from 'react';
import {
  LOGOUT_REQUEST,
  LOGOUT_RESPONSE,
  updateUserInfo,
} from '../../modules/login/actions';
import { useDispatch } from 'react-redux';
import './user.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SERVER_BASE_URL } from 'src/config/Config';
import Modal from 'react-modal';

export interface UserProps {
  username: string;
  password: string;
  nombre: string;
  primerApellido: string;
  email: string;
  telefono: string;
  fechaNacimiento: string;
}

interface LoginState {
  loading: boolean;
  userInfo: any;
  error: string | null;
}

export const User = (props: UserProps) => {
  const { userInfo } = useSelector(
    (state: { login: LoginState }) => state.login
  );
  const {
    username,
    password,
    nombre,
    primerApellido,
    email,
    telefono,
    fechaNacimiento,
  } = props;

  const [, setEncryptedPassword] = useState(password);
  const [newPassword, setNewPassword] = useState('');
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

  const [newUserData, setNewUserData] = useState({
    username,
    nombre,
    primerApellido,
    email,
    telefono,
    fechaNacimiento,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: LOGOUT_REQUEST });
    dispatch({ type: LOGOUT_RESPONSE, error: null });
    navigate('/');
  };

  const showConfirmation = () => {
    setShowConfirmationDialog(true);
  };

  const handleDelete = () => {
    const url = SERVER_BASE_URL + `/usuario/delete/${userInfo.usuarioId}`;

    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUserData),
    }).then((response) => response.json());
    dispatch({ type: LOGOUT_REQUEST });
    dispatch({ type: LOGOUT_RESPONSE, error: null });
    navigate('/');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'password') {
      setEncryptedPassword(event.target.value);
    } else if (event.target.name === 'newPassword') {
      setNewPassword(event.target.value);
    } else {
      setNewUserData({
        ...newUserData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const updateUser = () => {
    const url = SERVER_BASE_URL + `/usuario/update/${userInfo.usuarioId}`;

    const updatedData = {
      ...newUserData,
      password: newPassword, // Agrega la nueva contraseña al objeto actualizado
    };

    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((updatedUserInfo) => {
        dispatch(updateUserInfo(updatedUserInfo));
      });
  };

  const handleModify = () => {
    setNewUserData({
      ...newUserData,
    });

    updateUser();
  };

  return (
    <div
      className={`user-container ${
        showConfirmationDialog ? 'blur-effect' : ''
      }`}
    >
      {' '}
      <div className="user-header">
        <h1>{username}'s Profile</h1>
      </div>
      <div className="user-info">
        <div className="user-info-row">
          <label className="user-info-label">Username:</label>
          <input
            type="text"
            name="username"
            value={newUserData.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="user-info-row">
          <label className="user-info-label">Password:</label>
          <input
            type="password"
            name="password"
            value={'********'}
            onChange={handleInputChange}
          />
        </div>

        <div className="user-info-row">
          <label className="user-info-label">New Password:</label>
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />
        </div>

        <div className="user-info-row">
          <label className="user-info-label">Name:</label>
          <input
            type="text"
            name="nombre"
            value={newUserData.nombre}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="primerApellido"
            value={newUserData.primerApellido}
            onChange={handleInputChange}
          />
        </div>

        <div className="user-info-row">
          <label className="user-info-label">Email:</label>
          <input
            type="email"
            name="email"
            value={newUserData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="user-info-row">
          <label className="user-info-label">Phone:</label>
          <input
            type="number"
            name="telefono"
            value={newUserData.telefono}
            onChange={handleInputChange}
          />
        </div>

        <div className="user-info-row">
          <label className="user-info-label">Birthdate:</label>
          <input
            type="date"
            name="fechaNacimiento"
            value={newUserData.fechaNacimiento}
            onChange={handleInputChange}
          />
        </div>

        <div className="user-info-row">
          <button className="user-btn-modify" onClick={handleModify}>
            Modificar
          </button>
          <button className="user-btn-logout" onClick={handleLogout}>
            Cerrar sesión
          </button>
          <Modal
            isOpen={showConfirmationDialog}
            onRequestClose={() => setShowConfirmationDialog(false)}
            contentLabel="Confirmar eliminación"
            className="confirmation-dialog"
            overlayClassName="confirmation-dialog-overlay"
          >
            <div className="confirmation-dialog-content">
              <h2>Confirmar eliminación</h2>
              <p>
                ¿Estás seguro de que quieres eliminar este usuario? Esta acción
                no se podrá deshacer.
              </p>
              <button onClick={handleDelete}>Eliminar</button>
              <button onClick={() => setShowConfirmationDialog(false)}>
                Cancelar
              </button>
            </div>
          </Modal>
          <button className="user-btn-delete" onClick={showConfirmation}>
            Eliminar usuario
          </button>
        </div>
      </div>
    </div>
  );
};
