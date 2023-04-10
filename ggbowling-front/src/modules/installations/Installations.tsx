import { Footer } from 'src/components/footer/Footer';
import { Header } from 'src/components/header/Header';

export const Installations = () => {
  return (
    <body>
      <Header img={'/img/logo.png'} alt={'logo'} />
      <main>
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
