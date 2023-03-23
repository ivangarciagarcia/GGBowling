import './schedule.scss';
import { AiOutlineClockCircle, AiOutlineInfoCircle } from 'react-icons/ai';

export const Schedule = () => {
  return (
    <div className="horarios">
      <div className="columna1">
        <h1 className="icono">
          <AiOutlineClockCircle />
        </h1>
        <h1 className="titulo1">-HORARIOS-</h1>
        <h2 className="titulo2">LUNES A JUEVES</h2>
        <p>De 10:00h a 00:00h</p>
        <h2 className="titulo2">VIERNES Y SABADOS</h2>
        <p>De 10:00h a 02:00h</p>
        <h2 className="titulo2">DOMINGOS</h2>
        <p>De 10:00h a 00:00h</p>
      </div>
      <div className="columna2">
        <h1 className="icono">
          <AiOutlineInfoCircle />
        </h1>

        <h1 className="titulo1">-INFORMACION IMPORTANTE-</h1>
        <ul>
          <li>Uso obligatorio de zapatos de bolos</li>
          <br />
          <li>No esta permitido ningun tipo de comida en las pistas</li>
          <br />
          <li>
            No esta permitido entrar al establecimiento con comida o bebida del
            exterior
          </li>
          <br />
          <li>Restaurante con reserva previa</li>
        </ul>
      </div>
    </div>
  );
};
