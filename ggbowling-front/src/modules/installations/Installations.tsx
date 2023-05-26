import { Footer } from 'src/components/footer/Footer';
import Gallery from 'react-photo-gallery';
import { NavBar } from 'src/components/navBar/NavBar';

export const Installations = () => {
  const photos = [
    {
      src: 'img/installations/bowling-background.jpg',
      width: 1200,
      height: 600,
    },
    {
      src: 'img/installations/cafe-bolera.jpg',
      width: 1600,
      height: 900,
    },
    {
      src: 'img/installations/pista.jpg',
      width: 600,
      height: 800,
    },
    {
      src: 'img/installations/restaurant.jpg',
      width: 2500,
      height: 1200,
    },
    {
      src: 'img/installations/restaurante2.jpg',
      width: 318,
      height: 159,
    },

    {
      src: 'img/installations/cafeteria.jpeg',
      width: 2250,
      height: 1000,
    },
    {
      src: 'img/installations/pista2.jpg',
      width: 1400,
      height: 900,
    },
  ];

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
      <main>
        <Gallery photos={photos} margin={10} />
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
