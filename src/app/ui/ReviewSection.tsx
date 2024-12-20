"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ReviewsSection: React.FC = () => {
  const t = useTranslations("reviewsSection");
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
    <div className="py-12 lg:w-5/6 mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-primary">{t("title")}</h2>
        <p className="text-lg text-gray-600 mt-1">{t("description")}</p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {reviews.map((review: any) => (
          <motion.div
            key={review.name}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 border border-gray-200"
            variants={cardVariants}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
              </div>
              <p className="text-gray-700 italic mb-6 line-clamp-4">
                "{review.review}"
              </p>
              <div className="flex items-center">
                <Image
                  src={review.image}
                  alt={`Perfil de ${review.name}`}
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-primary"
                  placeholder="blur"
                  blurDataURL="/placeholder.jpg"
                />
                <div className="ml-4">
                  <p className="font-bold text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.position}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ReviewsSection;
