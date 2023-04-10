import './prices.scss';
import { Footer } from 'src/components/footer/Footer';
import { Header } from 'src/components/header/Header';
import { ServiceCard } from '../../components/serviceCard/ServiceCard';

export const Prices = () => {
  return (
    <body>
      <Header img={'/img/logo.png'} alt={'logo'} />
      <main className="main">
        {/*PRIMERA COLUMNA */}

        <div className="service-card">
          <ServiceCard
            src={'img/precios/zapatos.png'}
            alt={'Alquiler de zapatos'}
            title={'ALQUILER DE ZAPATOS 1,50€'}
            description={'*Solo se podra entrar a pista con zapatos de bolos'}
          />
        </div>

        {/*SEGUNDA COLUMNA */}

        <div className="service-card">
          <ServiceCard
            src={'img/precios/week.png'}
            alt={'precios dias laborables'}
            title={'DIAS LABORABLES 4,00€'}
            description={'*Precio partida/persona'}
          />

        </div>

        {/*TERCERA COLUMNA */}
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
        street={'Dirección: Calle Falsa 123, Springfield'}
        phone={'Teléfono: 555-1234'}
        email={'Correo electrónico: info@bolera.com'}
        supPage1={'Términos y condiciones'}
        supPage2={'Política de privacidad'}
        supPage3={'Política de cookies'}
      />
    </body>
  );
};
