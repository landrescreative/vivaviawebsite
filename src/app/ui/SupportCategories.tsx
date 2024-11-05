// app/ui/SupportCategories.tsx
import React from "react";
import {
  FaQuestionCircle,
  FaLifeRing,
  FaInfoCircle,
  FaUserShield,
  FaStar,
  FaPaperPlane,
  FaCheckCircle,
  FaTrashAlt,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FcSupport } from "react-icons/fc";

const categoryIcons = {
  Tickets: <MdOutlineMailOutline className="text-blue-500 mr-2" />,
  Duda: <FaQuestionCircle className="text-yellow-500 mr-2" />,
  Soporte: <FcSupport className="text-blue-500 mr-2" />,
  Info: <FaInfoCircle className="text-green-500 mr-2" />,
  Cuenta: <FaUserShield className="text-purple-500 mr-2" />,
  Favoritos: <FaStar className="text-yellow-500 mr-2" />,
  Enviados: <FaPaperPlane className="text-blue-500 mr-2" />,
  Resueltos: <FaCheckCircle className="text-green-500 mr-2" />,
  Eliminados: <FaTrashAlt className="text-red-500 mr-2" />, // Icono para "Eliminados"
};

export const SupportCategories = ({
  selectedCategory,
  setSelectedCategory,
  ticketsData,
}) => (
  <div className="w-1/4 bg-white p-4 border-r shadow-2xl shadow-black/5">
    <h2 className="text-lg font-semibold mb-4 text-white text-center uppercase bg-primary p-3 rounded-lg">
      Tickets de Soporte
    </h2>
    <ul className="space-y-3">
      {[
        "Tickets",
        "Duda",
        "Soporte",
        "Info",
        "Cuenta",
        "Favoritos",
        "Enviados",
        "Resueltos",
        "Eliminados", // Nueva categoría "Eliminados"
      ].map((category) => (
        <li
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`flex justify-between items-center p-3 font-medium rounded-md cursor-pointer ${
            selectedCategory === category
              ? "bg-blue-100 text-blue-500 font-semibold"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          <div className="flex items-center">
            {categoryIcons[category]} {/* Icono de la categoría */}
            <span>{category}</span>
          </div>
          <span className="opacity-80 text-right text-sm font-bold ">
            {category === "Favoritos"
              ? ticketsData.filter((ticket) => ticket.favorito).length
              : category === "Resueltos"
              ? ticketsData.filter((ticket) => ticket.resuelto).length
              : category === "Eliminados"
              ? ticketsData.filter((ticket) => ticket.eliminado).length // Contador de "Eliminados"
              : ticketsData.filter(
                  (ticket) =>
                    ticket.categoria === category || category === "Tickets"
                ).length}
          </span>
        </li>
      ))}
    </ul>
  </div>
);
