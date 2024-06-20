// src/app/components/Slider.tsx

// @ts-ignore
'use client';
import 'hero-slider/dist/index.css';
import HeroSlider, { Nav, Overlay, Slide ,MenuNav} from 'hero-slider';
const firstB = 'https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const secondB ='https://images.unsplash.com/photo-1507525428034-b723cf961d3e';
const thirdB = 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const Slider = () => {
  return (
    <HeroSlider
      height="100vh"
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide: number) =>
          console.debug('onSliding(nextSlide): ', nextSlide),
        onBeforeSliding: (previousSlide: number, nextSlide: number) =>
          console.debug(
            'onBeforeSliding(previousSlide, nextSlide): ',
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide: number) =>
          console.debug('onAfterSliding(nextSlide): ', nextSlide)
      }}
    >
      {/* Add your slides here */}

      <Overlay> 



        
      </Overlay>

      <Slide
        background={{
          backgroundImageSrc: firstB, // Ensure correct URL format
        }}
      ></Slide>


<Slide
        background={{
          backgroundImageSrc: secondB, // Ensure correct URL format
          
       
        }}
      ></Slide>

<Slide
        background={{
          backgroundImageSrc:thirdB, // Ensure correct URL format
          
       
        }}
      ></Slide>
      <MenuNav/>
    </HeroSlider>
    
  );
};

export default Slider;
