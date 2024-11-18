"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ReviewsSection: React.FC = () => {
  const t = useTranslations("reviewsSection");

  // Cargamos las reseñas desde las traducciones
  const reviews = t.raw("reviews");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="py-8 lg:w-5/6 mx-auto">
      {/* Título y Párrafo */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-primary">{t("title")}</h2>
        <p className="text-lg text-gray-600">{t("description")}</p>
      </div>

      {/* Tarjetas de reviews */}
      <motion.div
        className="bg-white rounded-3xl shadow-2xl shadow-black/20 p-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {reviews.map((review: any) => (
            <motion.div
              key={review.name}
              className="flex-1 p-8"
              variants={cardVariants}
            >
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
                <Image
                  src={review.image}
                  alt={`Perfil de ${review.name}`}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-primary"
                  placeholder="blur"
                  blurDataURL="/placeholder.jpg"
                />
                <div className="ml-4">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ReviewsSection;
