import { User, UserProps } from 'src/components/user/User';
import { Footer } from 'src/components/footer/Footer';
import { useSelector } from 'react-redux';
import { NavBar } from 'src/components/navBar/NavBar';

export const Profile = () => {
  const { userInfo } = useSelector((state: any) => state.login);

  const userProps: UserProps = {
    username: userInfo?.username,
    password: userInfo?.password,
    nombre: userInfo?.nombre,
    primerApellido: userInfo?.primerApellido,
    email: userInfo?.email,
    telefono: userInfo?.telefono,
    fechaNacimiento: userInfo?.fechaNacimiento,
  };

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
      <User {...userProps} />

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
