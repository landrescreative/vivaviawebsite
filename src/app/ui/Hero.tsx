"use client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero({ title, subtitle, button }) {
  const [fromDropdown, setFromDropdown] = useState(false);
  const [toDropdown, setToDropdown] = useState(false);

  // Variantes para las animaciones
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex flex-col w-full min-h-[100vh] justify-center items-center md:items-start relative overflow-hidden">
      {/* Texto principal con animaciones */}
      <motion.div
        className="main-text flex flex-col justify-center md:items-start items-center px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-2xl text-center md:text-start text-white"
          variants={itemVariants}
        >
          {title}
        </motion.h2>
        <motion.h1
          className="font-semibold text-4xl mb-2 text-center md:text-start text-white"
          variants={itemVariants}
        >
          {subtitle}
        </motion.h1>
        <motion.button
          className="px-12 py-3 w-fit bg-white text-black font-medium hover:scale-110 hover:bg-primary hover:text-white transition-all duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {button}
        </motion.button>
      </motion.div>

      {/* Tarjeta de búsqueda con animaciones */}
      <motion.div
        className="absolute bottom-3 left-3 flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="tarjeta flex gap-3 bg-white/60 p-3 md:p-4 rounded-lg backdrop-blur-md">
          {/* Dropdown "Desde" */}
          <div
            className="bg-white text-black py-4 px-8 rounded-lg relative absolute cursor-pointer hidden md:block"
            onClick={() => setFromDropdown(!fromDropdown)}
          >
            <span className="text-sm text-gray-600">Desde</span>
            <h1>Ciudad de México, México</h1>
            <div className="p-[5px] rounded-full bg-primary z-10 text-white absolute -right-[18px] top-1/3 hidden md:block">
              <IoIosArrowForward />
            </div>
            <motion.div
              className="absolute mt-2 right-0 -top-60 w-full bg-primary rounded-lg shadow-lg"
              variants={dropdownVariants}
              initial="hidden"
              animate={fromDropdown ? "visible" : "hidden"}
            >
              <ul className="text-white font-bold flex flex-col">
                <li className="px-4 py-4 hover:bg-blue-900 cursor-pointer">
                  México
                </li>
                <li className="px-4 py-4 hover:bg-blue-900 cursor-pointer">
                  Colombia
                </li>
                <li className="px-4 py-4 hover:bg-blue-900 cursor-pointer">
                  Argentina
                </li>
                <li className="px-4 py-4 hover:bg-blue-900 cursor-pointer">
                  Chile
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Dropdown "Hacia" */}
          <div
            className="bg-white text-black py-4 px-8 rounded-lg relative cursor-pointer"
            onClick={() => setToDropdown(!toDropdown)}
          >
            <span className="text-sm text-gray-600">Hacia</span>
            <h1>Cancún, Quintana Roo</h1>
            <div className="p-[5px] rounded-full bg-primary z-10 text-white absolute -right-[18px] top-1/3 hidden md:block">
              <IoIosArrowForward />
            </div>
            <motion.div
              className="absolute mt-2 right-0 -top-60 w-full bg-primary rounded-lg shadow-lg"
              variants={dropdownVariants}
              initial="hidden"
              animate={toDropdown ? "visible" : "hidden"}
            >
              <ul className="text-white font-bold flex flex-col">
                <li className="px-4 py-4 hover:bg-blue-900 cursor-pointer">
                  México
                </li>
                <li className="px-4 py-4 hover:bg-blue-900 cursor-pointer">
                  Colombia
                </li>
                <li className="px-4 py-4 hover:bg-blue-900 cursor-pointer">
                  Argentina
                </li>
                <li className="px-4 py-4 hover:bg-blue-900 cursor-pointer">
                  Chile
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Campo de fecha */}
          <div className="bg-white text-black py-4 px-8 rounded-lg hidden md:block">
            <span className="text-sm text-gray-600">Fecha</span>
            <h1>12 / Julio / 2024</h1>
          </div>

          {/* Botón de búsqueda */}
          <motion.button
            className="px-8 bg-primary rounded-lg hover:scale-105 transition-all duration-300 text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaSearch />
          </motion.button>
        </div>
      </motion.div>

      {/* Video de fondo */}
      <div className="w-screen h-screen absolute -z-10 top-0 left-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/paisaje.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
