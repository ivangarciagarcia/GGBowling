import './privacyPolicy.scss';
import { Footer } from 'src/components/footer/Footer';
import { NavBar } from 'src/components/navBar/NavBar';

export const PrivacyPolicy = () => {
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
        <h1 className='titulo1'>Política de Privacidad</h1>
        <p className='firstp'>
          En GGBowling, nos comprometemos a proteger tu privacidad y garantizar
          la seguridad de la información personal que nos proporcionas. Esta
          política de privacidad describe cómo recopilamos, utilizamos y
          protegemos la información personal que recopilamos.
        </p>

        <h2 className='titulo2'>Recopilación de información</h2>
        <p className='parrafo'>
          Recopilamos información personal cuando te registras en nuestro sitio
          web, realizas una reserva o nos proporcionas información de contacto.
          La información que recopilamos puede incluir tu nombre, dirección de
          correo electrónico, número de teléfono y otra información relevante.
        </p>

        <h2 className='titulo2'>Uso de la información</h2>
        <p className='parrafo'>
          Utilizamos la información personal recopilada para procesar tus
          reservas, proporcionarte información sobre nuestros servicios y
          mejorar tu experiencia en GGBowling. También podemos utilizar tu
          información para enviarte promociones, ofertas especiales y
          actualizaciones relacionadas con nuestro restaurante bolera.
        </p>

        <h2 className='titulo2'>Divulgación de información</h2>
        <p className='parrafo'>
          No vendemos, intercambiamos ni transferimos tu información personal a
          terceros sin tu consentimiento, excepto en los casos en que sea
          necesario para prestar los servicios que solicitaste. Podemos divulgar
          tu información a nuestros proveedores de servicios de confianza que
          nos ayudan en la operación de nuestro negocio, siempre y cuando estén
          de acuerdo en mantener esta información confidencial.
        </p>

        <h2 className='titulo2'>Seguridad de la información</h2>
        <p className='parrafo'>
          Implementamos medidas de seguridad adecuadas para proteger la
          información personal que nos proporcionas contra accesos no
          autorizados o divulgaciones. Sin embargo, no podemos garantizar la
          seguridad absoluta de la información en Internet.
        </p>

        <h2 className='titulo2'>Enlaces a sitios web de terceros</h2>
        <p className='parrafo'>
          Nuestro sitio web puede contener enlaces a sitios web de terceros. No
          nos hacemos responsables de las prácticas de privacidad o del
          contenido de dichos sitios. Te recomendamos leer las políticas de
          privacidad de esos sitios antes de proporcionarles cualquier
          información personal.
        </p>

        <h2 className='titulo2'>Actualizaciones de la política de privacidad</h2>
        <p className='parrafo'>
          Podemos actualizar nuestra política de privacidad periódicamente.
          Cualquier cambio que realicemos se publicará en esta página. Te
          recomendamos revisar esta política de privacidad con regularidad para
          mantenerte actualizado sobre cómo manejamos y protegemos tu
          información personal.
        </p>

        <h2 className='titulo2'>Tus derechos</h2>
        <p className='parrafo'>
          Tienes derechos sobre tus datos personales. Puedes acceder, corregir o
          eliminar la información personal que tenemos sobre ti. Si deseas
          ejercer alguno de estos derechos, contáctanos utilizando la
          información de contacto que se proporciona al final de esta política.
        </p>

        <h2 className='titulo2'>Menores de edad</h2>
        <p className='parrafo'>
          Nuestros servicios no están dirigidos a menores de edad. No
          recopilamos intencionalmente información personal de personas menores
          de 18 años. Si eres padre/madre o tutor legal y crees que tu hijo nos
          ha proporcionado información personal, contáctanos y tomaremos las
          medidas necesarias para eliminar dicha información de nuestros
          registros.
        </p>

        <h2 className='titulo2'>Contacto</h2>
        <p className='parrafo'>
          Si tienes alguna pregunta o inquietud acerca de nuestra política de
          privacidad o sobre cómo manejamos tus datos personales, no dudes en
          contactarnos:
        </p>
        <p className='parrafo'>Restaurante Bolera GGBowling</p>
        <p className='parrafo'>Dirección: Calle Principal, Ciudad, País</p>
        <p className='parrafo'>Teléfono: 123-456-789</p>
        <p className='parrafo'>Correo electrónico: ggbowlingcoruna@gmail.com</p>
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
      />
    </div>
  );
};
