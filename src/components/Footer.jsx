import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  const links = ["Home", "About", "Gallery", "Contact"];
  const legal = ["Privacy Policy", "Terms", "Returns", "Shipping"];

  return (
    <footer className="bg-black text-gray-400 py-10 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        {/* BRAND */}
        <h2 className="text-2xl font-semibold text-white mb-3">XYZ Company</h2>

        <p className="text-sm text-gray-500 mb-6">
          Digital solutions designed to grow your business with performance,
          creativity, and reliability.
        </p>

        {/* NAV LINKS */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
          {links.map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-4 mb-8">
          {[FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 hover:text-white transition duration-300"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-900 to-transparent mb-6" />
        <div className="flex flex-wrap justify-center gap-4 text-xs mb-4">
          {legal.map((item, i) => (
            <a key={i} href="#" className="hover:text-blue-400 transition">
              {item}
            </a>
          ))}
        </div>
        {/* COPYRIGHT */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Xyz Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
