"use client";
import React from "react";
import { motion } from "framer-motion";

const brands = [
  "/aeromexico.png",
  "/volaris-logo.svg",
  "/aeromexico.png",
  "/volaris-logo.svg",
  "/aeromexico.png",
  // Add as many brand images as needed
];

const Slider = () => {
  return (
    <div className="overflow-hidden py-8">
      <motion.div
        className="flex space-x-8 py-4"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand}
            alt={`Brand ${index}`}
            className="w-60  object-contain grayscale opacity-50"
          />
        ))}
        {/* Repeat brands to create a seamless infinite effect */}
        {brands.map((brand, index) => (
          <img
            key={`${index}-duplicate`}
            src={brand}
            alt={`Brand ${index}`}
            className="w-60  object-contain grayscale opacity-50"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
