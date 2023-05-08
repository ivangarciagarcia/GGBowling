/* eslint-disable jsx-a11y/anchor-is-valid */
import './navBar.scss';

import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRef } from 'react';

export interface NavBarProps {
  img: string;
  alt: string;
  item1: string;
  item2?: string;
  item3?: string;
  item4?: string;
  item5?: string;
  subitem1?: string;
  subitem2?: string;
  subitem3?: string;
}

interface LoginState {
  loading: boolean;
  userInfo: any;
  error: string | null;
}

export const NavBar = (props: NavBarProps) => {
  const navigate = useNavigate();
  const { img, alt, item1, item2, item3, item4 } = props;

  const { userInfo } = useSelector(
    (state: { login: LoginState }) => state.login
  );

  function handleProfileOnclick() {
    if (userInfo === null) {
      navigate('/login');
    } else {
      navigate('/profile');
    }
  }
  const navRef = useRef<HTMLDivElement>(null);

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle('responsive_nav');
    }
  };

  return (
    <header>
      <img src={`${process.env.PUBLIC_URL + img}`} alt={alt} onClick={() => navigate('/')} />
      <nav ref={navRef}>
        <a onClick={() => navigate('/')}>{item1}</a>
        <a onClick={() => navigate('/restaurant')}>{item2}</a>
        <a onClick={() => navigate('/offers')}>{item3}</a>
        <a onClick={() => navigate('/booking')}>{item4}</a>
        <a onClick={handleProfileOnclick}>
          <BiUserCircle />
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};
