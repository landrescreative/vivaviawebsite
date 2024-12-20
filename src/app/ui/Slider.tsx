"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Slider = () => {
  const brands = [
    "/Aeromexico.png",
    "/Volaris-logo.svg",
    "/Aeromexico.png",
    "/Volaris-logo.svg",
    "/Aeromexico.png",
  ];

  const [repeatedBrands, setRepeatedBrands] = useState([...brands, ...brands]); // Duplicamos desde el inicio para asegurar continuidad
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const itemWidth = 240; // Ancho estimado de cada imagen
      const itemsNeeded = Math.ceil(containerWidth / itemWidth) + 1;

      // Calculamos las repeticiones necesarias para garantizar un ciclo fluido
      const totalItems = itemsNeeded * 2; // Duplicar para el efecto infinito
      setRepeatedBrands((prev) => {
        const repetitions = Math.ceil(totalItems / brands.length);
        return Array(repetitions).fill(brands).flat();
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden py-8 "
      style={{ width: "100%" }}
    >
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 25, // Ajusta la duración según la velocidad deseada
          ease: "linear",
        }}
      >
        {repeatedBrands.map((brand, index) => (
          <Image
            key={index}
            src={brand}
            alt={`Brand ${index}`}
            width={240}
            height={240}
            className="object-contain mx-4"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
