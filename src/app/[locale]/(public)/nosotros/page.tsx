"use client";
import ExploraMundo from "@/app/ui/ExploraMundo";
import NuestraHistoria from "@/app/ui/NuestraHistoria";
import Ofertas from "@/app/ui/Ofertas";
import ReviewsSection from "@/app/ui/ReviewSection";
import VisionSeccion from "@/app/ui/VisionSeccion";
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
      <VisionSeccion />
      <Ofertas />
      <ReviewsSection />
    </div>
  );
};

export default Page;
