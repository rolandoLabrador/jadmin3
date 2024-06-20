import Image from "next/image";
import Slider from"./components/Slider";
import React from "react";
import Navbar from "./navbar/Navbar";


export default function Home() {
  return (
    <div>
<Navbar/>
<Slider/>
</div>
  );
}
