import './installations.scss';
import { Footer } from 'src/components/footer/Footer';
import { Header } from 'src/components/header/Header';
import Gallery from 'react-photo-gallery';

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
      <Header img={'/img/logo.png'} alt={'logo'} />
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
