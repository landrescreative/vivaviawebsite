import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

const VisionSeccion = () => {
  const t = useTranslations("vision");

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="visionseccion flex flex-col md:flex-row mb-16 md:mb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Imagen */}
      <motion.div
        className="w-full md:w-1/2 h-60 md:h-auto"
        variants={childVariants}
      >
        <Image
          src="/tulum.jpg"
          alt={t("imageAlt")}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Contenido */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center flex-col bg-white items-center p-6 md:p-12 lg:p-20"
        variants={childVariants}
      >
        <motion.div
          className="flex flex-col justify-center text-center md:text-left"
          variants={childVariants}
        >
          {/* Subtítulo */}
          <motion.span
            className="font-black text-primary text-sm md:text-lg uppercase"
            variants={childVariants}
          >
            {t("subtitle")}
          </motion.span>

          {/* Título */}
          <motion.h1
            className="text-2xl md:text-4xl font-semibold text-black mt-4"
            variants={childVariants}
          >
            {t("title")}
          </motion.h1>

          {/* Descripción */}
          <motion.p
            className="mt-4 text-sm md:text-lg text-slate-700 leading-relaxed"
            variants={childVariants}
          >
            {t("description")}
          </motion.p>

          {/* Botón */}
          <motion.div
            className="flex justify-center md:justify-start"
            variants={childVariants}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary flex items-center text-white px-6 py-2 mt-6 rounded-full shadow hover:bg-primary/90 transition duration-300"
            >
              <Link href="/contacto" passHref className="flex items-center">
                {t("button")}
                <MdKeyboardDoubleArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default VisionSeccion;
