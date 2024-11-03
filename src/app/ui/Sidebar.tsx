// components/ui/Sidebar.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaHome,
  FaBox,
  FaChartBar,
  FaQuestionCircle,
  FaBlog,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigate = (path: string) => {
    router.push(path);
    setIsOpen(false); // Cerrar el sidebar al navegar en móviles
  };

  return (
    <div className="flex">
      {/* Botón de menú para pantallas pequeñas */}
      <button
        onClick={toggleSidebar}
        className="p-2 md:hidden fixed top-4 left-4 z-20 text-white bg-blue-600 rounded-lg"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-800 text-white p-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:flex-shrink-0`}
      >
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center p-2 text-lg rounded-lg hover:bg-blue-700 w-full"
          >
            <FaHome className="mr-2" /> Inicio
          </button>
          <button
            onClick={() => navigate("/dashboard/paquetes")}
            className="flex items-center p-2 text-lg rounded-lg hover:bg-blue-700 w-full"
          >
            <FaBox className="mr-2" /> Paquetes
          </button>
          <button
            onClick={() => navigate("/dashboard/finanzas")}
            className="flex items-center p-2 text-lg rounded-lg hover:bg-blue-700 w-full"
          >
            <FaChartBar className="mr-2" /> Finanzas
          </button>
          <button
            onClick={() => navigate("/dashboard/soporte")}
            className="flex items-center p-2 text-lg rounded-lg hover:bg-blue-700 w-full"
          >
            <FaQuestionCircle className="mr-2" /> Soporte
          </button>
          <button
            onClick={() => navigate("/dashboard/blog")}
            className="flex items-center p-2 text-lg rounded-lg hover:bg-blue-700 w-full"
          >
            <FaBlog className="mr-2" /> Blog
          </button>
        </nav>
      </div>

      {/* Fondo semi-transparente cuando el sidebar está abierto en pantallas pequeñas */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
        ></div>
      )}
    </div>
  );
}
