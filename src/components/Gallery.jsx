import React, { useState } from "react";

function Gallery() {
  const [selected, setSelected] = useState(null);

  const images = [
    {
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      title: "Team Collaboration",
    },
    {
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      title: "Office Meeting",
    },
    {
      img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      title: "Work Culture",
      short: true,
    },
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      title: "Coding Session",
    },
    {
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
      title: "Client Discussion",
    },
    {
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      title: "Team Bonding",
    },
    {
      img: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
      title: "Office Party",
    },
    {
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      title: "Workspace Setup",
    },
    {
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      title: "Quick Standup Meeting",
    },
  ];

  return (
    <section id="gallery" className="py-10 px-4 bg-gray-900">
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
