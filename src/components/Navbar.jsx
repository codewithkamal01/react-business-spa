import React from "react";
import Logo from "../assets/logo.jpg";

function Navbar() {
  return (
      <div id="home" className="w-full  mx-auto flex justify-between items-center p-4">
        <img src={Logo} alt="Logo" className="h-10" />
        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
  );
}
export default Navbar;
