import React, { useState } from 'react';
import { Input } from 'src/components/input/Input';
import './login.scss';
import axios from 'axios';
import { useNavigate } from 'react-router';



export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  axios.defaults.baseURL = 'http://localhost:8080';

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    axios.post('/usuario/login', { email, password })
      .then((response) => {
        navigate('/home');
        // #TODO Redirigir a Home
      })
      .catch((error) => {
        // #TODO Mensaje de error
      });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <div className="form-group">
        <label htmlFor="email">Correo electrónico</label>
        <Input
          type={'email'}
          id="email"
          onChange={(event) => setEmail(event.target.value)}
          
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <Input
          type={'password'}
          id="password"
          onChange={(event) => setPassword(event.target.value)}
    
        />
      </div>
      <div>
        <button type="submit">Iniciar sesión</button>
      </div>
      {/*<div>#TODO Registrarse</div>*/}
    </form>
  );
};
