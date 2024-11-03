// app/ui/TicketChatView.tsx
import React from "react";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaTrashAlt,
  FaPaperclip,
  FaImage,
} from "react-icons/fa";
import { categoryIcons, categoryColors } from "@/app/ui/categoryData";

export const TicketChatView = ({ ticket, closeTicket }) => (
  <div className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-lg">
    <div className="p-6 border-b flex items-center justify-between">
      <div>
        <button
          onClick={closeTicket}
          className="flex items-center text-blue-600 font-semibold mb-4"
        >
          <FaArrowLeft className="mr-2" /> Regresar
        </button>
        <h3 className="text-xl font-semibold">{ticket.nombre}</h3>
        <div className="flex items-center">
          {categoryIcons[ticket.categoria as keyof typeof categoryIcons] ?? (
            <FaQuestionCircle className="text-gray-500 mr-2" />
          )}
          <span
            className={`${
              categoryColors[ticket.categoria as keyof typeof categoryColors] ??
              "bg-gray-100 text-gray-700"
            } px-2 py-1 rounded-full text-xs font-semibold`}
          >
            {ticket.categoria || "Sin Categoría"}
          </span>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="text-green-500 flex items-center hover:text-green-600">
          <FaCheckCircle className="mr-1" /> Marcar como Resuelto
        </button>
        <button className="text-red-500 flex items-center hover:text-red-600">
          <FaTrashAlt className="mr-1" /> Eliminar
        </button>
      </div>
    </div>

    <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
      {ticket.mensajes.map((msg, index) => (
        <div key={index} className="mb-4">
          <p className="font-semibold">{msg.de}</p>
          <p className="text-gray-600">{msg.fecha}</p>
          <p>{msg.mensaje}</p>
        </div>
      ))}
    </div>

    <div className="bg-white p-4 border-t border-gray-200 flex items-center space-x-4">
      <input
        type="text"
        placeholder="Escribe un mensaje..."
        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
      />
      <button className="text-gray-500 hover:text-blue-500">
        <FaPaperclip />
      </button>
      <button className="text-gray-500 hover:text-blue-500">
        <FaImage />
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Enviar
      </button>
    </div>
  </div>
);
