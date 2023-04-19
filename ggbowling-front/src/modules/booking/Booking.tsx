import { NavBar } from 'src/components/navBar/NavBar';
import './booking.scss';
import { Footer } from 'src/components/footer/Footer';

export const Booking = () => {
  
  
  function handleReserva() {
    console.log('RESERVA HECHA');
  }

  return (
    <div>
      <main>
        <NavBar
          img={'/img/logo.png'}
          alt={'logo'}
          item1={'Inicio'}
          item2={'Restaurante'}
          item3={'Ofertas'}
          item4={'Bowling'}
          subitem1={'Precios'}
          subitem2={'Instalaciones'}
          subitem3={'Reserva'}
        />

        <div className="columns">
          <div className="column">
            <h2>Horario</h2>
            <ul>
              <li>Lunes: 9:00 - 17:00</li>
              <li>Martes: 9:00 - 17:00</li>
              <li>Miércoles: 9:00 - 17:00</li>
              <li>Jueves: 9:00 - 17:00</li>
              <li>Viernes: 9:00 - 17:00</li>
              <li>Sábado: 10:00 - 22:00</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>

          <div className="column">
            <h2>Reserva</h2>
            <label className="dia">
              Dia:
              <input
                type="date"
                className="dia"
                min={new Date().toISOString().split('T')[0]}
              />
            </label>

            <br />
            <label className="hora">
              Hora:
              <select id="hora">
                <option value="">Selecciona una hora</option>
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
