/* eslint-disable max-len */
import { NavBar } from 'src/components/navBar/NavBar';
import './booking.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import { FRONT_BASE_URL, SERVER_BASE_URL } from 'src/config/Config';
import { useNavigate } from 'react-router-dom';
import { Footer } from 'src/components/footer/Footer';
import { useSelector } from 'react-redux';

interface LoginState {
  loading: boolean;
  userInfo: any;
  error: string | null;
}

export const Booking = () => {
  axios.defaults.baseURL = SERVER_BASE_URL;
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = FRONT_BASE_URL;

  const navigate = useNavigate();

  const todayString = new Date().toISOString().split('T')[0];
  const [, setResponse] = useState('');
  const [reservaData, setReservaData] = useState({
    fechaEntrada: 'null',
    horaEntrada: 'null',
    pistaId: 'null',
    mesaId: 'null',
    partidas: 'null',
    personas: 'null',
  });
  const [errores, setErrores] = useState({
    fechaEntrada: '',
    horaEntrada: '',
    pistaId: '',
    mesaId: '',
    partidas: '',
    personas: '',
  });

  const [camposSeleccionados, setCamposSeleccionados] = useState(false);

  const { userInfo } = useSelector(
    (state: { login: LoginState }) => state.login
  );

  useEffect(() => {
    const horaEntradaSelect = document.getElementById(
      'horaEntrada'
    ) as HTMLSelectElement;
    const horaEntradaActual = new Date().getHours();

    for (let i = 0; i < horaEntradaSelect.length; i++) {
      const horaEntradaOption = horaEntradaSelect.options[i];
      const horaEntradaValue = parseInt(horaEntradaOption.value);

      if (horaEntradaActual < horaEntradaValue) {
        // Si la hora actual es menor que la hora de la opción, está disponible
        horaEntradaOption.disabled = false;
      } else {
        // Si la hora actual es mayor o igual que la hora de la opción, está deshabilitada
        horaEntradaOption.disabled = true;
      }
    }
  }, []);

  const handlefechaEntradaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fechaEntradaValue = e.target.value;
    const horaEntradaSelect = document.getElementById(
      'horaEntrada'
    ) as HTMLSelectElement;

    // Si la fecha seleccionada es mayor que hoy, habilita todas las opciones de horaEntrada
    if (fechaEntradaValue > todayString) {
      for (let i = 0; i < horaEntradaSelect.length; i++) {
        horaEntradaSelect.options[i].disabled = false;
      }
    } else {
      // Si la fecha seleccionada es hoy,
      //deshabilita las opciones de horaEntrada anteriores a la horaEntrada actual
      const horaEntradaActual = new Date().getHours();
      for (let i = 0; i < horaEntradaSelect.length; i++) {
        const horaEntradaOption = horaEntradaSelect.options[i];
        const horaEntradaValue = parseInt(horaEntradaOption.value);
        if (horaEntradaActual >= horaEntradaValue) {
          horaEntradaOption.disabled = true;
        } else {
          horaEntradaOption.disabled = false;
        }
      }
    }
    setReservaData({ ...reservaData, fechaEntrada: e.target.value });
  };

  const handlePistaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setReservaData({ ...reservaData, pistaId: event.target.value });
    setCamposSeleccionados(
      event.target.value !== 'null' || reservaData.mesaId !== 'null'
    );
  };

  const handleMesaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setReservaData({ ...reservaData, mesaId: event.target.value });
    setCamposSeleccionados(
      event.target.value !== 'null' || reservaData.pistaId !== 'null'
    );
  };

  const handleHoraEntradaChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setReservaData({ ...reservaData, horaEntrada: event.target.value });
  };

  const handlePartidasChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setReservaData({ ...reservaData, partidas: event.target.value });
  };

  const handlePersonasChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setReservaData({ ...reservaData, personas: event.target.value });
  };

  const enviarCorreo = async () => {
    const data = {
      destinatario: userInfo.email,
      asunto: 'Reserva',
      cuerpo: `Se ha completado una reserva para el día ${reservaData.fechaEntrada} a las ${reservaData.horaEntrada}.
Usted ha reservado la pista ${reservaData.pistaId} para ${reservaData.partidas} partidas con ${reservaData.personas} jugadores y la mesa ${reservaData.mesaId}`,
    };

    const response = await fetch(SERVER_BASE_URL + '/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    console.log(responseData);
  };

  const handleReserva = async (e: any) => {
    if (!userInfo) {
      navigate('/login');
      return;
    }
    let erroresActuales = {
      fechaEntrada: '',
      horaEntrada: '',
      pistaId: '',
      mesaId: '',
      partidas: '',
      personas: '',
    };

    const usuarioId = userInfo.usuarioId;
    const pistaId = reservaData.pistaId;
    const mesaId = reservaData.mesaId;
    const fechaEntrada = reservaData.fechaEntrada;
    const horaEntrada = reservaData.horaEntrada;
    const personas = reservaData.personas;
    const partidas = reservaData.partidas;

    // Validar fechaEntrada
    if (reservaData.fechaEntrada === 'null') {
      erroresActuales.fechaEntrada = 'Selecciona una fecha';
    }

    // Validar horaEntrada
    if (reservaData.horaEntrada === 'null') {
      erroresActuales.horaEntrada = 'Selecciona una hora';
    }

    // Validar partidas
    if (reservaData.partidas === 'null') {
      erroresActuales.partidas = 'Selecciona el número de jugadores';
    }

    // Validar personas
    if (reservaData.personas === 'null') {
      erroresActuales.personas = 'Selecciona el número de jugadores';
    }

    // Validar pista y mesa
    if (reservaData.pistaId && reservaData.mesaId === 'null') {
      erroresActuales.pistaId = 'Selecciona al menos una pista o una mesa';
      erroresActuales.mesaId = 'Selecciona al menos una pista o una mesa';
    }

    try {
      const { data } = await axios.post('/reserva/create', {
        usuarioId,
        pistaId,
        mesaId,
        fechaEntrada,
        horaEntrada,
        personas,
        partidas,
      });

      if (camposSeleccionados) {
        setResponse(data);
        navigate('/');
        enviarCorreo();
      } else {
        alert('Debes seleccionar al menos una pista o mesa');
      }
    } catch (error) {
      setErrores(erroresActuales);
    }
  };

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
            <h2>Horarios</h2>
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
            <label className="fechaEntrada">
              fecha:
              <input
                type="date"
                className="fechaEntrada"
                name="fechaEntrada"
                value={reservaData.fechaEntrada}
                min={todayString}
                onChange={handlefechaEntradaChange}
              />
            </label>
            {errores.fechaEntrada && (
              <span className="error">{errores.fechaEntrada}</span>
            )}

            <br />
            <label className="horaEntrada">
              Hora:
              <select
                id="horaEntrada"
                name="horaEntrada"
                value={reservaData.horaEntrada}
                onChange={handleHoraEntradaChange}
              >
                <option value="null">Selecciona una hora</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
                <option value="23:00">23:00</option>
                <option value="24:00">24:00</option>
              </select>
            </label>
            {errores.horaEntrada && (
              <span className="error">{errores.horaEntrada}</span>
            )}

            <br />

            <label className="pistaId">
              pista:
              <select
                name="pistaId"
                value={reservaData.pistaId}
                onChange={handlePistaChange}
              >
                <option value="null">Selecciona una pista</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </label>

            {errores.pistaId && (
              <span className="error">{errores.pistaId}</span>
            )}
            <br />

            <label className="mesaId">
              mesa:
              <select
                name="mesaId"
                value={reservaData.mesaId}
                onChange={handleMesaChange}
              >
                <option value="null">Selecciona una mesa</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </label>

            {errores.mesaId && <span className="error">{errores.mesaId}</span>}

            <br />

            <label className="partidas">
              partidas:
              <select
                name="partidas"
                value={reservaData.partidas}
                onChange={handlePartidasChange}
                disabled={reservaData.pistaId === 'null'}
              >
                <option value="null">Selecciona el numero de partidas</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </label>

            {errores.partidas && (
              <span className="error">{errores.partidas}</span>
            )}

            <br />

            <label className="personas">
              personas:
              <select
                name="personas"
                value={reservaData.personas}
                onChange={handlePersonasChange}
              >
                <option value="null">Selecciona el numero de jugadores</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </label>

            {errores.personas && (
              <span className="error">{errores.personas}</span>
            )}
            <br />

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
