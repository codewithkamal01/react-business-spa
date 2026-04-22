import React from "react";

function Footer() {
  const footers = [
    { sec: "Privacy Policy" },
    { sec: "Shipping Policy" },
    { sec: "Returns & Exchanges" },
    { sec: "Terms of Service" },
    { sec: "Contact Us" },
  ];
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-gray-400 text-center p-4 text-sm">
      {footers.map((item, i) => (
        <a key={i} href="#" className="mx-2 hover:text-white">
          {item.sec}
        </a>
      ))}
    </footer>
  );
}

export default Footer;
