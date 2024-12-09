import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    asunto: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="formulario w-full md:w-1/2 p-4">
      <h2 className="text-4xl text-center mb-4">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Tu nombre"
            onChange={handleChange}
            value={formData.nombre}
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Asunto
          </label>
          <input
            type="text"
            name="asunto"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Asunto"
            onChange={handleChange}
            value={formData.asunto}
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Tu correo electrónico"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Mensaje
          </label>
          <textarea
            name="mensaje"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Tu mensaje"
            rows={4}
            onChange={handleChange}
            value={formData.mensaje}
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
  );
};

export default ContactForm;
