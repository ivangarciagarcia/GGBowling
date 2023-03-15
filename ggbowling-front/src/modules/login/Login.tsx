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
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Access-Control-Allow-Origin'] =
    'http://localhost:3000';

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    axios
      .post('/usuario/login', { email, password })
      .then((response) => {
        console.log(response.data);

        navigate('/home');
      })
      .catch((error) => {
        console.error(error.response.data);

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
          name="email"
          onChange={(event) => setEmail(event.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <Input
          type={'password'}
          id="password"
          name="password"
          onChange={(event) => setPassword(event.value)}
        />
      </div>
      <div>
        <button type="submit">Iniciar sesión</button>
      </div>
      {/*<div>#TODO Registrarse</div>*/}
    </form>
  );
};
