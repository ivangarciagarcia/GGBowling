import React, { useState } from 'react';
import { Input } from 'src/components/input/Input';
import './login.scss';

export interface LoginProps {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [form, setForm] = useState<LoginProps>({
    email: '',
    password: '',
  });

  return (
    <form className="login-form">
      <h2>Iniciar sesión</h2>
      <div className="form-group">
        <label htmlFor="email">Correo electrónico</label>
        <Input
          type={'email'}
          id="email"
          onChange={(value) => {
            setForm({
              ...form,
              email: value,
            });
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <Input
          type={'password'}
          id="password"
          onChange={(value) => {
            setForm({
              ...form,
              password: value,
            });
          }}
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};
