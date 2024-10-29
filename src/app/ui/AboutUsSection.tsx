"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ProgresoScroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollProgress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sectionTexts = [
    {
      title: "Experiencia Personalizada",
      text: "Nos enfocamos en entender tus preferencias y necesidades únicas para diseñar un viaje a medida. Desde escapadas románticas hasta aventuras familiares, cada detalle es cuidadosamente planificado para que disfrutes al máximo.",
      img: "img1.png",
    },
    {
      title: "Planes de Viaje Flexibles",
      text: "Entendemos que cada viajero es diferente, por eso ofrecemos planes de viaje flexibles que se adaptan a tus necesidades. Cambia fechas, modifica itinerarios y ajusta tus planes sin complicaciones.",
      img: "img2.png",
    },
    {
      title: "Acceso a Ofertas Exclusivas",
      text: "Con Vivavía, tienes acceso a promociones y ofertas que no encontrarás en ningún otro lugar. Trabajamos directamente con proveedores de confianza para garantizar que obtengas el mejor valor por tu dinero.",
      img: "group 68.png",
    },
  ];

  return (
    <div className="relative p-4 md:p-10">
      {/* Barra de progreso continua */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 hidden md:block">
        <div
          className="bg-blue-500 w-full absolute left-0 top-0 transition-all duration-200 ease-linear"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Secciones con imagen y texto */}
      <div className="flex flex-col items-center justify-center gap-10 md:gap-20 p-4 md:p-10 z-10 relative">
        {sectionTexts.map((section, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-10"
          >
            {/* Imagen */}
            <Image
              src={`/${section.img}`}
              alt={section.title}
              width={1336}
              height={838}
              className="w-full md:w-2/4 p-4 md:p-24 object-cover"
            />

            {/* Círculo de progreso */}
            <div className="relative  justify-center items-center hidden md:flex">
              <div className="absolute top-1/2 transform -translate-y-1/2 bg-gray-300 w-8 h-8 rounded-full flex justify-center items-center z-10 -left-14">
                <div
                  className={`${
                    scrollProgress >= ((index + 1) / sectionTexts.length) * 100
                      ? "bg-blue-500"
                      : "bg-white"
                  } w-4 h-4 rounded-full`}
                />
              </div>
            </div>

            {/* Texto */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                {section.title}
              </h2>
              <p className="text-lg">{section.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgresoScroll;
