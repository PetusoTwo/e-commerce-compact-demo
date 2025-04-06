'use client'
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import foto1 from '../assets/carrousel1.png';
import foto2 from '../assets/carrousel2.png';

interface SlideData {
  id: number;
  imageUrl: StaticImageData;
  title: string;
  description: string;
  price: number;
}

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides: SlideData[] = [
    {
      id: 1,
      imageUrl: foto1,
      title: 'Equipos de Seguridad',
      description: 'Soluciones profesionales para protección industrial',
      price: 299.99
    },
    {
      id: 2,
      imageUrl: foto2,
      title: 'Materiales de Construcción',
      description: 'Productos de alta calidad para sus proyectos',
      price: 199.99
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden mb-8 mt-16">
      <div className="w-full h-full relative">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full flex items-center transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image 
                src={slide.imageUrl} 
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/4 text-white p-8 max-w-md">
                <h2 className="text-4xl font-bold mb-3">{slide.title}</h2>
                <p className="text-lg mb-5">{slide.description}</p>
                <p className="text-2xl font-bold mb-6">${slide.price.toFixed(2)}</p>
                <button className="px-6 py-3 bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors rounded">
                  Ver Productos
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-yellow-500' : 'bg-white/70'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;