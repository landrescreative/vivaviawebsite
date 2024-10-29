import React from "react";

const Page: React.FC = () => {
  return (
    <div className="mt-36 container mx-auto">
      <div>
        <h1>Servicio a Cliente</h1>
        <p>
          Estamos aquí para ayudarte. Encuentra respuestas a tus preguntas y
          soluciones a tus problemas de manera rápida y sencilla.
        </p>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
