import { NavBar } from 'src/components/navBar/NavBar';
import './booking.scss';
import { useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { FRONT_BASE_URL, SERVER_BASE_URL } from 'src/config/Config';
import { useNavigate } from 'react-router-dom';
import { Footer } from 'src/components/footer/Footer';
import { useSelector } from 'react-redux';

export interface LoginState {
  loading: boolean;
  userInfo: any;
  error: string | null;
}

export const Booking = () => {
  axios.defaults.baseURL = SERVER_BASE_URL;
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = FRONT_BASE_URL;
  const navigate = useNavigate();
  const todayString = new Date().toISOString().split('T')[0];
  const { userInfo } = useSelector(
    (state: { login: LoginState }) => state.login
  );

  useEffect(() => {
    const horaSelect = document.getElementById('hora') as HTMLSelectElement;
    const horaActual = new Date().getHours();

    for (let i = 0; i < horaSelect.length; i++) {
      const horaOption = horaSelect.options[i];
      const horaValue = parseInt(horaOption.value);

      if (horaActual < horaValue) {
        // Si la hora actual es menor que la hora de la opción, está disponible
        horaOption.disabled = false;
      } else {
        // Si la hora actual es mayor o igual que la hora de la opción, está deshabilitada
        horaOption.disabled = true;
      }
    }
  }, []);

  const enviarCorreo = async () => {
    const response = await fetch('/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        destinatario: userInfo.email,
        asunto: 'Reserva',
        cuerpo: 'Reserva completada',
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  function handleReserva() {
    if (userInfo === null) {
      navigate('/login');
    } else {
      axios
        .request({
          url: '/reserva/create',
          method: 'POST',
          baseURL: SERVER_BASE_URL,
        })
        .then(() => {
          navigate('/profile');
          enviarCorreo();
        })
        .catch(() => {});
    }
  }

  function handleDiaChange(event: React.ChangeEvent<HTMLInputElement>) {
    const diaSelect = event.target as HTMLInputElement;
    const diaValue = diaSelect.value;
    const horaSelect = document.getElementById('hora') as HTMLSelectElement;

    // Si la fecha seleccionada es mayor que hoy, habilita todas las opciones de hora
    if (diaValue > todayString) {
      for (let i = 0; i < horaSelect.length; i++) {
        horaSelect.options[i].disabled = false;
      }
    } else {
      // Si la fecha seleccionada es hoy,
      //deshabilita las opciones de hora anteriores a la hora actual
      const horaActual = new Date().getHours();
      for (let i = 0; i < horaSelect.length; i++) {
        const horaOption = horaSelect.options[i];
        const horaValue = parseInt(horaOption.value);
        if (horaActual >= horaValue) {
          horaOption.disabled = true;
        } else {
          horaOption.disabled = false;
        }
      }
    }
  }

  return (
    <div>
      <main>
        <NavBar
          img={'/img/logo.png'}
          alt={'logo'}
          item1={'Bowling'}
          item2={'Restaurante'}
          item3={'Ofertas'}
          item4={'Reserva'}
        />

        <div className="columns">
          <div className="column">
            <h2>Horario</h2>
            <ul>
              <li>Lunes: 10:00 - 00:00</li>
              <li>Martes: 10:00 - 00:00</li>
              <li>Miércoles: 10:00 - 00:00</li>
              <li>Jueves: 10:00 - 00:00</li>
              <li>Viernes: 10:00 - 02:00</li>
              <li>Sábado: 10:00 - 02:00</li>
              <li>Domingo: 10:00 - 02:00</li>
            </ul>
          </div>

          <div className="column">
            <h2>Reserva</h2>
            <label className="dia">
              Dia:
              <input
                type="date"
                className="dia"
                min={todayString}
                onChange={handleDiaChange}
              />
            </label>

            <br />
            <label className="hora">
              Hora:
              <select id="hora">
                <option value="">Selecciona una hora</option>
                <option value="10">10:00</option>
                <option value="11">11:00</option>
                <option value="12">12:00</option>
                <option value="13">13:00</option>
                <option value="14">14:00</option>
                <option value="15">15:00</option>
                <option value="16">16:00</option>
                <option value="17">17:00</option>
                <option value="18">18:00</option>
                <option value="19">19:00</option>
                <option value="20">20:00</option>
                <option value="21">21:00</option>
                <option value="22">22:00</option>
                <option value="23">23:00</option>
                <option value="24">24:00</option>
              </select>
            </label>

            <br />

            <label className="pistas">
              Pistas:
              <select name="pistas">
                <option value="null">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </label>

            <label className="mesas">
              Mesas:
              <select name="mesas">
                <option value="null">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </label>

            <br />

            <label className="partidas">
              Partidas:
              <select name="partidas">
                <option value="null">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </label>

            <label className="jugadores">
              Jugadores:
              <select name="jugadores">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <br />
            </label>

            <button className="button" type="button" onClick={handleReserva}>
              Reservar
            </button>
          </div>
        </div>

        <Footer
          title={'GGBowling'}
          twiLink={'https://twitter.com/Ivangg__'}
          insLink={'https://www.instagram.com/ivangg._'}
          linLink={'https://www.linkedin.com/in/ivan-garcia-garcia/'}
          target={'_blank'}
          rel={'noreferrer'}
          street={'Dirección: Calle Falsa 123, Springfield'}
          phone={'Teléfono: 555-1234'}
          email={'Correo electrónico: info@bolera.com'}
          supPage1={'Términos y condiciones'}
          supPage2={'Política de privacidad'}
          supPage3={'Política de cookies'}
        />
      </main>
    </div>
  );
};
