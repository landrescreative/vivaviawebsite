// components/NuestraHistoria.js

import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useTranslations } from "next-intl";

const NuestraHistoria = () => {
  const images = [
    {
      src: "/paisaje.jpg",
      alt: "Location 1",
      info: "Paisaje: Descubre la naturaleza.",
    },
    {
      src: "/cancun.jpg",
      alt: "Location 2",
      info: "Cancún: Playas y diversión.",
    },
    {
      src: "/cabos.jpg",
      alt: "Location 3",
      info: "Los Cabos: Relax y aventura.",
    },
    { src: "/tulum.jpg", alt: "Location 4", info: "Tulum: Historia y magia." },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const t = useTranslations("nuestrahistoria");

  return (
    <motion.div
      className="flex flex-col justify-center items-center bg-slate-50 text-black min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex flex-col justify-center items-center w-10/12 py-20 mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.span
          className="font-black text-primary uppercase"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {t("nuestra_historia")}
        </motion.span>
        <motion.h1
          className="text-4xl text-center font-bold text-primary mt-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {t("titulo")}
        </motion.h1>
        <motion.p
          className="text-center mt-8 text-lg"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {t("descripcion")}
        </motion.p>

        {/* Carrusel para móviles */}
        <div className="block md:hidden mt-8 w-full">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-[500px] overflow-hidden rounded-lg"
              >
                {/* Imagen con animaciones */}
                <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-110 group-hover:blur-sm">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Superposición con texto y botón */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent rounded-t-lg p-6 text-center flex flex-col items-center">
                  <p className="text-white text-lg font-light mb-4">
                    {image.info}
                  </p>
                  <button className="bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-opacity-90 transition duration-300">
                    {t("reservar_ahora")}
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Cuadrícula para pantallas más grandes */}
        <motion.div
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative card overflow-hidden rounded-lg group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.02,
                rotate: 1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              {/* Imagen con animación */}
              <div className="relative w-full h-full">
                <motion.div className="w-full h-full transition-transform duration-300 group-hover:scale-110 group-hover:blur-sm">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </motion.div>
              </div>
              {/* Información con botón */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold text-center px-4 mb-4">
                  {image.info}
                </p>
                <button className="bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-opacity-90 transition duration-300">
                  {t("reservar_ahora")}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NuestraHistoria;
