import { NavBar } from 'src/components/navBar/NavBar';
import './booking.scss';
import { Footer } from 'src/components/footer/Footer';
import { useEffect } from 'react';
import axios from 'axios';
import { FRONT_BASE_URL, SERVER_BASE_URL } from 'src/config/Config';
import { useNavigate } from 'react-router-dom';

export const Booking = () => {
  axios.defaults.baseURL = SERVER_BASE_URL;
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = FRONT_BASE_URL;
  const navigate = useNavigate();
  const todayString = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const horaSelect = document.getElementById('hora') as HTMLSelectElement;
    const horaActual = new Date().getHours();

    /* const inputDia = document.querySelector('.dia') as HTMLInputElement;
    const now: Date = new Date();
    const currentDate: string = now.toLocaleDateString();
    console.log(currentDate);

    inputDia.addEventListener('change', (event) => {
      if (event.target instanceof HTMLInputElement) {
        const fechaSeleccionada = event.target.value;
        console.log(fechaSeleccionada);
        if (inputDia.value === todayString && horaActual >= horaValue) {
          // Si la fecha seleccionada es igual a la fecha actual,
          // y la hora actual es mayor o igual que la hora de la opción, está deshabilitada
          horaOption.disabled = true;
        }
      }
    });*/

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

  function handleReserva() {
    axios
      .request({
        url: '/reserva/create',
        method: 'POST',
        baseURL: SERVER_BASE_URL,
      })
      .then(() => {
        navigate('/profile');
      })
      .catch((error) => {
        error.log(error);
      });
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
              <input type="date" className="dia" min={todayString} />
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
