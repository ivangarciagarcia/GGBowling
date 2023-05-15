import './footer.scss';
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

export interface FooterProps {
  title: string;
  twiLink: string;
  insLink: string;
  linLink: string;
  target: string;
  rel: string;
  street: string;
  phone: string;
  email: string;
  supPage1: string;
  supPage2?: string;
}
export const Footer = (props: FooterProps) => {
  const {
    title,
    insLink,
    linLink,
    twiLink,
    target,
    rel,
    street,
    phone,
    email,
    supPage1,
    supPage2,
  } = props;

  return (
    <footer className="footer">
      <section className="footer-section">
        <div className="titulo-icons">
          <div className="titulo">{title}</div>
          <div className="icons">
            <a href={twiLink} target={target} rel={rel}>
              <AiFillTwitterCircle />
            </a>
            <a href={insLink} target={target} rel={rel}>
              <AiFillInstagram />
            </a>
            <a href={linLink} target={target} rel={rel}>
              <AiFillLinkedin />
            </a>
          </div>
        </div>

        <div className="contacto-legal">
          <div className="contacto">
            <ul>
              <li>{street}</li>
              <li>{phone}</li>
              <li>{email}</li>
            </ul>
          </div>
          <div className="legal">
            <ul>
              <li>{supPage1}</li>
              <li>{supPage2}</li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};
