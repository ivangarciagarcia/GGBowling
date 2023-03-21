import './header.scss';
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

export const Header = () => {
  return (
    <header className="header">
      <div className="icons">
        <AiFillTwitterCircle />
        <AiFillInstagram />
        <AiFillLinkedin />
      </div>
      <div className='titulo'><p>GGBowling</p></div>
      <div className='menu-icon'></div>
    </header>
  );
};
