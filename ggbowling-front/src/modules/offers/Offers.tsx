import './offers.scss';

import { Footer } from 'src/components/footer/Footer';
import { ServiceCard } from '../../components/serviceCard/ServiceCard';
import { NavBar } from 'src/components/navBar/NavBar';

export const Offers = () => {
  return (
    <div>
      <NavBar
        img={'/img/logo.png'}
        alt={'logo'}
        item1={'Bowling'}
        item2={'Restaurante'}
        item3={'Ofertas'}
        item4={'Reserva'}
      />
      <main className="main">
        {/*PRIMERA COLUMNA */}

        <div className="service-card">
          <ServiceCard
            src={'img/ofertas/oferta1.jpg'}
            alt={'Alquiler de zapatos'}
            title={'DE LUNES A VIERNES'}
            description={'*Todo el dia'}
          />

          <ServiceCard
            src={'img/ofertas/oferta4.jpg'}
            alt={'Alquiler de zapatos'}
            title={'JUEVES, VIERNES Y SABADOS'}
            description={'*A partir de las 22:00h'}
          />
        </div>

        {/*SEGUNDA COLUMNA */}

        <div className="service-card">
          <ServiceCard
            src={'img/ofertas/oferta2.jpg'}
            alt={'Alquiler de zapatos'}
            title={'TODOS LOS DIAS'}
            description={'*Hasta las 22:00h'}
          />
        </div>

        {/*TERCERA COLUMNA */}
        <div className="service-card">
          <ServiceCard
            src={'img/ofertas/oferta3.jpg'}
            alt={'Alquiler de zapatos'}
            title={'VIERNES, SABADOS, DOMINGOS Y FESTIVOS'}
            description={'*Hasta las 22:00h'}
          />
        </div>
      </main>

      <div className="atention">
        <h1>LAS OFERTAS NO SON ACUMULABLES CON OTRAS OFERTAS</h1>
      </div>

      <Footer
        title={'GGBowling'}
        twiLink={'https://twitter.com/Ivangg__'}
        insLink={'https://www.instagram.com/ivangg._'}
        linLink={'https://www.linkedin.com/in/ivan-garcia-garcia/'}
        target={'_blank'}
        rel={'noreferrer'}
        street={'Dirección: Calle Falsa 123, Springfield'}
        phone={'Teléfono: 555-1234'}
        email={'Correo electrónico: info@bolera.com'}
        supPage1={'Términos y condiciones'}
        supPage2={'Política de privacidad'}
      />
    </div>
  );
};
