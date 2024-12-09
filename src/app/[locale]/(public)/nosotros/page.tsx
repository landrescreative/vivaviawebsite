"use client";
import ExploraMundo from "@/app/ui/ExploraMundo";
import NuestraHistoria from "@/app/ui/NuestraHistoria";
import Ofertas from "@/app/ui/Ofertas";
import ReviewsSection from "@/app/ui/ReviewSection";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdArrowDown } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Page: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const calculateParallax = (offsetX: number, offsetY: number) => {
    return {
      transform: `translate(${mousePosition.x * offsetX * 5}px, ${
        mousePosition.y * offsetY * 5
      }px)`,
    };
  };

  return (
    <div className="outer-container" onMouseMove={handleMouseMove}>
      <ExploraMundo />
      <NuestraHistoria />

      <div className="visionseccion flex flex-col md:flex-row  mb-24">
        <div className=" w-2/4">
          <Image
            src="/tulum.jpg"
            alt="Decorative Image 4"
            width={1920}
            height={1080}
            className="w-full h-full aspect-video object-cover "
          ></Image>
        </div>
        <div className=" w-2/4 flex justify-center flex-col bg-white items-center p-20">
          <div className="flex flex-col justify-center ">
            <span className="font-black text-primary text-lg">
              NUESTRA VISION ---
            </span>
            <h1 className="text-4xl  font-semibold text-black">
              Nuestra Vision, Nuestro Compromiso, Tu Experiencia.
            </h1>
            <p className=" mt-2 text-lg text-slate-700">
              Nuestra visión es convertirnos en la agencia de viajes líder en el
              mundo, ofreciendo experiencias únicas y personalizadas a cada uno
              de nuestros clientes. Estamos comprometidos a brindarte un
              servicio excepcional y a superar tus expectativas en cada viaje
              que hagas con nosotros.
            </p>
            <button className="bg-primary flex text-white px-8 py-2 mt-6 rounded-full w-fit">
              CONTÁCTANOS
              <MdKeyboardDoubleArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
      <Ofertas />
      <ReviewsSection />
    </div>
  );
};

export default Page;
