import React from "react";
import { FaStar } from "react-icons/fa";

const RecentTravels: React.FC = () => {
  const travels = [
    {
      name: "Cancún",
      imgSrc: "/cancun.jpg",
      price: 200,
    },
    {
      name: "Tulum",
      imgSrc: "/tulum.jpg",
      price: 150,
    },
    {
      name: "Chichén Itzá",
      imgSrc: "/chichenitza.jpg",
      price: 100,
    },
    {
      name: "Los Cabos",
      imgSrc: "/cabos.jpg",
      price: 250,
    },
  ];

  return (
    <div className="p-6 text-center lg:w-5/6 m-auto">
      <h2 className="text-primary text-lg font-bold ">
        Los lugares mas populares de México
      </h2>
      <p className="  mb-8">
        Los paquetes mas seleccionados por nuestros seguidores
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {travels.map((travel) => (
          <div
            key={travel.name}
            className="relative overflow-hidden rounded-3xl"
          >
            <img
              src={travel.imgSrc}
              alt={travel.name}
              className="w-full h-80 object-cover rounded-3xl hover:scale-110 transition-transform duration-500"
            />
            <div className="stars absolute top-6 right-6 flex gap-1">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400 " />
              ))}
            </div>
            <h3 className="absolute bottom-6 left-3 text-white bg-slate-500/30 backdrop-blur-lg px-5 py-1 rounded-full z-10 text-base font-semibold">
              {travel.name}
            </h3>
            <div className="flex flex-col items-end justify-end  absolute bottom-6 right-2 text-white px-5 py-1 rounded-xl z-10 text-base font-semibold text-right backdrop-blur-md bg-slate-500/30">
              <span className="text-sm font-light">Desde</span>
              <span className="">${travel.price}MXN</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTravels;