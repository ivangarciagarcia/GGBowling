import './termsAndConditions.scss';
import { Footer } from 'src/components/footer/Footer';
import { NavBar } from 'src/components/navBar/NavBar';

export const TermsAndConditions = () => {
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
        <h1 className="titulo1">Términos y Condiciones</h1>
        <p className="parrafo">
          Estos términos y condiciones ("Términos") rigen el uso de los
          servicios ofrecidos por GGBowling. Al acceder y utilizar nuestros
          servicios, aceptas cumplir con estos Términos. Si no estás de acuerdo
          con alguno de estos términos, no utilices nuestros servicios.
        </p>

        <h2 className="titulo2">Reservas</h2>
        <p className="parrafo">
          Para realizar una reserva en GGBowling, debes proporcionar información
          precisa y actualizada. Te recomendamos que llegues a tiempo para
          asegurar tu reserva, de lo contrario, nos reservamos el derecho de
          asignar tu reserva a otros clientes si la consideramos como "no
          presentada".
        </p>

        <h2 className="titulo2">Pagos</h2>
        <p className="parrafo">
          Los pagos por nuestros servicios se deben realizar de acuerdo con
          nuestras políticas de pago. Nos reservamos el derecho de cancelar o
          rechazar cualquier reserva en caso de incumplimiento de los pagos.
        </p>

        <h2 className="titulo2">Comportamiento del cliente</h2>
        <p className="parrafo">
          Esperamos que todos los clientes se comporten de manera respetuosa y
          adecuada hacia nuestro personal y otros clientes. Nos reservamos el
          derecho de negar el servicio o la entrada a cualquier persona que
          muestre un comportamiento inapropiado, violento o que viole nuestras
          normas internas.
        </p>

        <h2 className="titulo2">Limitación de responsabilidad</h2>
        <p className="parrafo">
          No nos hacemos responsables de ningún daño, pérdida o lesión sufrida
          durante el uso de nuestros servicios, incluyendo la utilización de
          nuestras instalaciones, a menos que sea causado directamente por
          nuestra negligencia grave.
        </p>

        <h2 className="titulo2">Propiedad intelectual</h2>
        <p className="parrafo">
          Todos los derechos de propiedad intelectual relacionados con nuestros
          servicios, incluyendo el contenido del sitio web y cualquier material
          proporcionado, son propiedad exclusiva de GGBowling. No está permitido
          copiar, reproducir o utilizar nuestro contenido sin nuestro
          consentimiento previo por escrito.
        </p>

        <h2 className="titulo2">Modificaciones</h2>
        <p className="parrafo">
          Nos reservamos el derecho de modificar o actualizar estos Términos en
          cualquier momento sin previo aviso. Es responsabilidad del cliente
          revisar estos Términos periódicamente. El uso continuado de nuestros
          servicios después de cualquier modificación constituirá la aceptación
          de los Términos modificados.
        </p>

        <h2 className="titulo2">Contacto</h2>
        <p className="parrafo">
          Si tienes alguna pregunta o inquietud acerca de nuestros términos y
          condiciones, no dudes en contactarnos:
        </p>
        <p className="parrafo">Restaurante Bolera GGBowling</p>
        <p className="parrafo">Dirección: Calle Principal, Ciudad, País</p>
        <p className="parrafo">Teléfono: 123-456-789</p>
        <p className="parrafo">Correo electrónico: ggbowlingcoruna@gmail.com</p>
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
