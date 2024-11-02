import FAQ from "@/app/ui/FAQ";
import React from "react";

// Icons
import { FaSearch } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const Page: React.FC = () => {
  return (
    <div className="mt-36 container mx-auto">
      <div className="hero min-h-[80vh] flex justify-center items-center flex-col">
        <h1 className="text-center text-4xl">
          Servicio a <strong className="text-primary">Cliente</strong>
        </h1>
        <p className="text-center">
          Estamos aquí para ayudarte. Encuentra respuestas a tus preguntas y
          soluciones a tus problemas de manera rápida y sencilla.
        </p>
        <div className="mt-4 rounded-full flex">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button className="ml-2 p-4 bg-primary text-white rounded-full">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="separador text-center mb-8">
        <h2 className="text-4xl">
          Guias <strong className="text-primary">rápidas</strong>
        </h2>
        <p className="text-lg text-slate-600">
          Encuentra respuestas a tus preguntas y soluciones a tus problemas de
          manera rápida y sencilla.
        </p>
      </div>
      <div className="guiasrapidas grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col p-10 border-primary border-2 rounded-2xl justify-center items-center">
          <FaFlag className="text-primary mb-6" size={28} />
          <h2 className="text-primary font-bold mb-2">
            ¿Por qué confiar en Vivavía?
          </h2>
          <p>
            Vivavía es una agencia de viajes comprometida con la satisfacción de
            sus clientes. Nuestro equipo de expertos está aquí para ayudarte en
            cada paso del camino.
          </p>
        </div>
        <div className="flex flex-col p-10 border-primary border-2 rounded-2xl justify-center items-center">
          <FaFlag className="text-primary mb-6" size={28} />
          <h2 className="text-primary font-bold mb-2">
            ¿Por qué confiar en Vivavía?
          </h2>
          <p>
            Vivavía es una agencia de viajes comprometida con la satisfacción de
            sus clientes. Nuestro equipo de expertos está aquí para ayudarte en
            cada paso del camino.
          </p>
        </div>
        <div className="flex flex-col p-10 border-primary border-2 rounded-2xl justify-center items-center">
          <FaFlag className="text-primary mb-6" size={28} />
          <h2 className="text-primary font-bold mb-2">
            ¿Por qué confiar en Vivavía?
          </h2>
          <p>
            Vivavía es una agencia de viajes comprometida con la satisfacción de
            sus clientes. Nuestro equipo de expertos está aquí para ayudarte en
            cada paso del camino.
          </p>
        </div>
        <div className="flex flex-col p-10 border-primary border-2 rounded-2xl justify-center items-center">
          <FaFlag className="text-primary mb-6" size={28} />
          <h2 className="text-primary font-bold mb-2">
            ¿Por qué confiar en Vivavía?
          </h2>
          <p>
            Vivavía es una agencia de viajes comprometida con la satisfacción de
            sus clientes. Nuestro equipo de expertos está aquí para ayudarte en
            cada paso del camino.
          </p>
        </div>
        <div className="flex flex-col p-10 border-primary border-2 rounded-2xl justify-center items-center">
          <FaFlag className="text-primary mb-6" size={28} />
          <h2 className="text-primary font-bold mb-2">
            ¿Por qué confiar en Vivavía?
          </h2>
          <p>
            Vivavía es una agencia de viajes comprometida con la satisfacción de
            sus clientes. Nuestro equipo de expertos está aquí para ayudarte en
            cada paso del camino.
          </p>
        </div>
        <div className="flex flex-col p-10 border-primary border-2 rounded-2xl justify-center items-center">
          <FaFlag className="text-primary mb-6" size={28} />
          <h2 className="text-primary font-bold mb-2">
            ¿Por qué confiar en Vivavía?
          </h2>
          <p>
            Vivavía es una agencia de viajes comprometida con la satisfacción de
            sus clientes. Nuestro equipo de expertos está aquí para ayudarte en
            cada paso del camino.
          </p>
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
        <div className="formulario w-full md:w-1/2 p-4">
          <h2 className="text-4xl text-center mb-4">Contáctanos</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Asunto
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Asunto"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Tu correo electrónico"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Tu mensaje"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-primary text-white rounded-md"
            >
              Enviar
            </button>
          </form>
        </div>
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
