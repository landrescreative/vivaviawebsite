"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUmbrellaBeach,
  FaCity,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import { GiDesert, GiMountainRoad, GiCampingTent } from "react-icons/gi";
import { MdCastle } from "react-icons/md";
import { LiaUmbrellaBeachSolid } from "react-icons/lia";
import { useTranslations } from "next-intl";

interface Destination {
  id: string;
  video: string;
  audio: string;
}

const destinations: Destination[] = [
  {
    id: "playas",
    video: "/playa.mp4",
    audio: "/playa.wav",
  },
  {
    id: "desiertos",
    video: "/desierto.mp4",
    audio: "/desierto.wav",
  },
  {
    id: "montañas",
    video: "/montaña.mp4",
    audio: "/montaña.wav",
  },
  {
    id: "ciudades",
    video: "/ciudad.mp4",
    audio: "/ciudad.wav",
  },
  {
    id: "camping",
    video: "/camping.mp4",
    audio: "/camping.wav",
  },
  {
    id: "castillos",
    video: "/castillo.mp4",
    audio: "/montaña.wav",
  },
  {
    id: "tropical",
    video: "/tropical.mp4",
    audio: "/playa.wav",
  },
];

const DestinosHero: React.FC = () => {
  const t = useTranslations("destinos");
  const buttonTranslations = useTranslations("buttons");
  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleSelection = (id: string) => {
    const destination = destinations.find((dest) => dest.id === id);
    if (destination) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedDestination(destination);
        setIsTransitioning(false);

        if (audioRef.current) {
          audioRef.current.src = destination.audio;
          if (isPlaying) {
            audioRef.current.play();
          }
        }
      }, 800); // Match the transition duration
    }
  };

  const handleAudioToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex justify-evenly flex-col items-center min-h-screen relative">
      {/* Reproductor de audio oculto */}
      <audio ref={audioRef} src={selectedDestination.audio} autoPlay loop />

      {/* Botón de música */}
      <motion.button
        onClick={handleAudioToggle}
        className="absolute bottom-44 md:bottom-28 right-5 p-4 bg-white text-blue-500 font-semibold rounded-full shadow hover:bg-gray-200 transition flex items-center justify-center"
      >
        {isPlaying ? (
          <FaVolumeUp className="text-2xl" />
        ) : (
          <FaVolumeMute className="text-2xl" />
        )}
      </motion.button>

      <div className="w-full flex flex-col justify-center items-center">
        <AnimatePresence mode="wait">
          {!isTransitioning && (
            <motion.div
              className="flex flex-col justify-center text-center items-center z-10 w-full text-white/80 mb-36"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 className="text-2xl uppercase font-semibold">
                {t(`${selectedDestination.id}.title`)}
              </motion.h2>
              <motion.h1 className="text-7xl uppercase font-bold drop-shadow-md">
                {t(`${selectedDestination.id}.location`)}
              </motion.h1>
              <motion.button className="mt-8 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-blue-600 transition-colors">
                {buttonTranslations("learn_more", {
                  location: t(`${selectedDestination.id}.location`),
                })}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Iconos de selección */}
        <div className="absolute bottom-0 bg-slate-300/20 backdrop-blur-lg flex w-full py-3 text-white/80">
          <div className="flex md:w-5/6 mx-auto flex-wrap md:flex-nowrap">
            {destinations.map((destination) => (
              <motion.div
                key={destination.id}
                className="flex justify-center items-center w-1/4 md:w-full flex-col cursor-pointer"
                onClick={() => handleSelection(destination.id)}
              >
                {getIcon(destination.id)}
                <h1 className="text-white text-xs md:text-base">
                  {t(`${destination.id}.title`)}
                </h1>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fondo dinámico con animación */}
      <motion.div
        className="w-screen h-screen absolute -z-10 top-0 left-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          key={selectedDestination.video}
        >
          <source src={selectedDestination.video} type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlay negro para la transición */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="absolute inset-0 bg-black z-20"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            transition={{ duration: 0.8 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const getIcon = (id: string) => {
  switch (id) {
    case "playas":
      return <FaUmbrellaBeach className="text-3xl md:text-4xl my-1" />;
    case "desiertos":
      return <GiDesert className="text-3xl md:text-4xl my-1" />;
    case "montañas":
      return <GiMountainRoad className="text-3xl md:text-4xl my-1" />;
    case "ciudades":
      return <FaCity className="text-3xl md:text-4xl my-1" />;
    case "camping":
      return <GiCampingTent className="text-3xl md:text-4xl my-1" />;
    case "castillos":
      return <MdCastle className="text-3xl md:text-4xl my-1" />;
    case "tropical":
      return <LiaUmbrellaBeachSolid className="text-3xl md:text-4xl my-1" />;
    default:
      return null;
  }
};

export default DestinosHero;
