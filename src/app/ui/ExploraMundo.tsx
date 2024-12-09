import { useState, useEffect } from "react";
import { IoMdArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const ExploraMundo = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateParallax = (offset, speed, rotateSpeed) => ({
    transform: `translateY(${scrollY * speed + offset}px) rotate(${
      scrollY * rotateSpeed
    }deg)`,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Imagen decorativa izquierda */}
          <motion.img
            src="/paisaje.jpg"
            alt="Decorative Image 1"
            className="absolute top-60 md:top-44 left-0 w-32 md:w-40 h-auto aspect-[4/3] object-cover rounded-3xl shadow-lg"
            style={calculateParallax(-50, 0.2, 0.1)} // Parallax con rotación
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          />
          {/* Título y subtítulo */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold uppercase text-primary mb-6 tracking-wide leading-tight">
              Explora el mundo <br /> con{" "}
              <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
                Vivavía
              </span>
            </h1>
            <motion.p
              className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            >
              Descubre la pasión, el compromiso y la magia que nos mueve a
              explorar nuevos destinos y conectar contigo.
            </motion.p>
          </motion.div>
          {/* Imagen decorativa derecha */}
          <motion.img
            src="/paisaje.jpg"
            alt="Decorative Image 2"
            className="absolute bottom-60 md:bottom-44 right-0 w-32 md:w-40 h-auto aspect-[4/3] object-cover rounded-3xl shadow-lg"
            style={calculateParallax(50, -0.2, -0.1)} // Parallax con rotación inversa
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          />
        </motion.div>
      </div>
      {/* Flecha de scroll */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 border-2 p-2 border-black/50 rounded-full animate-bounce bg-white shadow cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
      >
        <IoMdArrowDown size={28} className="text-primary" />
      </motion.div>
    </div>
  );
};

export default ExploraMundo;
