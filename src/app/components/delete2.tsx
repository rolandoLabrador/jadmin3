import React, { useRef } from 'react';

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
        <div className="carousel-item inline-block">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt="Burger" />
        </div>
        <div className="carousel-item inline-block">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="Burger" />
        </div>
        <div className="carousel-item inline-block">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Burger" />
        </div>
        <div className="carousel-item inline-block">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Burger" />
        </div>
        <div className="carousel-item inline-block">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            alt="Burger" />
        </div>
        <div className="carousel-item inline-block">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt="Burger" />
        </div>
        <div className="carousel-item inline-block">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            alt="Burger" />
        </div>
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
