"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // Usuario de prueba
  const testUser = {
    email: "usuario@prueba.com",
    password: "123456",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar si las credenciales coinciden con el usuario de prueba
    if (email === testUser.email && password === testUser.password) {
      setShowSuccessModal(true); // Mostrar modal de éxito
      setErrorMessage(""); // Limpiar mensaje de error
    } else {
      setErrorMessage("Correo o contraseña incorrectos");
      setShowErrorModal(true); // Mostrar modal de error
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    setShowErrorModal(false);
  };

  return (
    <div className="max-h-screen grid grid-cols-4  bg-gray-100">
      <div className="hidden md:block w-full col-start-1 col-end-3">
        <img
          src="/paisaje.jpg" // Puedes reemplazar esta URL con la imagen que desees
          alt="Imagen de bienvenida"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-ful1 flex flex-col justify-center    p-8 space-y-6 bg-white rounded shadow-md col-start-1 col-end-6  md:col-start-3 md:col-end-5">
        <div className="flex justify-between">
          <h1 className="text-primary text-2xl">VIVAVIA</h1>
          <h1>ES</h1>
        </div>
        {/* Texto de bienvenida actualizado */}
        <h2 className="text-3xl font-bold text-center text-gray-700">
          ¡Bienvenido de regreso!
        </h2>
        <p className="text-center text-gray-600">
          Es bueno tenerte de regreso.
        </p>
        {/* También puedes cambiar el texto a algo como: "Nos alegra verte de nuevo." */}

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="••••••••"
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>

        {/* Enlaces para recuperación de contraseña y registro */}
        <div className="mt-4 flex justify-between text-sm text-indigo-600">
          <a href="/forgot-password" className="hover:underline">
            Recuperar contraseña
          </a>
          <a href="/register" className="hover:underline">
            Registrarse
          </a>
        </div>

        {/* Mostrar las credenciales del usuario de prueba */}
        <div className="mt-6 text-sm text-gray-500">
          <p>Usuario de prueba:</p>
          <p>
            Correo: <strong>usuario@prueba.com</strong>
          </p>
          <p>
            Contraseña: <strong>123456</strong>
          </p>
        </div>
      </div>

      {/* Modal de éxito */}
      {showSuccessModal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800">
              ¡Inicio de sesión exitoso!
            </h2>
            <p className="mt-2 text-gray-600">
              Has iniciado sesión correctamente.
            </p>
            <button
              className="mt-4 px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </motion.div>
      )}

      {/* Modal de error */}
      {showErrorModal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-red-600">
              Error de autenticación
            </h2>
            <p className="mt-2 text-gray-600">
              Correo o contraseña incorrectos. Intenta nuevamente.
            </p>
            <button
              className="mt-4 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}