import './home.scss';

import { Schedule } from 'src/components/schedule/Schedule';
import { ServiceCard } from '../../components/serviceCard/ServiceCard';
import { Map } from 'src/components/map/Map';
import { Footer } from 'src/components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/navBar/NavBar';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar
        img={'/img/logo.png'} 
        alt={'logo'}
        item1={'Inicio'}
        item2={'Restaurante'}
        item3={'Ofertas'}
        item4={'Bowling'}
        subitem1={'Precios'}
        subitem2={'Instalaciones'}
        subitem3={'Reserva'}
      />
      <main>
        <section
          className="first-section"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + '/img/home/bowling-background.jpg'
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
          <button className="reserva" onClick={() => navigate('/booking')}>
            Haz tu reserva
          </button>
        </section>

        <section>
          <Schedule
            dias1={'LUNES A JUEVES'}
            horario1={'De 10:00h a 00:00h'}
            dias2={'VIERNES, SABADOS Y DOMINGOS'}
            horario2={'De 10:00h a 02:00h'}
            info1={'Uso obligatorio de zapatos de bolos'}
            info2={'No esta permitido ningun tipo de comida en las pistas'}
            info3={
              'No esta permitido entrar al establecimiento con comida o bebida del exterior'
            }
            info4={'Restaurante con reserva previa'}
          />
        </section>

        <section className="second-section">
          <ServiceCard
            src={`${process.env.PUBLIC_URL + '/img/home/pista.jpg'}`}
            alt={'Precios generales'}
            title={'Precios generales'}
            description={'Consulta nuestros precios.'}
            buttonText={'Ver'}
            onClick={() => navigate('/prices')}
          />

          <ServiceCard
            src={`${process.env.PUBLIC_URL + '/img/home/cafe-bolera.jpg'}`}
            alt={'Instalaciones'}
            title={'Instalaciones'}
            description={'Descubre nuestras instalaciones'}
            buttonText={'Ver'}
            onClick={() => navigate('/installations')}
          />

          <ServiceCard
            src={`${process.env.PUBLIC_URL + '/img/home/comodin.jpg'}`}
            alt={'Reservas'}
            title={'Reservas'}
            description={'Haz tu reserva'}
            buttonText={'Reserva aqui'}
            onClick={() => navigate('/booking')}
          />
        </section>

        <section className="third-section">
          <Map />
        </section>
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
