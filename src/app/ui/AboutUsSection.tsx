"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import throttle from "lodash/throttle";
import { useTranslations } from "next-intl";

type Section = {
  title: string;
  text: string;
  img: string;
};

const ScrollSection: React.FC<{
  section: Section;
  progress: number;
  index: number;
  total: number;
}> = ({ section, progress, index, total }) => {
  const isComplete = progress >= ((index + 1) / total) * 100;
  const controls = useAnimation();
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  // Detecta cuándo la sección está en el viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    if (ref) observer.observe(ref);
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, controls]);

  return (
    <motion.div
      ref={setRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10"
    >
      {/* Imagen */}
      <Image
        src={`/${section.img}`}
        alt={section.title}
        width={1336}
        height={838}
        placeholder="blur"
        blurDataURL="/placeholder.jpg"
        className="w-full lg:w-2/4 p-4 lg:p-24 object-cover"
      />

      {/* Círculo de progreso */}
      <div className="relative hidden lg:flex">
        <div className="absolute top-1/2 transform -translate-y-1/2 bg-gray-300 w-8 h-8 rounded-full flex justify-center items-center z-10 -left-14">
          <motion.div
            className={`${
              isComplete ? "bg-blue-500" : "bg-white"
            } w-4 h-4 rounded-full`}
            initial={{ scale: 0.8 }}
            animate={{ scale: isComplete ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Texto */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-primary">
          {section.title}
        </h2>
        <p className="text-lg">{section.text}</p>
      </div>
    </motion.div>
  );
};

const ProgresoScroll: React.FC = () => {
  const t = useTranslations("progresoScroll"); // Hook para traducciones
  const sections: Section[] = t.raw("sections"); // Carga las secciones traducidas
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      setScrollProgress((scrollPosition / totalHeight) * 100);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="relative p-4 lg:p-10">
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 hidden lg:block"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={scrollProgress}
        aria-label="Progreso de desplazamiento"
      >
        <motion.div
          className="bg-blue-500 w-full absolute left-0 top-0"
          style={{ height: `${scrollProgress}%` }}
          initial={{ height: 0 }}
          animate={{ height: `${scrollProgress}%` }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>

      {/* Secciones con imagen y texto */}
      <div className="flex flex-col items-center justify-center gap-10 lg:gap-20 p-4 lg:p-10 z-10 relative">
        {sections.map((section, index) => (
          <ScrollSection
            key={index}
            section={section}
            progress={scrollProgress}
            index={index}
            total={sections.length}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgresoScroll;
