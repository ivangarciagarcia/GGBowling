import './footer.scss';
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
export const Footer = () => {
  return (
    <div className="footer">
      <div className="titulo-icons">
        <div className="titulo">GGBowling</div>
        <div className="icons">
          <AiFillTwitterCircle />
          <AiFillInstagram />
          <AiFillLinkedin />
        </div>
      </div>

      <div className="contacto-legal">
        <div className="contacto">
          <ul>
            <li>{'Dirección: Calle Falsa 123, Springfield'}</li>
            <li>{'Teléfono: 555-1234 '}</li>
            <li>{'Correo electrónico: info@bolera.com'}</li>
          </ul>
        </div>
        <div className="legal">
          <ul>
            <li>{'Términos y condiciones'}</li>
            <li>{'Política de privacidad'}</li>
            <li>{'Política de cookies'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
