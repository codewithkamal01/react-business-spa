import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SpecialityCard from "../components/SpecialityCard";
import About from "../components/About";
import USPSection from "../components/USPSection";
import Gallery from "../components/Gallery";
import Map from "../components/Map";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SpecialityCard />
      <About />
      <USPSection />
      <Gallery />
      <div className="flex justify-between">
        <Map />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
