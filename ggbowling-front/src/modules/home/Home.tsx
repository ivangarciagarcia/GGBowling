import './home.scss';
import { Header } from '../../components/header/Header';
import { ServiceCard } from '../../components/serviceCard/ServiceCard';

export const Home = () => {
  return (
    <div>
      <Header />
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


        <section className="second-section">

          <ServiceCard
            src={`${process.env.PUBLIC_URL + '/img/cafe-bolera.jpg'}`}
            alt={'Instalaciones'}
            title={'Instalaciones'}
            description={'Descubre nuestras instalaciones'}
            buttonText={'Informacion'}
          />

          <ServiceCard
            src={`${process.env.PUBLIC_URL + '/img/pista.jpg'}`}
            alt={'Reservar'}
            title={'Haz tu reserva'}
            description={'Haz tu reserva completa.'}
            buttonText={'Reserva aqui'}
          />

          <ServiceCard
            src={`${process.env.PUBLIC_URL + '/img/comodin.jpg'}`}
            alt={'Reservas'}
            title={'No se que poner aqui'}
            description={'Algo de contenido'}
            buttonText={'IDEAS PORFAVOR'}
          />
        </section>

        <section className="third-section"></section>

        <footer></footer>
      </main>
    </div>
  );
};
