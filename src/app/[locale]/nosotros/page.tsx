import Image from "next/image";
import React from "react";
import { IoMdArrowDown } from "react-icons/io";

const Page: React.FC = () => {
  return (
    <div className="outer-container">
      <div className="bg-gray-100 min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 text-center relative">
          <div className="relative">
            <img
              src="/paisaje.jpg"
              alt="Decorative Image 1"
              className="absolute animate-bounce top-60 md:top-44 left-0 w-1/4 md:w-1/6 h-auto aspect-[4/3] object-cover rounded-2xl"
            />
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold uppercase text-primary mb-4">
                Explora el mundo con Vivavía
              </h1>
              <p className="text-xl md:text-2xl">
                Descubre la pasión y el compromiso detrás de Vivavia
              </p>
            </div>
            <img
              src="/paisaje.jpg"
              alt="Decorative Image 2"
              className="absolute animate-bounce bottom-60 md:bottom-44 right-0 w-1/4 md:w-1/6 h-auto aspect-[4/3] object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="absolute bottom-28 border-2 p-1 border-black/50 rounded-full animate-bounce left-[50]">
          <IoMdArrowDown size={24} />
        </div>
      </div>
      <div className="history flex flex-col px-4 md:w-4/6 mx-auto">
        <p className="text-center my-4">
          Vivavia nació de la pasión y el entusiasmo de un equipo de expertos en
          viajes que compartían un sueño común: ayudar a otros a descubrir el
          mundo de manera auténtica y significativa. Aunque somos una agencia
          nueva, estamos comprometidos a ofrecer experiencias inolvidables y a
          construir relaciones duraderas con nuestros clientes.
        </p>
      </div>
      <div className="flex px-4 md:w-5/6 mx-auto mt-10 ">
        <Image
          src="/paisaje.jpg"
          alt="Decorative Image 3"
          width={1920}
          height={1080}
          className="w-full aspect-video object-cover rounded-3xl"
        />
      </div>
      <div className="history flex flex-col px-4 md:w-4/6 mx-auto">
        <h1 className="text-4xl text-primary text-center mt-10 mb-2 font-bold">
          Nuestra Misión
        </h1>
        <p className="text-center ">
          Aspiramos a ser reconocidos como la agencia de viajes más confiable y
          preferida por nuestros clientes, gracias a nuestro compromiso con la
          calidad, la innovación y la atención al detalle.
        </p>
      </div>
      <div className="visionseccion flex px-4 md:w-5/6 mx-auto justify-between mt-8 mb-24">
        <div className="w-5/12">
          <Image
            src="/paisaje.jpg"
            alt="Decorative Image 4"
            width={1920}
            height={1080}
            className="w-full aspect-video object-cover rounded-3xl"
          ></Image>
        </div>
        <div className="w-6/12 flex justify-center items-center">
          <ul className="list-disc ">
            <li>
              <p>
                <span className="font-bold">Compromiso:</span> Nos dedicamos a
                proporcionar un servicio excepcional y a estar contigo en cada
                paso del camino.
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">Calidad:</span> Trabajamos con los
                mejores proveedores y seleccionamos cuidadosamente cada destino
                y experiencia para garantizar que tu viaje sea de la más alta
                calidad.
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">Transparencia:</span> Creemos en la
                honestidad y la claridad. Siempre te proporcionaremos
                información completa y precisa sobre tus opciones de viaje.
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">Innovacion:</span> Nos mantenemos a
                la vanguardia de las tendencias en viajes para ofrecerte las
                experiencias más novedosas y emocionantes.
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">Pasion:</span> Nos apasionan los
                viajes y nos enorgullece compartir nuestra pasión contigo. Cada
                miembro de nuestro equipo está comprometido a hacer que tu viaje
                sea inolvidable.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
