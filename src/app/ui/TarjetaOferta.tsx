import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { RiHotelLine } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";

interface TarjetaOfertaProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  benefits?: string[];
}

const TarjetaOferta: React.FC<TarjetaOfertaProps> = ({
  title,
  description,
  price,
  imageUrl,
  benefits = [],
}) => {
  return (
    <div className="tarjeta-oferta flex flex-col bg-gray-50 shadow-2xl shadow-black/20 mb-10 rounded-3xl min-w-[300px] md:min-w-[362px]">
      <div className="w-full h-80 overflow-hidden rounded-t-3xl">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-t-3xl hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="tarjeta-oferta__content py-8 px-8 flex flex-col rounded-3xl">
        <div className="flex justify-around items-center ">
          <IoLocationOutline
            size={24}
            color="primary"
            className="text-primary mr-1"
          />
          <h2 className="text-lg font-bold">{title}</h2>
          <div className="flex text-yellow-500 flex-grow justify-end">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
          </div>
        </div>
        <p className="text-start text-gray-500">{description}</p>
        <div className="icons flex gap-7 mb-2 mt-3">
          <div className="flex justify-center items-center flex-col">
            <RiHotelLine size={24} className="text-blue-500/80" />
            <span>Hotel</span>
          </div>
          <div className="flex justify-center items-center flex-col">
            <IoFastFood size={24} className="text-blue-500/80" />
            <span>Comidas</span>
          </div>
          <div className="flex justify-center items-center flex-col">
            <RiHotelLine size={24} className="text-blue-500/80" />
            <span>Tours</span>
          </div>
        </div>
        <ul className="tarjeta-oferta__benefits my-6 text-start">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        <div className="flex ">
          <button className="text-start rounded-full text-white bg-primary py-2 px-5">
            VER DETALLES
          </button>
          <p className="flex-grow text-end">
            desde{" "}
            <span className="text-primary font-bold text-xl">
              ${price.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TarjetaOferta;
