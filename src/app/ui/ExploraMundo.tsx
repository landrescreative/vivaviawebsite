import { useState, useEffect } from "react";
import { IoMdArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ExploraMundo = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const t = useTranslations("exploraMundo");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (event) => {
      const { clientX, clientY, innerWidth, innerHeight } = window;
      setMousePosition({
        x: (event.clientX / innerWidth - 0.5) * 2,
        y: (event.clientY / innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateParallax = (offset, speed, rotateSpeed) => ({
    transform: `translate(${mousePosition.x * 20}px, ${
      scrollY * speed + offset + mousePosition.y * 20
    }px) rotate(${scrollY * rotateSpeed}deg)`,
  });

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-slate-200 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 text-center relative">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.img
            src="/paisaje.jpg"
            alt={t("image1.alt")}
            className="absolute top-60 md:top-44 left-0 w-32 md:w-40 h-auto aspect-[4/3] object-cover rounded-3xl shadow-lg"
            style={calculateParallax(-50, 0.2, 0.1)}
          />
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold uppercase text-primary mb-6 tracking-wide leading-tight">
              {t("title")} <br /> {t("with")}{" "}
              <motion.span
                className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text"
                animate={{ backgroundPosition: "200% center" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "300%",
                }}
              >
                {t("brand")}
              </motion.span>
            </h1>
            <motion.p
              className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            >
              {t("description")}
            </motion.p>
          </motion.div>
          <motion.img
            src="/paisaje.jpg"
            alt={t("image2.alt")}
            className="absolute bottom-60 md:bottom-44 right-0 w-32 md:w-40 h-auto aspect-[4/3] object-cover rounded-3xl shadow-lg"
            style={calculateParallax(50, -0.2, -0.1)}
          />
        </motion.div>
      </div>
      <motion.div
        onClick={scrollToNextSection}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 border-2 p-2 border-black/50 rounded-full bg-white shadow cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        whileHover={{
          scale: 1.2,
          rotate: 360,
          transition: { duration: 0.5 },
        }}
      >
        <IoMdArrowDown size={28} className="text-primary" />
      </motion.div>
    </div>
  );
};

export default ExploraMundo;
