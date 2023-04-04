import './navBar.scss';

import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';

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
          <a href="/home">{item1}</a>
        </li>
        
        <li>
          <a href="/restaurant">{item2}</a>
        </li>
        
        <li>
          <a href="/offers">{item3}</a>
        </li>

        <li className="dropdown">
          <a>{item4} <FaAngleDown /></a>
          
          <ul className="dropdown-menu">
        
            <li>
              <a href="/prices">{subitem1}</a>
            </li>
        
            <li>
              <a href="/installations">{subitem2}</a>
            </li>
        
            <li>
              <a href="/bokings">{subitem3}</a>
            </li>
        
          </ul>
        </li>
        
        <li>
          <a href="/profile">
            <BiUserCircle />
          </a>
        </li>
      
      </ul>
    </nav>
  );
};
