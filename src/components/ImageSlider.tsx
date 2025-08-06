import { useState, useEffect } from 'react';
import carWash1 from '@/assets/car-wash-1.jpg';
import carWash2 from '@/assets/car-wash-2.jpg';
import carWash3 from '@/assets/car-wash-3.jpg';

const images = [carWash1, carWash2, carWash3];

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-20' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Car wash ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};