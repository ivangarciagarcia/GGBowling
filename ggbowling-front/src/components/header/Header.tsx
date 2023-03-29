import './header.scss';
import { BiUserCircle } from 'react-icons/bi';
import { FaAngleDown } from 'react-icons/fa';

export interface HeaderProps {
  img: string;
}
export const Header = (props: HeaderProps) => {
  const { img } = props;

  return (
    <header className="header">
      <div className="content">
        <img src={`${process.env.PUBLIC_URL + img}`} alt="logo" />
      </div>
      <nav className="navbar">
        <ul className="menu">
          <li>
            <a href="/home">Inicio</a>
          </li>
          <li>
            <a href="/restaurante">Restaurante</a>
          </li>
          <li>
            <a href="/ofertas">Ofertas</a>
          </li>
          <li className="dropdown">
            <a>
              Bolera <FaAngleDown />
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Precios</a>
              </li>
              <li>
                <a href="#">Instalaciones</a>
              </li>
              <li>
                <a href="#">Reservas</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/perfil">
              <BiUserCircle />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
