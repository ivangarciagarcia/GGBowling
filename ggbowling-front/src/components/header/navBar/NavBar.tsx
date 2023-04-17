/* eslint-disable jsx-a11y/anchor-is-valid */
import './navBar.scss';

import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export interface NavBarProps {
  item1: string;
  item2?: string;
  item3?: string;
  item4?: string;
  item5?: string;
  subitem1: string;
  subitem2: string;
  subitem3: string;
}
export const NavBar = (props: NavBarProps) => {
  const navigate = useNavigate();
  const { item1, item2, item3, item4, subitem1, subitem2, subitem3 } = props;
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
          <a onClick={() => navigate('/')}>{item1}</a>
        </li>

        <li>
          <a onClick={() => navigate('/restaurant')}>{item2}</a>
        </li>

        <li>
          <a onClick={() => navigate('/offers')}>{item3}</a>
        </li>

        <li className="dropdown">
          <a>
            {item4} <FaAngleDown />
          </a>

          <ul className="dropdown-menu">
            <li>
              <a onClick={() => navigate('/prices')}>{subitem1}</a>
            </li>

            <li>
              <a onClick={() => navigate('/installations')}>{subitem2}</a>
            </li>

            <li>
              <a onClick={() => navigate('/booking')}>{subitem3}</a>
            </li>
          </ul>
        </li>

        <li>
          <a onClick={() => navigate('/profile')}>
            <BiUserCircle />
          </a>
        </li>
      </ul>
    </nav>
  );
};
