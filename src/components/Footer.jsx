import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#050d2b] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Creyotech IT Services
            </h3>

            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through innovation and modern technology
              solutions.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-400" />
                <span>
                  Kolkata, West Bengal,
                  <br />
                  India
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <span>contact@creyotech.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-blue-400 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/services/web-development"
                  className="hover:text-blue-400"
                >
                  Web Development
                </a>
              </li>

              <li>
                <a
                  href="/services/digital-marketing"
                  className="hover:text-blue-400"
                >
                  Digital Marketing
                </a>
              </li>

              <li>
                <a
                  href="/services/social-media-marketing"
                  className="hover:text-blue-400"
                >
                  Social Media Marketing
                </a>
              </li>

              <li>
                <a href="/services/seo" className="hover:text-blue-400">
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>

            <div className="flex gap-4 mb-5">
              <a href="#" className="hover:text-blue-400 transition text-lg">
                <FaFacebookF />
              </a>

              <a href="#" className="hover:text-blue-400 transition text-lg">
                <FaTwitter />
              </a>

              <a href="#" className="hover:text-blue-400 transition text-lg">
                <FaLinkedinIn />
              </a>

              <a href="#" className="hover:text-blue-400 transition text-lg">
                <FaInstagram />
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <FaEnvelope className="text-blue-400" />
              <span>contact@creyotech.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-5 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
            <p className="text-sm text-gray-500">
              © 2018 - {new Date().getFullYear()} Creyotech IT Services.
            </p>

            <p className="text-sm text-gray-500">
              Developed with ❤️ by Creyotech IT Services
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-2 pt-3">
            <p className="text-xs text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
              Claims made or information provided by sellers are not endorsed by
              KarobarOne. Users are advised to independently verify all <br /> details,
              credentials,  and offerings before making any business or financial
              decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
