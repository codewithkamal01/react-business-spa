import React from "react";
import heroImage from "../assets/hero_image.png";
function Hero() {
  return (
    <section id="home" className="relative h-96">
      <img className="w-full h-full object-cover" src={heroImage} alt="hero" />
      <div className="absolute inset-0 bg-black/30 flex items-center">
        <h2 className="text-white pl-20 uppercase text-3xl md:text-6xl font-bold">
          Grow Your Business <br />{" "}
          <span className="text-blue-400">Digitally</span>.
        </h2>
      </div>
    </section>
  );
}

export default Hero;
