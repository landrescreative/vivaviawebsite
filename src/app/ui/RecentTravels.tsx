"use client";

import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useTranslations } from "next-intl";

type Destination = {
  name: string;
  imgSrc: string;
  price: number;
  alt: string;
};

const DestinationCard: React.FC<Destination> = ({
  name,
  imgSrc,
  price,
  alt,
}) => {
  const t = useTranslations("recentTravels");

  return (
    <div className="relative overflow-hidden rounded-3xl">
      <Image
        src={imgSrc}
        alt={alt}
        width={400}
        height={320}
        className="w-full h-80 object-cover rounded-3xl hover:scale-110 transition-transform duration-500"
        placeholder="blur"
        blurDataURL="/placeholder.jpg"
        priority
      />
      <div className="stars absolute top-6 right-6 flex gap-1">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="text-yellow-400" />
        ))}
      </div>
      <h3 className="absolute bottom-6 left-3 text-white bg-slate-500/30 backdrop-blur-lg px-5 py-1 rounded-full z-10 text-base font-semibold">
        {name}
      </h3>
      <div className="flex flex-col items-end justify-end absolute bottom-6 right-2 text-white px-5 py-1 rounded-xl z-10 text-base font-semibold text-right backdrop-blur-md bg-slate-500/30">
        <span className="text-sm font-light">{t("from")}</span>
        <span>${price} MXN</span>
      </div>
    </div>
  );
};

const RecentTravels: React.FC = () => {
  const t = useTranslations("recentTravels");
  const destinations: Destination[] = t.raw("destinations");

  return (
    <div className="p-6 text-center lg:w-5/6 m-auto">
      <h2 className="text-primary text-lg font-bold">{t("title")}</h2>
      <p className="mb-8">{t("description")}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.name}
            name={destination.name}
            imgSrc={destination.imgSrc}
            price={destination.price}
            alt={destination.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTravels;
