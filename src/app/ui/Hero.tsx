"use client";
import React, { useEffect, useState, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

export default function Hero({ title, subtitle, button }) {
  const [fromDropdown, setFromDropdown] = useState(false);
  const [toDropdown, setToDropdown] = useState(false);

  return (
    <div className="flex flex-col w-full min-h-[100vh] justify-center items-center md:items-start relative overflow-hidden">
      <div className="main-text flex flex-col justify-center md:items-start items-center px-20">
        <h2 className="text-2xl text-center md:text-start text-white">
          {title}
        </h2>
        <h1 className="font-semibold text-4xl mb-2 text-center md:text-start text-white">
          {subtitle}
        </h1>
        <button className="px-12 py-3 w-fit bg-white text-black font-medium hover:scale-110 hover:bg-primary hover:text-white transition-all duration-300 ">
          {button}
        </button>
      </div>
      <div className="absolute bottom-3 left-3 flex flex-col">
        {/* <h1>¿Cúal será tu próxima aventura?</h1> */}
        <div className="tarjeta flex gap-3 bg-white/60 p-3 md:p-4 rounded-lg backdrop-blur-md">
          <div
            className="bg-white text-black py-4 px-8 rounded-lg relative absolute cursor-pointer hidden md:block"
            onClick={() => setFromDropdown(!fromDropdown)}
          >
            <span className="text-sm text-gray-600">Desde</span>
            <h1>Ciudad de México, México</h1>
            <div className="p-[5px] rounded-full bg-primary z-10 text-white absolute -right-[18px] top-1/3 hidden md:block ">
              <IoIosArrowForward className=""></IoIosArrowForward>
            </div>
            <div
              className={`absolute mt-2 right-0 -top-60 w-full bg-primary  rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
                fromDropdown
                  ? "opacity-100 translate-y-0"
                  : "hidden opacity-0 -translate-y-5"
              }`}
            >
              <ul className="text-white font-bold flex flex-col">
                <li className="px-4 py-4 hover:bg-blue-900 cursor-pointer">
                  Mexico
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
            </div>
          </div>
          <div
            className="bg-white text-black py-4 px-8 rounded-lg relative cursor-pointer"
            onClick={() => setToDropdown(!toDropdown)}
          >
            <span className="text-sm text-gray-600">Hacia</span>
            <h1>Cancún, Quintana Roo</h1>

            <div className="p-[5px] rounded-full bg-primary z-10 text-white absolute -right-[18px] top-1/3 hidden md:block  ">
              <IoIosArrowForward className=""></IoIosArrowForward>
            </div>
            <div
              className={`absolute mt-2 right-0 -top-60 w-full bg-primary rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
                toDropdown
                  ? "opacity-100 translate-y-0"
                  : "hidden opacity-0 -translate-y-5"
              }`}
            >
              <ul className="text-white font-bold flex flex-col">
                <li className="px-4 py-4 hover:bg-blue-900 cursor-pointer">
                  Mexico
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
            </div>
          </div>
          <div className="bg-white text-black py-4 px-8 rounded-lg hidden md:block">
            <span className="text-sm text-gray-600">Fecha</span>
            <h1>12 / Julio / 2024</h1>
          </div>
          <button className="px-8 bg-primary rounded-lg hover:scale-105 transition-all duration-300 text-white">
            <FaSearch></FaSearch>
          </button>
        </div>
      </div>
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
