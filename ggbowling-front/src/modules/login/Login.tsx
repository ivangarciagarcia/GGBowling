import React, { useState, useEffect } from 'react';
import { Input } from 'src/components/input/Input';
import './login.scss';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { FRONT_BASE_URL, SERVER_BASE_URL } from 'src/config/Config';
import { LoginProps, login } from './actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavBar } from 'src/components/navBar/NavBar';
import { Footer } from 'src/components/footer/Footer';

export const Login = () => {
  axios.defaults.baseURL = SERVER_BASE_URL;
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = FRONT_BASE_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: any) => state.login);
  const [form, setForm] = useState<LoginProps>({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (userInfo != null) {
      navigate('/');
    }
  }, [userInfo, navigate]);

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateFields = () => {
    const newErrors = {
      email: '',
      password: '',
    };

    // Valida cada campo y establece el mensaje de error correspondiente si está vacío
    if (form.email.trim() === '') {
      newErrors.email = 'El campo Correo electrónico es requerido.';
    }
    if (form.password.trim() === '') {
      newErrors.password = 'El campo Contraseña es requerido.';
    }

    setErrors(newErrors); // Actualiza los mensajes de error

    // Verifica si hay errores de validación
    const hasErrors = Object.values(newErrors).some((error) => error !== '');

    if (!hasErrors) {
      dispatch(login(form)); // Realiza la acción de inicio de sesión si no hay errores
    }
  };

  return (
    <div>
      <NavBar
        img={'/img/logo.png'}
        alt={'logo'}
        item1={'Bowling'}
        item2={'Restaurante'}
        item3={'Ofertas'}
        item4={'Reserva'}
      />
      <div className="login-form">
        <h2>Iniciar sesión</h2>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <Input
            type={'email'}
            id="email"
            name="email"
            onChange={(value) => {
              setForm({
                ...form,
                email: value,
              });
            }}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <Input
            type={'password'}
            id="password"
            name="password"
            onChange={(value) => {
              setForm({
                ...form,
                password: value,
              });
            }}
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>

        <div>
          <button onClick={validateFields}>Iniciar sesión</button>
        </div>

        <div className="register">
          <p>
            No tienes cuenta? <a href={'/register'}>Registrate aquí</a>
          </p>
        </div>
      </div>
      <Footer
        title={'GGBowling'}
        twiLink={'https://twitter.com/Ivangg__'}
        insLink={'https://www.instagram.com/ivangg._'}
        linLink={'https://www.linkedin.com/in/ivan-garcia-garcia/'}
        target={'_blank'}
        rel={'noreferrer'}
        street={'Dirección: Rúa Caballeros, 1, 15006 A Coruña'}
        phone={'Teléfono: +34 697160793'}
        email={'Correo electrónico: ggbowlingcoruna@gmail.com'}
        supPage1={'Términos y condiciones'}
        supPage2={'Política de privacidad'}
      />
    </div>
  );
};
