import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SpecialityCard from "../components/SpecialityCard";
import About from "../components/About";
import USPSection from "../components/USPSection";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Map from "../components/Map";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SpecialityCard />
      <About />
      <USPSection />
      <Gallery />
      <div className="flex flex-col gap-1 justify-between md:flex-row">
        <Map />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
