import React from "react";
import TarjetaOferta from "./TarjetaOferta";

const Ofertas: React.FC = () => {
  return (
    <div className="p-6 text-center w-full lg:w-5/6 flex flex-col gap-5 mx-auto ">
      <div>
        <h2 className=" text-3xl  ">
          Ahorra mas en tus vacaciones con nuestros{" "}
          <strong className="text-primary">paquetes</strong>
        </h2>
        <p className="mb-8">
          Descubre nuestras ofertas exclusivas para tus próximas vacaciones
        </p>
      </div>
      <div className="flex gap-5 flex-nowrap overflow-x-auto justify-start items-center">
        <TarjetaOferta
          title="Chichen Itza"
          description="4 dias, 5 noches"
          price={100}
          imageUrl="/chichenitza.jpg"
          benefits={["Desayuno incluido", "Transporte", "Guia turistico"]}
        />
        <TarjetaOferta
          title="Tulum"
          description="3 dias, 4 noches"
          price={200}
          imageUrl="/tulum.jpg"
          benefits={["Desayuno incluido", "Transporte", "Guia turistico"]}
        />
        <TarjetaOferta
          title="Cancun"
          description="5 dias, 6 noches"
          price={300}
          imageUrl="/cancun.jpg"
          benefits={["Desayuno incluido", "Transporte", "Guia turistico"]}
        />
        <TarjetaOferta
          title="Los Cabos"
          description="6 dias, 7 noches"
          price={400}
          imageUrl="/cabos.jpg"
          benefits={["Desayuno incluido", "Transporte", "Guia turistico"]}
        />
      </div>
    </div>
  );
};

export default Ofertas;
