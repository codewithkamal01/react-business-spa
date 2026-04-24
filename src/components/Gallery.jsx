import React, { useState } from "react";
import photo1 from "../assets/gallery/photo-1.jpg";
import photo2 from "../assets/gallery/photo-2.jpg";
import photo3 from "../assets/gallery/photo-3.jpg";
import photo4 from "../assets/gallery/photo-4.jpg";
import photo5 from "../assets/gallery/photo-5.jpg";
import photo6 from "../assets/gallery/photo-6.jpg";
import photo7 from "../assets/gallery/photo-7.jpg";
import photo8 from "../assets/gallery/photo-8.jpg";
import photo9 from "../assets/gallery/photo-9.jpg";

function Gallery() {
  const [selected, setSelected] = useState(null);

  const images = [
    {
      img: photo1,
      title: "Team Collaboration",
    },
    {
      img: photo2,
      title: "Office Meeting",
    },
    {
      img: photo3,
      title: "Work Culture",
    },
    {
      img: photo4,
      title: "Coding Session",
    },
    {
      img: photo5,
      title: "Client Discussion",
    },
    {
      img: photo6,
      title: "Team Bonding",
    },
    {
      img: photo7,
      title: "Office Party",
    },
    {
      img: photo8,
      title: "Workspace Setup",
    },
    {
      img: photo9,
      title: "Quick Standup Meeting",
    },
  ];

  return (
    <section id="gallery" className="gallery py-10 px-4 bg-gray-900">
      <h2 className="text-3xl text-white font-bold text-center mb-10">
        Our Work Gallery
      </h2>

      {/* GRID */}
      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-3 space-y-4">
        {images.map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => setSelected(item)}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full object-cover rounded-xl transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <p className="text-white text-sm font-medium">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
