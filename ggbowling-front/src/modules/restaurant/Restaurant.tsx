import './restaurant.scss';
import { Header } from '../../components/header/Header';
import { Footer } from 'src/components/footer/Footer';
import { Schedule } from 'src/components/schedule/Schedule';
import { ServiceCard } from '../../components/serviceCard/ServiceCard';

export const Restaurant = () => {

  const descargarCarta = async () => {
    try {
      const respuesta = await fetch('http://localhost:8080/restaurante/carta');
      const blob = await respuesta.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Carta.pdf');
      document.body.appendChild(link);
      link.click();
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    } catch (error) {
      console.error('Error al descargar el archivo', error);
    }
  };

  const descargarMenu = async () => {
    try {
      const respuesta = await fetch('http://localhost:8080/restaurante/menu');
      const blob = await respuesta.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Menu del dia.pdf');
      document.body.appendChild(link);
      link.click();
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    } catch (error) {
      console.error('Error al descargar el archivo', error);
    }
  };
  



  return (
    <div>
      <Header img={'/img/logo.png'} alt={'Logo GGBowling'} />

      <main>
        <section
          className="first-section"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + '/img/restaurant.jpg'
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
              ¡Ven a disfrutar de una deliciosa experiencia culinaria en
              GGBowling!
              <br />
              Ofrecemos una amplia variedad de platos y bebidas para satisfacer
              todos los gustos.
              <br />
              ¡Combina la comida y la diversión en un solo lugar!
              <br />
            </p>
          </div>
          <button className="reserva">Haz tu reserva</button>
        </section>

        <Schedule
          dias1={'DOMINGO A JUEVES'}
          horario1={'De 10:00h a 23:00h'}
          dias2={'VIERNES Y SABADOS'}
          horario2={'De 10:00h a 00:00h'}
          info1={
            'La cocina se cierra una hora antes del cierre del establecimiento.'
          }
          info2={
            'No esta permitido entrar al establecimiento con comida o bebida del exterior'
          }
        />

        <section className="second-section">
          <ServiceCard
            src={`${process.env.PUBLIC_URL + '/img/cutlery-logo.png'}`}
            alt={'Carta restaurante GGBowling'}
            title={'NUESTRA CARTA'}
            description={'¡Encontrarás todo lo que te apetece en nuestra cocina abierta durante todo el día! Además, puedes disfrutar de nuestras irresistibles tapas. ¡Ven a probar nuestros platos en nuestro establecimiento!'}
            buttonText={'Carta'}
            onClick={descargarCarta}
          />
          <ServiceCard
            src={`${process.env.PUBLIC_URL + '/img/menu.png'}`}
            alt={'Menu del dia GGBowling'}
            title={'MENU DEL DIA'}
            description={'¡Disfruta de un almuerzo completo con nuestro menú del día! Ofrecemos una variada selección de platos frescos y sabrosos para satisfacer todos los gustos. ¡Ven a probar nuestra cocina en el almuerzo!'}
            buttonText={'Menú'}
            onClick={descargarMenu}

          />
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
