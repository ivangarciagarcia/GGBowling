import './prices.scss';
import { Footer } from 'src/components/footer/Footer';
import { Header } from 'src/components/header/Header';
import { ServiceCard } from '../../components/serviceCard/ServiceCard';

export const Prices = () => {
  return (
    <div>
      <Header img={'/img/logo.png'} alt={'logo'} />
      <main className="main">
        {/*PRIMERA COLUMNA */}

        <div className="service-card">
          <ServiceCard
            src={'img/precios/zapatos.png'}
            alt={'Alquiler de zapatos'}
            title={'ALQUILER DE ZAPATOS'}
            description={'*Solo se podra entrar a pista con zapatos de bolos'}
          />

          <ServiceCard
            src={'img/precios/zapatos.png'}
            alt={'Alquiler de zapatos'}
            title={'ALQUILER DE ZAPATOS'}
            description={'*Solo se podra entrar a pista con zapatos de bolos'}
          />
        </div>

        {/*SEGUNDA COLUMNA */}

        <div className="service-card">
          <ServiceCard
            src={'img/precios/zapatos.png'}
            alt={'Alquiler de zapatos'}
            title={'ALQUILER DE ZAPATOS'}
            description={'*Solo se podra entrar a pista con zapatos de bolos'}
          />

        </div>

        {/*TERCERA COLUMNA */}
        <div className="service-card">

          <ServiceCard
            src={'img/precios/zapatos.png'}
            alt={'Alquiler de zapatos'}
            title={'ALQUILER DE ZAPATOS'}
            description={'*Solo se podra entrar a pista con zapatos de bolos'}
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
    </div>
  );
};
