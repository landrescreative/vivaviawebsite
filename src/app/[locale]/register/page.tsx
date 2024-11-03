"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // Validation states
  const [emailError, setEmailError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Regex validations
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePasswordStrength = (password: string) => {
    if (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password)
    ) {
      setPasswordStrength("Fuerte");
    } else if (password.length >= 6) {
      setPasswordStrength("Media");
    } else {
      setPasswordStrength("Débil");
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailError(validateEmail(value) ? "" : "Formato de correo no válido");
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    validatePasswordStrength(value);
    setPasswordError(
      value.length >= 8 &&
        /[A-Z]/.test(value) &&
        /[a-z]/.test(value) &&
        /[0-9]/.test(value) &&
        /[\W]/.test(value)
        ? ""
        : "La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial"
    );
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    setConfirmPasswordError(
      value === password ? "" : "Las contraseñas no coinciden"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Aquí solo activamos el modal visualmente
    setShowSuccessModal(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessModal(false);
    }, 1500);
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  const isFormValid =
    !emailError && !passwordError && !confirmPasswordError && acceptedTerms;

  return (
    <div className="grid grid-cols-4 bg-gray-100">
      <div className="hidden md:block w-full max-h-screen col-start-1 col-end-3 overflow-hidden">
        <img
          src="/paisaje.jpg"
          alt="Imagen de bienvenida"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="w-full h-screen flex flex-col justify-center p-8 space-y-6 bg-white rounded shadow-md col-start-1 col-end-6 md:col-start-3 md:col-end-5">
        <div className="hidden md:flex justify-between">
          <h1 className="text-primary text-2xl">VIVAVIA</h1>
          <h1>ES</h1>
        </div>
        <div>
          <h2 className="text-3xl font-normal text-center text-primary m-0">
            Registrarse
          </h2>
          <p className="text-center text-gray-600 m-0">
            ¡Crea una cuenta para empezar!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre de usuario
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full px-5 py-4 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Nombre de usuario"
            />
          </div>
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
              onChange={(e) => handleEmailChange(e.target.value)}
              required
              className="mt-1 block w-full px-5 py-4 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="correo@ejemplo.com"
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
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
              onChange={(e) => handlePasswordChange(e.target.value)}
              required
              className="mt-1 block w-full px-5 py-4 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="••••••••"
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
            <p
              className={`text-sm mt-1 ${
                passwordStrength === "Fuerte"
                  ? "text-green-500"
                  : passwordStrength === "Media"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              Fortaleza de la contraseña: {passwordStrength}
            </p>
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirmar contraseña
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => handleConfirmPasswordChange(e.target.value)}
              required
              className="mt-1 block w-full px-5 py-4 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="••••••••"
            />
            {confirmPasswordError && (
              <p className="text-red-500 text-sm mt-1">
                {confirmPasswordError}
              </p>
            )}
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              Acepto los{" "}
              <a href="/terms" className="text-indigo-600 hover:underline">
                Términos y Condiciones
              </a>{" "}
              y la{" "}
              <a href="/privacy" className="text-indigo-600 hover:underline">
                Política de Privacidad
              </a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={!isFormValid || isLoading}
              className={`w-full px-4 py-4 uppercase text-white rounded-md ${
                !isFormValid
                  ? "bg-indigo-300 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              {isLoading ? "Registrando..." : "Registrarse"}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center text-sm text-indigo-600">
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className="hover:underline">
            Iniciar sesión
          </a>
        </div>
      </div>

      {showSuccessModal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800">
              ¡Registro exitoso!
            </h2>
            <p className="mt-2 text-gray-600">Tu cuenta ha sido creada.</p>
            <button
              className="mt-4 px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
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
