import Image from "next/image";
import Slider from"./components/Slider";
import React from "react";
import Navbar from "./navbar/Navbar";
import ArtSection from "./components/ArtSection";


export default function Home() {
  return (
    <div>
<Navbar/>
<Slider/>
<ArtSection/>
</div>
  );
}
