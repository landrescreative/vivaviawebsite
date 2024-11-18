"use client";

import React from "react";
import { IoLocationOutline, IoFastFood } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { RiHotelLine } from "react-icons/ri";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("tarjetaOferta");

  return (
    <div className="tarjeta-oferta flex flex-col bg-gray-50 shadow-lg shadow-black/20 mb-10 rounded-3xl min-w-[300px] md:min-w-[362px]">
      {/* Imagen de la oferta */}
      <div className="w-full h-80 overflow-hidden rounded-t-3xl">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-t-3xl hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="tarjeta-oferta__content py-8 px-8 flex flex-col rounded-3xl">
        {/* Encabezado */}
        <div className="flex justify-around items-center">
          <IoLocationOutline size={24} className="text-primary mr-1" />
          <h2 className="text-lg font-bold">{title}</h2>
          <div className="flex text-yellow-500 flex-grow justify-end">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
          </div>
        </div>

        {/* Descripción */}
        <p className="text-start text-gray-500">{description}</p>

        {/* Iconos de beneficios */}
        <div className="icons flex gap-7 mb-2 mt-3">
          <div className="flex justify-center items-center flex-col">
            <RiHotelLine size={24} className="text-blue-500/80" />
            <span>{t("benefits.hotel")}</span>
          </div>
          <div className="flex justify-center items-center flex-col">
            <IoFastFood size={24} className="text-blue-500/80" />
            <span>{t("benefits.meals")}</span>
          </div>
          <div className="flex justify-center items-center flex-col">
            <RiHotelLine size={24} className="text-blue-500/80" />
            <span>{t("benefits.tours")}</span>
          </div>
        </div>

        {/* Lista de beneficios */}
        <ul className="tarjeta-oferta__benefits my-6 text-start">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>

        {/* Botón y precio */}
        <div className="flex">
          <button className="text-start rounded-full text-white bg-primary py-2 px-5">
            {t("detailsButton")}
          </button>
          <p className="flex-grow text-end">
            {t("from")}{" "}
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
