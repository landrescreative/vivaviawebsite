import React from "react";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiDesert } from "react-icons/gi";
import { GiMountainRoad } from "react-icons/gi";
import { FaCity } from "react-icons/fa6";
import { GiCampingTent } from "react-icons/gi";
import { MdCastle } from "react-icons/md";
import { LiaUmbrellaBeachSolid } from "react-icons/lia";
import Ofertas from "@/app/ui/Ofertas";

const DestinosHero: React.FC = () => {
  return (
    <div className="flex justify-evenly flex-col items-center min-h-screen relative">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center z-50 w-full text-white/80 mb-36">
          <h2 className="">TOP DESTINOS</h2>
          <h1 className="text-6xl font-bold drop-shadow-md drop uppercase">
            Cancún, Quintana Roo
          </h1>
        </div>
        <div className="absolute bottom-0 bg-slate-300/20 backdrop-blur-lg flex w-full py-3 text-white/80">
          <div className="flex w-5/6 mx-auto">
            <div className="flex justify-center items-center w-full flex-col hover:scale-110 transition-all duration-300 text-white cursor-pointer ">
              <FaUmbrellaBeach className="text-4xl my-1" />
              <h1 className="text-white">Playas</h1>
            </div>
            <div className="flex justify-center items-center w-full flex-col hover:scale-110 transition-all duration-300 text-white cursor-pointer ">
              <GiDesert className="text-4xl my-1" />
              <h1 className="text-white">Desiertos</h1>
            </div>
            <div className="flex justify-center items-center w-full flex-col hover:scale-110 transition-all duration-300 text-white cursor-pointer ">
              <GiMountainRoad className="text-4xl my-1" />
              <h1 className="text-white">Montañas</h1>
            </div>
            <div className="flex justify-center items-center w-full flex-col hover:scale-110 transition-all duration-300 text-white cursor-pointer ">
              <FaCity className="text-4xl my-1" />
              <h1 className="text-white">Ciudades</h1>
            </div>
            <div className="flex justify-center items-center w-full flex-col hover:scale-110 transition-all duration-300 text-white cursor-pointer ">
              <GiCampingTent className="text-4xl my-1" />
              <h1 className="text-white">Camping</h1>
            </div>
            <div className="flex justify-center items-center w-full flex-col hover:scale-110 transition-all duration-300 text-white cursor-pointer ">
              <MdCastle className="text-4xl my-1" />
              <h1 className="text-white">Castillos</h1>
            </div>
            <div className="flex justify-center items-center w-full flex-col hover:scale-110 transition-all duration-300 text-white cursor-pointer ">
              <LiaUmbrellaBeachSolid className="text-4xl my-1" />
              <h1 className="text-white">Tropical</h1>
            </div>
          </div>
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
          <source src="/playa.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default DestinosHero;
