import React from "react";
import { motion } from "framer-motion";
import { FaFlag } from "react-icons/fa";
import Link from "next/link"; // Importar Link de Next.js
import { useTranslations } from "next-intl";

interface QuickGuideCardProps {
  title: string;
  description: string;
  redirectUrl: string; // URL de redirección
}

const QuickGuideCard: React.FC<QuickGuideCardProps> = ({
  title,
  description,
  redirectUrl,
}) => {
  const t = useTranslations("quickGuideCard"); // Carga las traducciones específicas

  // Variants de animación
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="relative bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Contenedor del Icono */}
      <div className="w-14 h-14 flex items-center justify-center bg-primary text-white rounded-full shadow-lg">
        <FaFlag size={24} />
      </div>

      {/* Contenido */}
      <h2 className="mt-6 text-lg font-semibold text-gray-800">{title}</h2>
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Botón de Acción */}
      <Link
        className="mt-4 inline-block px-4 py-2 bg-primary text-white rounded-md shadow hover:bg-primary-dark transition-all"
        href={redirectUrl}
        passHref
      >
        {t("buttonText")}
      </Link>

      {/* Decoración en la Esquina */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-bl-lg"></div>
    </motion.div>
  );
};

export default QuickGuideCard;
