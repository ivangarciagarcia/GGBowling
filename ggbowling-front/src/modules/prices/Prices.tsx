import './prices.scss';
import { Footer } from 'src/components/footer/Footer';
import { ServiceCard } from '../../components/serviceCard/ServiceCard';
import { NavBar } from 'src/components/navBar/NavBar';

export const Prices = () => {
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
        {/* PRIMERA COLUMNA */}
        <div className="service-card">
          <ServiceCard
            src={'img/precios/zapatos.png'}
            alt={'Alquiler de zapatos'}
            title={'ALQUILER DE ZAPATOS 1,50€'}
            description={'*Solo se podrá entrar a pista con zapatos de bolos'}
          />
        </div>

        {/* SEGUNDA COLUMNA */}
        <div className="service-card">
          <ServiceCard
            src={'img/precios/week.png'}
            alt={'precios dias laborables'}
            title={'DIAS LABORABLES 4,00€'}
            description={'*Precio partida/persona'}
          />
        </div>

        {/* TERCERA COLUMNA */}
        <div className="service-card">
          <ServiceCard
            src={'img/precios/weekend.png'}
            alt={'Precios fin de semana y festivos'}
            title={'SABADOS, DOMINGOS Y FESTIVOS 7,00€'}
            description={'*Precio partida/persona'}
          />
        </div>
      </main>
      <Footer
        title={'GGBowling'}
        twiLink={'https://twitter.com/Ivangg__'}
        insLink={'https://www.instagram.com/ivangg._'}
        linLink={'https://www.linkedin.com/in/ivan-garcia-garcia/'}
        target={'_blank'}
        rel={'noreferrer'}
        street={'Dirección: Rúa Caballeros, 1, 15006 A Coruña'}
        phone={'Teléfono: +34 697160793'}
        email={'Correo electrónico: ggbowlingcoruna@gmail.com'}
        supPage1={'Términos y condiciones'}
        supPage2={'Política de privacidad'}
      />
    </div>
  );
};
