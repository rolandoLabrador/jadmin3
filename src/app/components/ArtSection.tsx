import React from "react";
import data from "@/ArtHeroData";

interface Item {
  id: number;
  Image: string;
}

const ArtSection = () => {
  return (
    <div className="  grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 bg-white p-20 justify-center">
      {data.map((item: Item) => (
        <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="  object-cover w-full h-[500px] h-full"
           src={item.Image} alt="Art piece" />
        </div>
      ))}
    </div>
  );
};

export default ArtSection;


/*
this does not work 
Use a Smaller Fixed Height:
You can use a class like h-64 or h-72 instead of h-80. These classes will set the 
height of the images to 64 pixels or 72 pixels respectively, which are smaller than h-80.

this works !!!!!!!!
Use Responsive Height Classes:
Tailwind CSS also provides responsive height classes like h-[60px] which allow you to specify a height in pixels directly. Replace [60px] with your desired height.

jsx


i dont know if this works
Alternatively, you can use percentage-based heights to make the image a percentage of its parent container's height. For example, h-3/4 will make the 
image three-quarters of its container's height.
*/

