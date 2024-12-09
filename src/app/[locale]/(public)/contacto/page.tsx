"use client";
import React from "react";
import FAQ from "@/app/ui/FAQ";
import ContactForm from "@/app/ui/ContactForm";
import QuickGuideCard from "@/app/ui/QuickGuideCard";
import { FaSearch } from "react-icons/fa";
import HeroSection from "@/app/ui/HeroSection";

const Page: React.FC = () => {
  const guides = [
    {
      title: "¿Por qué elegirnos?",
      description: "Ofrecemos soluciones confiables y personalizadas.",
      redirectUrl: "/about",
    },
    {
      title: "Guías de usuario",
      description: "Explora nuestras guías rápidas para aprender más.",
      redirectUrl: "/guides",
    },
    {
      title: "Atención profesional",
      description: "Estamos aquí para ayudarte en cada paso.",
      redirectUrl: "/contact",
    },
  ];

  return (
    <div className="">
      <HeroSection />
      <div className="mx-auto w-10/12 my-10">
        <div className="separador text-center mb-8">
          <h2 className="text-4xl">
            Guias <strong className="text-primary">rápidas</strong>
          </h2>
          <p className="text-lg text-slate-600">
            Encuentra respuestas a tus preguntas y soluciones a tus problemas de
            manera rápida y sencilla.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <QuickGuideCard
              key={index}
              title={guide.title}
              description={guide.description}
              redirectUrl={guide.redirectUrl}
            />
          ))}
        </div>
      </div>
      <div className="separador text-center my-8">
        <h2 className="text-4xl">
          Resuelve tus <strong className="text-primary">dudas</strong>
        </h2>
        <p className="text-lg text-slate-600">
          Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte
          en contacto con nosotros. Nuestro equipo de soporte está disponible
          para ayudarte en todo momento.
        </p>
      </div>
      <div className="contacto-formulario flex flex-col md:flex-row justify-center items-center my-8">
        <ContactForm />
        <div className="imagen w-full md:w-1/2 p-4">
          <img
            src="/paisaje.jpg"
            alt="Contact Us"
            className="w-full h-96 object-cover rounded-md"
          />
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default Page;
