import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { FaCheckCircle, FaUsers, FaRupeeSign } from "react-icons/fa";

const uspCards = [
  {
    icon: FaCheckCircle,
    title: "Quality Assurance",
    desc: "We follow strict quality standards to ensure reliable and high-performance results.",
    iconStyle: "text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.7)]",
  },
  {
    icon: FaRupeeSign,
    title: "Affordable Pricing",
    desc: "Competitive pricing with maximum value, without compromising quality.",
    iconStyle: "text-yellow-400 drop-shadow-[0_0_8px_rgba(253,224,71,0.7)]",
  },
  {
    icon: FaUsers,
    title: "Expert Team",
    desc: "Experienced professionals delivering efficient and innovative solutions.",
    iconStyle: "text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]",
  },
];

function USPSection() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    loadSlim(window.tsParticles).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section className="relative h-fit pb-5 pt-10 md:pt-0 md:h-180 flex items-center justify-center text-center overflow-hidden bg-black">
      {/* Particle Background */}
      {init && (
        <Particles
          className="absolute inset-0 z-0"
          options={{
            fullScreen: false,
            particles: {
              number: { value: 60 },
              color: { value: "#00f2ff" },
              links: {
                enable: true,
                distance: 120,
                color: "#ffffff",
                opacity: 0.3,
              },
              move: { enable: true, speed: 1 },
              size: { value: 2 },
              opacity: { value: 0.5 },
            },
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>

        <p className="max-w-2xl mx-auto mb-10 md:mb-15  text-gray-300">
          We stand out from our competitors by delivering consistent quality,
          cost-effective solutions, and a customer-first approach in every
          project.
        </p>

        {/* USP Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {uspCards.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 backdrop-blur flex flex-col items-center rounded hover:scale-105 transition duration-300"
            >
              <card.icon className={`text-4xl mb-4 ${card.iconStyle}`} />
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <p className="text-sm mt-2 text-gray-300">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default USPSection;