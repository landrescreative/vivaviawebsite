"use client";
import React, { useState, useEffect, useRef } from "react";

// Icons
import { IoIosArrowDown, IoIosCall } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";

const Navbar: React.FC = () => {
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  // Refs para los dropdowns
  const currencyDropdownRef = useRef<HTMLDivElement>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  // Maneja clics fuera del dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        currencyDropdownRef.current &&
        !currencyDropdownRef.current.contains(event.target as Node)
      ) {
        setShowCurrencyDropdown(false);
      }
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setShowLanguageDropdown(false);
      }
    }

    // Añadir event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Limpiar event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-white text-black">
      {/* Barra superior con dropdowns */}
      <div className="flex py-1 justify-evenly items-center bg-primary text-white">
        <h1 className="flex justify-center items-center gap-1">
          <IoIosCall /> 800 55592283
        </h1>
        <h1 className="">SOPORTE Y AYUDA</h1>
        <h1 className="">PREGUNTAS FRECUENTES</h1>

        {/* Dropdown para MXN */}
        <div className="relative" ref={currencyDropdownRef}>
          <button
            onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
            className="flex items-center gap-1"
          >
            <FaDollarSign /> MXN <IoIosArrowDown />
          </button>
          <div
            className={`absolute mt-2 right-0 w-32 bg-white border border-gray-300 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
              showCurrencyDropdown
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5"
            }`}
          >
            <ul className="text-black">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                USD
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                MXN
              </li>
            </ul>
          </div>
        </div>

        {/* Dropdown para ESPAÑOL */}
        <div className="relative" ref={languageDropdownRef}>
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="flex items-center gap-1"
          >
            <GrLanguage /> ESPAÑOL <IoIosArrowDown />
          </button>
          <div
            className={`absolute mt-2 right-0 w-32 bg-white border border-gray-300 shadow-lg transition-transform duration-300 ease-in-out transform ${
              showLanguageDropdown
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <ul className="text-black">
              <li className="flex justify-center items-center gap-1 px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <img src="/Flag_of_Mexico.png" className="w-5 h-full"></img>{" "}
                ESPAÑOL
              </li>
              <li className="flex justify-center items-center gap-1 px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <img src="/flagusa.webp" className="w-5 h-full"></img> ENGLISH
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra principal de navegación */}
      <div className="flex h-full py-2 justify-evenly items-center">
        {/* Logo */}
        <div className="text-primary text-2xl">
          <h1>VIVAVIA</h1>
        </div>

        {/* Links de navegación */}
        <div className="flex justify-around gap-5 text-gray-500">
          <a className="text-primary">INICIO</a>
          <a className="hover:text-primary transition-colors duration-300">
            DESTINOS Y PAQUETES
          </a>
          <a className="hover:text-primary transition-colors duration-300">
            BLOG
          </a>
          <a className="hover:text-primary transition-colors duration-300">
            NOSOTROS
          </a>
          <a className="hover:text-primary transition-colors duration-300">
            CONTACTO
          </a>
        </div>

        {/* Botones de acción */}
        <div className="flex gap-3">
          <button className="text-primary hover:scale-105 transition-transform">
            Iniciar Sesión
          </button>
          <button className="py-3 px-5 bg-primary text-center text-white rounded-full hover:scale-105 transition-transform hover:shadow-lg">
            REGISTRO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
