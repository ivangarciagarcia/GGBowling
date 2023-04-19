import React, {useState} from 'react';
import { LOGOUT_REQUEST, LOGOUT_RESPONSE } from '../../modules/login/actions';
import { useDispatch } from 'react-redux';
import './user.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SERVER_BASE_URL } from 'src/config/Config';

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

  const [newUserData, setNewUserData] = useState({
    username,
    password,
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUserData({
      ...newUserData,
      [event.target.name]: event.target.value,
    });
  };

  const updateUser = () => {
    const url = SERVER_BASE_URL + `/usuario/update/${userInfo.usuarioId}`;
  
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUserData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Usuario actualizado:', data);
        // Aquí puedes actualizar el estado del componente con los datos del usuario actualizado
      })
      .catch(error => {
        console.error('Error al actualizar el usuario:', error);
      });
  };

  const handleModify = () => {
   
    console.log('Modificar perfil');
  
    setNewUserData({
      ...newUserData,
    });

    updateUser();
    alert('Usuario actualizado correctamente');
  };

  return (
    <div className="user-container">
      <div className="user-header">
        <h1>{username}'s Profile</h1>
      </div>
      <div className="user-info">
        <div className="user-info-row">
          <label className="user-info-label">Username:</label>
          <input type="text" name="username" value={newUserData.username} onChange={handleInputChange} />
        </div>
        <div className="user-info-row">
          <label className="user-info-label">Password:</label>
          <input type="password" name="password" value={newUserData.password} onChange={handleInputChange} />
        </div>
        <div className="user-info-row">
          <label className="user-info-label">Name:</label>
          <input type="text" name="nombre" value={newUserData.nombre} onChange={handleInputChange} />
          <input type="text" name="primerApellido" value={newUserData.primerApellido} onChange={handleInputChange} />
        </div>
        <div className="user-info-row">
          <label className="user-info-label">Email:</label>
          <input type="email" name="email" value={newUserData.email} onChange={handleInputChange} />
        </div>
        <div className="user-info-row">
          <label className="user-info-label">Phone:</label>
          <input type="number" name="telefono" value={newUserData.telefono} onChange={handleInputChange} />
        </div>
        <div className="user-info-row">
          <label className="user-info-label">Birthdate:</label>
          <input type="text" name="fechaNacimiento" value={newUserData.fechaNacimiento} onChange={handleInputChange} />
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
