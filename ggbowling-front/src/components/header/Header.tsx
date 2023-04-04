import './header.scss';

import { NavBar } from './navBar/NavBar';

export interface HeaderProps {
  img: string;
  alt: string;
}
export const Header = (props: HeaderProps) => {
  const { img, alt } = props;

  return (
    <header className="header">
      <div className="content">
        <img src={`${process.env.PUBLIC_URL + img}`} alt={alt} />
      </div>
      <NavBar
        item1={'Inicio'}
        item2={'Restaurante'}
        item3={'Ofertas'}
        item4={'Bowling'}
        subitem1={'Precios'}
        subitem2={'Instalaciones'}
        subitem3={'Reserva'}
      />
    </header>
  );
};
