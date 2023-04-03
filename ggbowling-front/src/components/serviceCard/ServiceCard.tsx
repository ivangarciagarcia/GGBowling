import './serviceCard.scss';

export interface ServiceCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  buttonText?: string;
  href?: string;
  onClick?: () => void;
}

export const ServiceCard = (props: ServiceCardProps) => {
  const { src, alt, title, description, buttonText, href, onClick } = props;
  return (
    <div className="card">
      <img src={src} alt={alt} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={href}>
          <button onClick={onClick}>{buttonText}</button>
        </a>
      </div>
    </div>
  );
};
