import React, { useRef } from 'react';
import data from "@/ArtHeroData";

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



      <div ref={carouselRef} className="carousel p-10 overflow-x-auto whitespace-nowrap scroll-smooth">
        {data.map((item) => (
          <div key={item.id} className="carousel-item inline-block mx-2">
            <a href={item.href}>
              <img
                src={item.Image}
                alt={item.title}
                className="rounded-lg"
              />
              <div className="text-center mt-2">{item.title}</div>
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
