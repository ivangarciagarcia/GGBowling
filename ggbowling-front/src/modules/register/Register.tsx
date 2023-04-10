import './register.scss';
import { Input } from 'src/components/input/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FRONT_BASE_URL, SERVER_BASE_URL } from 'src/config/Config';

export const Register = () => {
  const [, setUsername] = useState('');
  const [, setPassword] = useState('');
  const [, setName] = useState('');
  const [, setLastName1] = useState('');
  const [, setLastName2] = useState('');
  const [, setEmail] = useState('');
  const [, setPhone] = useState('');
  const [, setBirthDate] = useState('');
  const [, setResponse] = useState('');
  const navigate = useNavigate();
  axios.defaults.baseURL = SERVER_BASE_URL;
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = FRONT_BASE_URL;

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    const nombre = e.target.nombre.value;
    const primerApellido = e.target.primerApellido.value;
    const segundoApellido = e.target.segundoApellido.value;
    const email = e.target.email.value;
    const telefono = e.target.telefono.value;
    const fechaNacimiento = e.target.fechaNacimiento.value;

    try {
      const { data } = await axios.post('/usuario/create', {
        username,
        password,
        nombre,
        primerApellido,
        segundoApellido,
        email,
        telefono,
        fechaNacimiento,
      });
      setResponse(data); // actualiza el estado con la respuesta del servidor
      navigate('/');
    } catch (error) {
      /*TODO mensaje de error*/
    }
  };

  return (
    <body>
      <main>
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Registrarse</h2>
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario</label>
            <Input
              type={'text'}
              id={'username'}
              name={'username'}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password">Contraseña</label>
            <Input
              type={'password'}
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="nombre">Nombre</label>
            <Input
              type={'text'}
              id={'nombre'}
              name={'nombre'}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="primerApellido">Primer apellido</label>
            <Input
              type={'text'}
              id={'primerApellido'}
              name={'primerApellido'}
              onChange={(e) => setLastName1(e.target.value)}
            />

            <label htmlFor="segundoApellido">Segundo apellido</label>
            <Input
              type={'text'}
              id={'segundoApellido'}
              name={'segundoApellido'}
              onChange={(e) => setLastName2(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <Input
              type={'email'}
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="telefono">Numero de Telefono</label>
            <Input
              type={'number'}
              id="telefono"
              name="telefono"
              onChange={(e) => setPhone(e.target.value)}
            />

            <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
            <Input
              type={'date'}
              id="fechaNacimiento"
              name="fechaNacimiento"
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Resgistrar</button>
          </div>
        </form>
      </main>
    </body>
  );
};
