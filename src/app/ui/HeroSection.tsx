"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { motion, useMotionValue, useTransform } from "framer-motion";

const HeroSection: React.FC = () => {
  const t = useTranslations("HeroSection");

  // Valores de movimiento para X e Y
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transformaciones para los elementos decorativos
  const parallaxX1 = useTransform(x, [0, window.innerWidth], [-50, 50]);
  const parallaxY1 = useTransform(y, [0, window.innerHeight], [-50, 50]);
  const parallaxX2 = useTransform(x, [0, window.innerWidth], [50, -50]);
  const parallaxY2 = useTransform(y, [0, window.innerHeight], [50, -50]);

  // Manejo del movimiento del ratón
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

  return (
    <motion.div
      className="hero min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 via-white to-blue-50 relative px-6 text-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Fondo decorativo con paralaje */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full blur-3xl opacity-30"
        style={{
          x: parallaxX1,
          y: parallaxY1,
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-20"
        style={{
          x: parallaxX2,
          y: parallaxY2,
        }}
      ></motion.div>

      {/* Contenido principal */}
      <motion.div
        className="z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight"
          whileHover={{ scale: 1.05 }}
        >
          <span className="hover:text-primary">{t("title")}</span>{" "}
          <span className="text-primary">{t("subtitle")}</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.3 },
          }}
        >
          {t("description")}
        </motion.p>
        <motion.div
          className="relative flex items-center justify-center mx-auto w-full md:w-2/3 lg:w-1/3 shadow-md rounded-full overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.6 },
          }}
        >
          <motion.button
            className="absolute left-4 text-gray-400 hover:text-primary transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaSearch size={20} />
          </motion.button>
          <input
            type="text"
            placeholder={t("placeholder")}
            className="w-full p-4 pl-12 text-gray-700 focus:outline-none focus:ring-4 focus:ring-primary/50 focus:border-primary border border-gray-300 rounded-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
