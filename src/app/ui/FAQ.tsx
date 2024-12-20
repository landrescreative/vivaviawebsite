"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useTranslations } from "next-intl";

const FAQ = () => {
  const t = useTranslations("faq"); // Carga las traducciones específicas
  const faqs = t.raw("items"); // Obtiene la lista de FAQs desde las traducciones

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          {t("title")} <span className="text-blue-600">{t("highlight")}</span>
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`p-6 rounded-lg shadow-md bg-white transition-all ${
        isOpen ? "ring-2 ring-blue-500" : "ring-1 ring-gray-200"
      }`}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <motion.div
          className={`text-blue-500 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          transition={{ duration: 0.3 }}
        >
          <HiOutlineChevronDown size={24} />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden mt-4"
          >
            <p className="text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;
