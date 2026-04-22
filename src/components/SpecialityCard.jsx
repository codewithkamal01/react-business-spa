import React from "react";

function SpecialityCard() {
  const items = [
    {
      title: "High Quality",
      icon: "⭐",
      desc: "Provides high-quality products and services to ensure customer satisfaction.",
    },
    {
      title: "Fast Delivery",
      icon: "🚚",
      desc: "Guarantees quick and efficient delivery of your orders.",
    },
    {
      title: "Trusted Service",
      icon: "✅",
      desc: "Built on trust and reliability for a seamless customer experience.",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3 px-4 md:px-10 py-8 p-6 bg-white shadow-md rounded-lg text-center hover:shadow-xl transition duration-300">
      {items.map((item, index) => (
        <div
          key={index}
          className="group bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
        >
          <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 text-3xl group-hover:bg-blue-500 group-hover:text-white transition">
            {item.icon}
          </div>
          <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
            {item.title}
          </h2>
          <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
export default SpecialityCard;
