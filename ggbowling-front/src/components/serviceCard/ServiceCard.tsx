import './serviceCard.scss';

export interface ServiceCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
}

export const ServiceCard = (props: ServiceCardProps) => {
  const { src, alt, title, description, buttonText } = props;
  return (
    <div className="card">
      <img src={src} alt={alt} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};