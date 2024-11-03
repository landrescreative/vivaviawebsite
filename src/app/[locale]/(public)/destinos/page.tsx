import React from "react";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiDesert } from "react-icons/gi";
import { GiMountainRoad } from "react-icons/gi";
import { FaCity } from "react-icons/fa6";
import { GiCampingTent } from "react-icons/gi";
import { MdCastle } from "react-icons/md";
import { LiaUmbrellaBeachSolid } from "react-icons/lia";
import Ofertas from "@/app/ui/Ofertas";
import DestinosHero from "@/app/ui/DestinosHero";
import Banner from "@/app/ui/Banner";

const Page: React.FC = () => {
  return (
    <div className="overflow-x-hidden ">
      <DestinosHero />
      <Ofertas />
      <Banner />
      <Ofertas />
      <Ofertas />
    </div>
  );
};

export default Page;
