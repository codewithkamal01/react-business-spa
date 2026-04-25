import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SpecialityCard from "../components/SpecialityCard";
import USPSection from "../components/USPSection";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ParallaxScroll from "../components/ParallaxScroll";
import Services from "../components/Services";

function Home() {
  return (
    <div className="bg-slate-600">
      <Navbar />
      <Hero />
      <SpecialityCard />
      <ParallaxScroll/>
      <Services/>
      <USPSection />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
