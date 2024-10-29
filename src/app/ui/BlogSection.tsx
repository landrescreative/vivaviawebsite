"use client";

import React from "react";

const BlogSection = () => {
  const blogContent = {
    title: "Revisa nuestro Blog",
    description:
      "Visita nuestro blog para obtener consejos útiles, guías de viaje y todo lo que necesitas para planificar tu próxima aventura.",
    posts: [
      {
        date: "07 JULIO 2024",
        title:
          "Descubre la Magia de Tailandia: Un Destino de Ensueño para Todo Tipo de Viajero",
        description:
          "Una imagen de una maleta abierta con objetos esenciales para viajar, como una guía de viaje, adaptadores de enchufe, pasaporte, y una cámara. Alternativamente, una foto de un avión despegando o una vista aérea de una ciudad internacional podría transmitir la emoción de viajar al extranjero.",
        image: "/tarjeta blog.png",
        alt: "Tendencias en Desarrollo Web",
      },
      {
        date: "07 JULIO 2024",
        title: "Cómo Ahorrar Dinero Durante tus Viajes: Estrategias y Trucos",
        description:
          "Viajar no tiene que romper el banco. Aprende cómo puedes ahorrar en alojamiento, comidas y actividades sin sacrificar la calidad de tu experiencia. Con estos trucos y estrategias, podrás disfrutar de tus destinos favoritos mientras mantienes tu presupuesto bajo control.",
        image: "/tarjetablog2.png",
        alt: "Mejorar la UX",
      },
    ],
    buttonText: "Ver más",
  };

  return (
    <div className="py-8 lg:w-5/6 mx-auto min-h-screen flex flex-col justify-center items-center">
      {/* Título y Párrafo */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-primary">{blogContent.title}</h2>
        <p className="text-lg text-gray-600">{blogContent.description}</p>
      </div>

      {/* Tarjetas de blog */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogContent.posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-72 overflow-hidden">
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">{post.date}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {post.title}
              </h3>
              <p className="text-gray-600">{post.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botón Ver Más */}
      <div className="mt-8 text-center">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
          {blogContent.buttonText}
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
