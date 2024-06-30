"use client";
import React, { useRef } from 'react';
import data from '@/ArtHeroData'; // Adjust the path as necessary

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <button 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-10"
        onClick={scrollLeft}
      >
        &lt;
      </button>
      <div ref={carouselRef} className="carousel p-10 overflow-x-auto whitespace-nowrap scroll-smooth bg-white">
        {data.map((item) => (
          <div key={item.id} className="carousel-item inline-block mx-2" style={{ width: '300px' }}>
            <a href={item.href} className="block relative group">
              <img
                className="object-cover w-full h-[300px] transform transition duration-300 group-hover:scale-105 group-hover:opacity-90"
                src={item.Image}
                alt="Art piece"
              />
              <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.title}
              </h1>
            </a>
          </div>
        ))}
      </div>
      <button 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-10"
        onClick={scrollRight}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
