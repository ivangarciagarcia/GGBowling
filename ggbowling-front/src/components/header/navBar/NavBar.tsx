import './navBar.scss';

import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuToggle() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="navbar">
      {/* Botón de menú hamburguesa */}
      <button
        type="button"
        id="menu-toggle"
        className={showMenu ? 'open' : ''}
        onClick={handleMenuToggle}
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>

      {/* Lista de navegación */}
      <ul className={`menu ${showMenu ? 'show' : ''}`}>
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
              <a href="/prices">Precios</a>
            </li>
            <li>
              <a href="/instalaciones">Instalaciones</a>
            </li>
            <li>
              <a href="/reservas">Reservas</a>
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
  );
}

