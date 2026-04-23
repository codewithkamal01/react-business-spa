import React, { useState } from "react";
import Logo from "../assets/logo-1.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
        
        <div className="max-w-7xl mx-auto flex justify-between items-center px-2 py-1">
          <img src={Logo} alt="Logo" className="h-10" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#gallery" className="hover:text-blue-400 transition">Gallery</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            navOpen ? "max-h-60 py-4" : "max-h-0"
          } backdrop-blur-lg bg-black/60`}
        >
          <ul className="flex flex-col items-center gap-4 text-sm font-medium text-white">
            <li><a href="#home" onClick={() => setNavOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setNavOpen(false)}>About</a></li>
            <li><a href="#gallery" onClick={() => setNavOpen(false)}>Gallery</a></li>
            <li><a href="#contact" onClick={() => setNavOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className="h-12" />
    </>
  );
}

export default Navbar;