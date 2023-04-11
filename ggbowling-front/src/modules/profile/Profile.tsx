import './profile.scss';
import { Header } from '../../components/header/Header';
import { User } from 'src/components/user/User';
import { Footer } from 'src/components/footer/Footer';

export const Profile = () => {
  return (
    <body>
      <Header img={'/img/logo.png'} alt={'logo'} />
      <User username={''} password={''} nombre={''} primerApellido={''} email={''} telefono={''} fechaNacimiento={''} />
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
