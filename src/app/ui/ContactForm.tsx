import React, { useState } from "react";
import { useTranslations } from "next-intl";

const ContactForm: React.FC = () => {
  const t = useTranslations("contactForm"); // Carga las traducciones específicas

  const [formData, setFormData] = useState({
    nombre: "",
    asunto: "",
    email: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({
    nombre: false,
    asunto: false,
    email: false,
    mensaje: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value.trim() !== "") {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      nombre: formData.nombre.trim() === "",
      asunto: formData.asunto.trim() === "",
      email:
        formData.email.trim() === "" ||
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email),
      mensaje: formData.mensaje.trim() === "",
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      console.log("Form data submitted:", formData);
      alert(t("successMessage"));
      setFormData({
        nombre: "",
        asunto: "",
        email: "",
        mensaje: "",
      });
    }
  };

  return (
    <div
      id="formulario"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 p-6"
    >
      <div className="w-full max-w-7xl bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row">
        {/* Sección de Imagen */}
        <div className="flex-1 bg-gradient-to-br from-blue-500 to-indigo-600 relative">
          <div className="relative z-10 text-white p-8 flex flex-col h-full justify-center items-center">
            <h2 className="text-4xl font-bold mb-4 text-center">
              {t("imageSection.title")}
            </h2>
            <p className="text-lg text-center">{t("imageSection.subtitle")}</p>
          </div>
        </div>

        {/* Sección del Formulario */}
        <div className="flex-1 p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            {t("formSection.title")}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t("formFields.name.label")}
              </label>
              <input
                id="nombre"
                type="text"
                name="nombre"
                className={`w-full p-4 border rounded-lg focus:ring-2 focus:outline-none ${
                  errors.nombre
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder={t("formFields.name.placeholder")}
                onChange={handleChange}
                value={formData.nombre}
              />
              {errors.nombre && (
                <p className="text-red-500 text-sm mt-1">
                  {t("formFields.name.error")}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="asunto"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t("formFields.subject.label")}
              </label>
              <input
                id="asunto"
                type="text"
                name="asunto"
                className={`w-full p-4 border rounded-lg focus:ring-2 focus:outline-none ${
                  errors.asunto
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder={t("formFields.subject.placeholder")}
                onChange={handleChange}
                value={formData.asunto}
              />
              {errors.asunto && (
                <p className="text-red-500 text-sm mt-1">
                  {t("formFields.subject.error")}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t("formFields.email.label")}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className={`w-full p-4 border rounded-lg focus:ring-2 focus:outline-none ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder={t("formFields.email.placeholder")}
                onChange={handleChange}
                value={formData.email}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {t("formFields.email.error")}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t("formFields.message.label")}
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                className={`w-full p-4 border rounded-lg focus:ring-2 focus:outline-none ${
                  errors.mensaje
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder={t("formFields.message.placeholder")}
                rows={5}
                onChange={handleChange}
                value={formData.mensaje}
              ></textarea>
              {errors.mensaje && (
                <p className="text-red-500 text-sm mt-1">
                  {t("formFields.message.error")}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 focus:ring-4 focus:ring-blue-400"
            >
              {t("formSection.submitButton")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
