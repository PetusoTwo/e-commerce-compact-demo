'use client'
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import foto1 from '../assets/carrousel1.png';
import foto2 from '../assets/carrousel2.png';
import { motion, AnimatePresence } from 'framer-motion';

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
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === currentSlide && (
              <motion.div 
                key={slide.id}
                initial={{ x: "-100%" }}  // Comienza fuera de la pantalla, a la izquierda
                animate={{ x: 0, opacity: 1, scale:1}}        // Se mueve a la posición original
                exit={{ opacity:0, scale:0.95 }}      // Sale por la derecha
                transition={{ duration: 1, ease: "easeIn" }}  // Transición suave
                className="absolute top-0 left-0 w-full h-full flex items-center"
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
                  <motion.div 
                    className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/4 text-white p-8 max-w-md"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <motion.h2 
                      className="text-4xl font-bold mb-3"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.p 
                      className="text-lg mb-5"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {slide.description}
                    </motion.p>
                    <motion.p 
                      className="text-2xl font-bold mb-6"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      ${slide.price.toFixed(2)}
                    </motion.p>
                    <motion.button 
                      className="px-6 py-3 bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors rounded"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver Productos
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
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