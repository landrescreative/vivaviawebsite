"use client";

import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#193590] text-white rounded-t-[100px] mt-20 shadow-2xl py-10 relative">
      <div className="container mx-auto">
        {/* Suscripción al Newsletter (Tarjeta) */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white text-gray-800 rounded-3xl shadow-lg p-12 max-w-5/6 w-full -mt-28 flex flex-col md:flex-row justify-between items-center">
            {/* Textos del Newsletter */}
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-4 text-primary">
                Suscríbete a nuestro newsletter
              </h3>
              <p className="text-gray-600 mb-6">
                Recibe promociones únicas, cupones, sé el primero en probar
                nuestros nuevos paquetes, todo directo a tu correo electrónico.
              </p>
            </div>

            {/* Formulario del Newsletter */}
            <div className="md:w-1/2 flex justify-center">
              <div className="flex items-center w-full md:w-auto">
                <input
                  type="email"
                  placeholder="correo@gmail.com"
                  className="px-4 py-3 rounded-l-md text-gray-700 border border-gray-300 w-full md:w-3/3"
                />
                <button className="bg-primary text-white px-10 py-3 rounded-r-md hover:bg-blue-600 transition-colors duration-300">
                  ENVIAR
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Navegación */}
          <div>
            <h4 className="font-semibold mb-4">NAVEGACION</h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a href="#" className="hover:underline">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Destinos
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Paquetes de viaje
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Ofertas
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Destinos Populares */}
          <div>
            <h4 className="font-semibold mb-4">DESTINOS POPULARES</h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a href="#" className="hover:underline">
                  Cancún
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tulúm
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Chichén Itzá
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Volcán
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Bosque
                </a>
              </li>
            </ul>
          </div>

          {/* Actividades Populares */}
          <div>
            <h4 className="font-semibold mb-4">ACTIVIDADES POPULARES</h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a href="#" className="hover:underline">
                  Luna de miel
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Aventura
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Camping
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Fin de semana
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Playas
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Verano
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Semana Santa
                </a>
              </li>
            </ul>
          </div>

          {/* Información General */}
          <div>
            <h4 className="font-semibold mb-4">INFORMACION GENERAL</h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a href="#" className="hover:underline">
                  Quiénes somos
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Política de cancelación
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Forma de pago
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Políticas de reembolso
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">CONTACTO</h4>
            <div className="flex justify-start gap-2 items-center mb-3">
              <FaPhone></FaPhone>
              <p className="text-gray-200">+01 800 2599 12</p>
            </div>
            <div className="flex justify-start gap-2 items-center mb-3">
              <MdEmail />
              <p className="text-gray-200">contacto@vivavia.com</p>
            </div>
            <h4 className="font-semibold mb-4">MÉTODOS DE PAGO</h4>
            {/* Placeholder para métodos de pago */}
            <div className="p-2 rounded-md flex flex-col gap-4 justify-center items-start ">
              <Image
                src="/visa_logo.png"
                width={100}
                height={50}
                className="bg-white p-3"
              />
              <Image
                src="/mastercard.png"
                width={80}
                height={50}
                className="bg-white p-3"
              />
              <Image
                src="/paypal.png"
                width={100}
                height={50}
                className="bg-white p-3"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-200">
          {/* Derechos Reservados */}
          <div className="text-center md:text-left">
            <p>2024 VIVAVIA, todos los derechos reservados.</p>
          </div>

          {/* Redes Sociales */}
          <div className="mt-4 md:mt-0 text-center">
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-white hover:scale-110 duration-300 transition-all"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-white hover:scale-110 duration-300 transition-all"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-white hover:scale-110 duration-300 transition-all"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-white hover:scale-110 duration-300 transition-all"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
