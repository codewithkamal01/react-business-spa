import React from "react";
import heroImage from "../assets/hero_image.png";
function Hero() {
  return (
    <section id="home" className="relative h-[600px]"> 
      <img className="w-full h-full object-cover object-[70%_20%]" src={heroImage} alt="hero" />
      <div className="absolute inset-0 bg-black/40 flex items-center">
        <h2 className="text-white pl-10 md:pl-15 uppercase text-4xl md:text-6xl font-bold">
          Grow Your Business <br />{" "}
          <span className="text-blue-400">Digitally</span>.
        </h2>
      </div>
    </section>
  );
}

export default Hero;
