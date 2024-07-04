"use client";
import React, { useRef } from 'react';
import data from '@/ArtCarouselData'; // Adjust the path as necessary

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -(340), behavior: 'smooth' }); // Adjusted scroll width
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' }); // Adjusted scroll width
    }
  };

  return (
    <div className="relative bg-white">
      <button 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-10"
        onClick={scrollLeft}
      >
        &lt;
      </button>
      <div ref={carouselRef} className="carousel p-10 overflow-x-auto whitespace-nowrap scroll-smooth bg-white"
        style={{ width: 'calc(100% - 40px)' }}>
        {data.map((item) => (
          <div key={item.id} className="carousel-item inline-block mx-2" style={{ width: '300px' }}>
            <a href={item.href} className="block relative group">
              <img
                className="object-cover w-full h-[300px] transform transition duration-300 group-hover:scale-105 group-hover:opacity-90"
                src={item.Image}
                alt="Art piece"
              />
              <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', opacity: 0, transition: 'opacity 300ms' }}>
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
