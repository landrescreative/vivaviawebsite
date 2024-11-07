// src/app/ui/TicketItem.tsx
import React from "react";
import {
  FaStar,
  FaCheckCircle,
  FaTrashAlt,
  FaRecycle,
  FaQuestionCircle,
} from "react-icons/fa";
import { categoryIcons, categoryColors } from "@/app/ui/categoryData";

interface Ticket {
  id: number;
  categoria?: string;
  nombre: string;
  asunto: string;
  fecha: string;
  favorito: boolean;
  resuelto: boolean;
  eliminado?: boolean; // Campo opcional para indicar si el ticket está en la papelera
}

interface TicketItemProps {
  ticket: Ticket;
  openTicket: (ticket: Ticket) => void;
  toggleFavorite: (id: number) => void;
  toggleResolved: (id: number, currentResolvedState: boolean) => void;
  onDelete: (id: number) => void;
  isTrash?: boolean; // Prop opcional para identificar si está en la papelera
}

export const TicketItem: React.FC<TicketItemProps> = ({
  ticket,
  openTicket,
  toggleFavorite,
  toggleResolved,
  onDelete,
  isTrash = false,
}) => {
  // Color de fondo y texto según la categoría
  const color =
    ticket.categoria && categoryColors[ticket.categoria]
      ? categoryColors[ticket.categoria as keyof typeof categoryColors]
      : "bg-gray-100 text-gray-700"; // Color predeterminado

  // Icono de la categoría, con un ícono de pregunta como predeterminado
  const icon =
    ticket.categoria && categoryIcons[ticket.categoria] ? (
      categoryIcons[ticket.categoria as keyof typeof categoryIcons]
    ) : (
      <FaQuestionCircle className="text-gray-500 mr-2" />
    );

  return (
    <tr
      onClick={() => openTicket(ticket)}
      className="border-b hover:bg-gray-50 cursor-pointer"
    >
      <td className="p-4 text-left">
        {/* Botón de favorito (deshabilitado en papelera) */}
        {!isTrash && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(ticket.id);
            }}
            className="text-yellow-500 hover:text-yellow-600"
          >
            {ticket.favorito ? (
              <FaStar />
            ) : (
              <FaStar className="text-gray-300" />
            )}
          </button>
        )}
      </td>
      <td
        className={`m-4 p-1 text-left flex rounded-full px-3 justify-center items-center ${color}`}
      >
        {icon}
        <span>{ticket.categoria || "Sin Categoría"}</span>
      </td>
      <td className="p-4 text-left">{ticket.nombre || "Sin Nombre"}</td>
      <td className="p-4 text-left">{ticket.asunto || "Sin Asunto"}</td>
      <td className="p-4 text-left text-gray-500">
        {ticket.fecha || "Sin Fecha"}
      </td>
      <td className="p-4 text-left flex space-x-2">
        {/* Botón de marcar como resuelto (deshabilitado en papelera) */}
        {!isTrash && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleResolved(ticket.id, ticket.resuelto);
            }}
            className={`flex items-center ${
              ticket.resuelto ? "text-gray-500" : "text-primary"
            }`}
          >
            <FaCheckCircle className="mr-1" />
            {ticket.resuelto ? "" : ""}
          </button>
        )}

        {/* Botón de eliminar/restaurar */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(ticket.id); // Mover a papelera o restaurar
          }}
          className={`flex items-center ${
            isTrash
              ? "text-blue-500 hover:text-blue-600"
              : "text-red-500 hover:text-red-600"
          }`}
        >
          {isTrash ? (
            <>
              <FaRecycle className="mr-1" /> Restaurar
            </>
          ) : (
            <>
              <FaTrashAlt className="mr-1" /> Eliminar
            </>
          )}
        </button>
      </td>
    </tr>
  );
};
