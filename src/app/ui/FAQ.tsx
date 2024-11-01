"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué tipos de paquetes de viaje ofrecen?",
      answer:
        "Ofrecemos una amplia variedad de paquetes, incluyendo viajes de aventura, relajación, viajes en familia, lunas de miel, y escapadas personalizadas.",
    },
    {
      question: "¿Puedo personalizar mi itinerario?",
      answer:
        "Sí, todos nuestros itinerarios pueden personalizarse para adaptarse a tus preferencias y necesidades específicas.",
    },
    {
      question: "¿Qué incluye un paquete de viaje típico?",
      answer:
        "Los paquetes suelen incluir vuelos, alojamiento, traslados, actividades guiadas y, en algunos casos, comidas. Sin embargo, cada paquete puede personalizarse según lo que prefieras.",
    },
    {
      question: "¿Es posible reservar solo alojamiento o vuelos?",
      answer:
        "Sí, también ofrecemos la opción de reservar solo alojamiento o vuelos. Contáctanos para obtener más detalles sobre estas opciones.",
    },
    {
      question: "¿Qué debo hacer si necesito cancelar o reprogramar mi viaje?",
      answer:
        "Contáctanos lo antes posible si necesitas cancelar o reprogramar. Te ayudaremos a gestionar los cambios y revisar las políticas de cancelación de tu reserva.",
    },
    {
      question: "¿Ofrecen seguros de viaje?",
      answer:
        "Sí, recomendamos que todos nuestros clientes contraten un seguro de viaje para protegerse contra posibles imprevistos. Ofrecemos varias opciones de cobertura.",
    },
    {
      question:
        "¿Pueden organizar viajes para grupos grandes o eventos corporativos?",
      answer:
        "Claro, tenemos experiencia en la organización de viajes para grupos grandes y eventos corporativos. Ofrecemos servicios personalizados para asegurar una experiencia sin complicaciones.",
    },
    {
      question: "¿Qué documentos necesito para viajar al extranjero?",
      answer:
        "Dependiendo del destino, puedes necesitar pasaporte, visado y otras documentaciones específicas. Te ayudaremos a verificar todos los requisitos antes de tu viaje.",
    },
    {
      question: "¿Pueden ayudar con visados y otros trámites?",
      answer:
        "Sí, podemos ayudarte con el proceso de solicitud de visado y otros trámites necesarios para tu viaje. Proporcionamos asesoramiento para asegurar que tengas todo en orden.",
    },
    {
      question: "¿Ofrecen planes de pago o financiamiento?",
      answer:
        "Sí, ofrecemos planes de pago para facilitar tus viajes. Contáctanos para conocer las opciones disponibles y los términos de financiamiento.",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center">
        Preguntas <strong className="text-primary">Frecuentes</strong>
      </h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MdOutlineKeyboardArrowDown
          size={38}
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        <h3 className="text-lg font-bold text-gray-700 text-left">
          {question}
        </h3>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="mt-2 text-gray-600 text-right pl-4">{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

export default FAQ;
