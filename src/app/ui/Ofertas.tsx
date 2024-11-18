"use client";

import React from "react";
import TarjetaOferta from "./TarjetaOferta";
import { useTranslations } from "next-intl";

type Offer = {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  benefits: string[];
};

const Ofertas: React.FC = () => {
  const t = useTranslations("offers");

  // Carga las ofertas desde las traducciones
  const offers: Offer[] = t.raw("offersList");

  return (
    <div className="p-6 text-center w-full lg:w-5/6 flex flex-col gap-5 mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-primary">{t("title")}</h2>
        <p className="mb-8">{t("description")}</p>
      </div>
      <div className="flex gap-5 flex-nowrap overflow-x-auto items-center px-5">
        {offers.map((offer, index) => (
          <TarjetaOferta
            key={index}
            title={offer.title}
            description={offer.description}
            price={offer.price}
            imageUrl={offer.imageUrl}
            benefits={offer.benefits}
          />
        ))}
      </div>
    </div>
  );
};

export default Ofertas;
