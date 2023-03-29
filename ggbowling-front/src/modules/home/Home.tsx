import './home.scss';

import { Header } from 'src/components/header/Header';
import { Schedule } from 'src/components/schedule/Schedule';
import { ServiceCard } from '../../components/serviceCard/ServiceCard';
import { Map } from 'src/components/map/Map';
import { Footer } from 'src/components/footer/Footer';

export const Home = () => {
  return (
    <div>
      <Header img={'/img/logo.png'} />
      <main>
        <section
          className="first-section"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + '/img/bowling-background.jpg'
            })`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="titulo">
            <p>GGBowling: Bolera-Restaurante</p>
          </div>
          <div className="subtitulo">
            <p>
              GGBowling es el mejor lugar para divertirse con amigos y familia.
              <br />
              Ofrecemos alquileres de pistas, bolos y todos los accesorios que
              <br />
              necesitas para disfrutar de una noche de diversión al máximo.
              <br />
              Ven a pasar un rato divertido con nosotros.
              <br />
            </p>
          </div>
          <button className="contacta">Contactanos</button>
        </section>

        <section>
          <Schedule />
        </section>

        <section className="second-section">
          <ServiceCard
            src={`${process.env.PUBLIC_URL + '/img/pista.jpg'}`}
            alt={'Precios generales'}
            title={'Precios generales'}
            description={'Consulta nuestros precios.'}
            buttonText={'Ver'}
          />

          <ServiceCard
            src={`${process.env.PUBLIC_URL + '/img/cafe-bolera.jpg'}`}
            alt={'Instalaciones'}
            title={'Instalaciones'}
            description={'Descubre nuestras instalaciones'}
            buttonText={'Ver'}
          />

          <ServiceCard
            src={`${process.env.PUBLIC_URL + '/img/comodin.jpg'}`}
            alt={'Reservas'}
            title={'Reservas'}
            description={'Haz tu reserva'}
            buttonText={'Reserva aqui'}
          />
        </section>

        <section className="third-section">
          <Map />
          <div className="second-half"></div>
        </section>
      </main>

      <footer>
        <section className="footer-section">
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
        </section>
      </footer>
    </div>
  );
};
