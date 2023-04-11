import React, { useState } from 'react';
import { Input } from 'src/components/input/Input';
import './login.scss';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { FRONT_BASE_URL, SERVER_BASE_URL } from 'src/config/Config';

export const Login = () => {

  const [, setEmail] = useState('');
  const [, setPassword] = useState('');
  const [, setResponse] = useState('');
  const navigate = useNavigate();
  axios.defaults.baseURL = SERVER_BASE_URL;
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = FRONT_BASE_URL;

  
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const { data } = await axios.post('/usuario/login', {
        email,
        password,
      });
      setResponse(data); // actualiza el estado con la respuesta del servidor
      navigate('/profile');
    } catch (error) { /*TODO mensaje de error*/ }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <div className="form-group">
        <label htmlFor="email">Correo electrónico</label>
        <Input
          type={'email'}
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <Input
          type={'password'}
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Iniciar sesión</button>
      </div>

      <div className='register'>
        <p>No tienes cuenta? <a href={'/register'}>Registrate aquí</a></p>
      </div>
    </form>
  );
};
