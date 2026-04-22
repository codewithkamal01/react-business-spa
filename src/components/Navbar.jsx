import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <img src={Logo} alt="Logo" className="h-10" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          navOpen ? "max-h-60 py-4" : "max-h-0"
        } bg-white shadow-md`}
      >
        <ul className="flex flex-col items-center gap-4 text-sm font-medium">
          <li><a href="#home" onClick={() => setNavOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setNavOpen(false)}>About</a></li>
          <li><a href="#gallery" onClick={() => setNavOpen(false)}>Gallery</a></li>
          <li><a href="#contact" onClick={() => setNavOpen(false)}>Contact</a></li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;