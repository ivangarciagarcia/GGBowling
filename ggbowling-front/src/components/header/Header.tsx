import './header.scss';

import { Navbar } from './navBar/NavBar';



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
      <Navbar />
    </header>
  );
};
