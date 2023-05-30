import './register.scss';
import { Input } from 'src/components/input/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FRONT_BASE_URL, SERVER_BASE_URL } from 'src/config/Config';
import { NavBar } from 'src/components/navBar/NavBar';
import { Footer } from 'src/components/footer/Footer';

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
  const fullAge = 18;

  // Calcula la fecha mínima permitida (18 años atrás desde la fecha actual)
  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - fullAge);
  const minDate = currentDate.toISOString().split('T')[0];

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
    <div>
      <NavBar
        img={'/img/logo.png'}
        alt={'logo'}
        item1={'Bowling'}
        item2={'Restaurante'}
        item3={'Ofertas'}
        item4={'Reserva'}
      />
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
              max={minDate} // Establece la fecha mínima permitida
            />
          </div>
          <div>
            <button type="submit">Resgistrar</button>
          </div>
          <p>
            Ya tienes cuenta? <a href={'/login'}>Inicia sesion aquí</a>
          </p>
        </form>
      </main>
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
