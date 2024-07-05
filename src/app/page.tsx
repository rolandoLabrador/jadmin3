import Image from "next/image";
import Slider from "./components/Slider";
import React from "react";
import Navbar from "./navbar/Navbar";
import Hero2 from "./components/Hero2";
import ArtSection from "./components/ArtSection";
import Carousel from "./components/carousel";







export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero2 />
     
     <ArtSection />
    
     <Carousel />
      <Navbar />
    </div>
  );
}
