import './sliderComponent.scss';
import { useState, useEffect } from 'react';

interface SliderProps {
  images: string[];
}

export const SliderComponent = ({ images }: SliderProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div>
      <img src={images[index]} alt="Slider" />
    </div>
  );
};