import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Page: React.FC = () => {
  const blogPosts = [
    {
      category: "Aventuras en la Montaña",
      date: "10 de Agosto 2024",
      title:
        "Explora las mejores rutas de senderismo y aventuras en la montaña",
      image: "/paisaje.jpg",
    },
    {
      category: "Playas Paradisíacas",
      date: "15 de Septiembre 2024",
      title: "Descubre las playas más hermosas y tranquilas para relajarte",
      image: "/paisaje.jpg",
    },
    {
      category: "Ciudades Históricas",
      date: "20 de Octubre 2024",
      title: "Sumérgete en la historia y cultura de las ciudades más antiguas",
      image: "/paisaje.jpg",
    },
    {
      category: "Gastronomía Local",
      date: "25 de Noviembre 2024",
      title: "Prueba los platos más deliciosos y tradicionales de cada región",
      image: "/paisaje.jpg",
    },
    {
      category: "Escapadas Románticas",
      date: "30 de Diciembre 2024",
      title: "Encuentra los destinos más románticos para disfrutar en pareja",
      image: "/paisaje.jpg",
    },
    {
      category: "Aventura en la Selva",
      date: "05 de Enero 2025",
      title: "Adéntrate en la selva y descubre su flora y fauna exótica",
      image: "/paisaje.jpg",
    },
    {
      category: "Viajes en Familia",
      date: "10 de Febrero 2025",
      title: "Los mejores destinos para disfrutar con toda la familia",
      image: "/paisaje.jpg",
    },
    {
      category: "Destinos Exóticos",
      date: "15 de Marzo 2025",
      title: "Explora los lugares más exóticos y sorprendentes del mundo",
      image: "/paisaje.jpg",
    },
    {
      category: "Turismo de Aventura",
      date: "20 de Abril 2025",
      title: "Vive experiencias llenas de adrenalina y aventura",
      image: "/paisaje.jpg",
    },
    {
      category: "Rutas en Bicicleta",
      date: "25 de Mayo 2025",
      title: "Descubre las mejores rutas para recorrer en bicicleta",
      image: "/paisaje.jpg",
    },
    {
      category: "Escapadas de Fin de Semana",
      date: "30 de Junio 2025",
      title: "Los mejores destinos para una escapada rápida de fin de semana",
      image: "/paisaje.jpg",
    },
    {
      category: "Turismo Cultural",
      date: "05 de Julio 2025",
      title: "Sumérgete en la cultura y tradiciones de diferentes lugares",
      image: "/paisaje.jpg",
    },
  ];

  return (
    <div className="flex flex-col px-5 md:px-0">
      <div className="flex flex-col lg:w-5/6 mx-auto mt-20 md:mt-36">
        <h1 className="text-4xl text-primary">Blogs y articulos</h1>
        <p>Encuentra los mejores articulos y blogs de viajes</p>
        <div className="rounded-3xl overflow-hidden mt-8 relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/paisaje.mp4" type="video/mp4" />
          </video>
          <div className="absolute z-20 w-full h-full top-0 flex justify-center items-center">
            <h1 className="text-white text-7xl font-bold uppercase">Blogs</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between lg:w-5/6 mx-auto mt-12">
        <div>
          <h1 className="text-4xl text-primary">Ultimos Articulos</h1>
          <p>
            Descubre nuestros últimos artículos sobre viajes, consejos y
            destinos recomendados.
          </p>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full p-2 border border-gray-300 rounded-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 lg:w-5/6 mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden text-sm md:text-md mb-8 relative card-blog cursor-pointer"
          >
            <div className="absolute p-2 z-20 bg-white text-black rounded-full top-4 right-4 card-icon">
              <MdArrowOutward size={24} />
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 object-cover  card-img"
              />
            </div>
            <div className="py-3">
              <div className="flex justify-between items-center">
                <h2 className="text-md uppercase font-bold text-gray-800">
                  {post.category}
                </h2>
                <p className="text-gray-500">{post.date}</p>
              </div>
              <p className="text-gray-600 mt-2">{post.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
