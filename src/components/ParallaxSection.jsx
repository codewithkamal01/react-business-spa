import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ParallaxSection({ title, bg, content, images }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax movement (disable on mobile smoothly)
  // const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const y = useTransform(
    scrollYProgress,
    [0, 1],
     [-100, 100],
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.1, 1.25],
  );

  return (
    <section
      ref={ref}
      className="relative min-h-125 overflow-hidden flex items-center justify-center"
    >
      {/* Background */}
      <motion.div
        style={{
          y,
          scale,
          backgroundImage: `url(${bg})`,
        }}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative px-4 max-w-3xl mx-auto flex justify-center"
      >
        <div className="bg-black/50 border-l-4 border-blue-600 p-6 md:p-10 rounded-lg backdrop-blur-sm">
          <h2 className="text-white text-2xl md:text-4xl font-bold">{title}</h2>

          <p className="text-gray-300 mt-3 leading-relaxed">{content}</p>

          {images && (
            <div className="flex gap-3 mt-6 flex-wrap">
              {images.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="certificate"
                  whileHover={{ scale: 1.08 }}
                  className="w-32 h-24 object-cover rounded-md border border-white/20 shadow-md"
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default ParallaxSection;
