"use client";

import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewsSection = () => {
  // JSON con las reviews
  const reviews = [
    {
      id: 1,
      name: "Juan Pérez",
      position: "Gerente de Ventas",
      review:
        "Increíble servicio, el equipo fue muy profesional y atento. Superaron todas nuestras expectativas.",
      image: "/25.jpg",
    },
    {
      id: 2,
      name: "Ana López",
      position: "Directora de Marketing",
      review:
        "Trabajar con ellos fue una experiencia fantástica. La calidad del producto fue sobresaliente.",
      image: "80.jpg",
    },
    {
      id: 3,
      name: "Carlos García",
      position: "Jefe de Tecnología",
      review:
        "Excelente atención al cliente. Los recomendaría sin dudarlo para cualquier tipo de proyecto.",
      image: "58.jpg",
    },
  ];

  return (
    <div className="py-8 lg:w-5/6 mx-auto">
      {/* Título y Párrafo */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-primary">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-lg text-gray-600">
          Estas son algunas de las opiniones de nuestros clientes sobre nuestros
          servicios.
        </p>
      </div>

      {/* Tarjeta de reviews */}
      <div className="bg-white rounded-3xl shadow-2xl shadow-black/20 p-2">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {reviews.map((review) => (
            <div key={review.id} className="flex-1 p-8">
              {/* Estrellas */}
              <div className="flex items-center mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
              </div>
              {/* Texto de la review */}
              <p className="text-gray-600 mb-4">"{review.review}"</p>
              {/* Información del perfil */}
              <div className="flex items-center">
                <img
                  src={review.image}
                  alt={`Perfil de ${review.name}`}
                  className="w-10 h-10 rounded-full mr-4 border-2 border-primary"
                />
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
