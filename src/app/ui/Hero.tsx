import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex flex-col w-full min-h-[88vh] justify-center items-start relative">
      <div className="main-text px-20">
        <h2 className="text-xl">Descubre</h2>
        <h1 className="font-semibold text-2xl mb-2">
          NUEVAS EXPERIENCIAS DE VIAJE
        </h1>
        <button className="px-10 py-2 bg-white text-black font-medium ">
          VER MAS
        </button>
      </div>
      <div className="absolute bottom-3 left-3 flex flex-col  ">
        {/* <h1>¿Cúal será tu próxima aventura?</h1> */}
        <div className="tarjeta flex gap-3 bg-white/35 p-4 rounded-lg backdrop-blur-md">
          <div className="bg-gray-300 text-black py-4 px-5 rounded-lg relative">
            <span className="text-sm text-gray-600">Desde</span>
            <h1>Ciudad de México, México</h1>
            <div className="p-[5px] rounded-full bg-primary z-10 text-white absolute -right-[18px] top-1/3">
              <IoIosArrowForward className=""></IoIosArrowForward>
            </div>
          </div>
          <div className="bg-gray-300 text-black py-4 px-5 rounded-lg relative">
            <span className="text-sm text-gray-600">Hacia</span>
            <h1>Cancún, Quintana Roo</h1>

            <div className="p-[5px] rounded-full bg-primary z-10 text-white absolute -right-[18px] top-1/3">
              <IoIosArrowForward className=""></IoIosArrowForward>
            </div>
          </div>
          <div className="bg-gray-300 text-black py-4 px-5 rounded-lg">
            <span className="text-sm text-gray-600">Fecha</span>
            <h1>12 / Julio / 2024</h1>
          </div>
          <button className="px-8 bg-primary rounded-lg hover:scale-105 transition-all duration-300">
            <FaSearch></FaSearch>
          </button>
        </div>
      </div>
      <div className="w-screen fixed -z-10">
        <video autoPlay loop muted className="w-screen top-14 right-0 ">
          <source src="/paisaje.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
