// src/app/ui/TicketItem.tsx
import React from "react";
import { FaStar, FaQuestionCircle } from "react-icons/fa";
import { categoryIcons, categoryColors } from "@/app/ui/categoryData";

interface Ticket {
  id: number;
  categoria?: string;
  nombre: string;
  asunto: string;
  fecha: string;
  favorito: boolean;
}

interface TicketItemProps {
  ticket: Ticket;
  openTicket: (ticket: Ticket) => void;
  toggleFavorite: (id: number) => void;
}

export const TicketItem: React.FC<TicketItemProps> = ({
  ticket,
  openTicket,
  toggleFavorite,
}) => {
  // Verificamos si `ticket.categoria` es una clave válida en `categoryColors`
  const color =
    ticket.categoria && ticket.categoria in categoryColors
      ? categoryColors[ticket.categoria as keyof typeof categoryColors]
      : "bg-gray-100 text-gray-700"; // Color predeterminado

  const icon =
    ticket.categoria && ticket.categoria in categoryIcons ? (
      categoryIcons[ticket.categoria as keyof typeof categoryIcons]
    ) : (
      <FaQuestionCircle className="text-gray-500 mr-2" />
    ); // Icono predeterminado

  return (
    <tr
      onClick={() => openTicket(ticket)}
      className="border-b hover:bg-gray-50 cursor-pointer"
    >
      <td className="p-4 text-left">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(ticket.id);
          }}
          className="text-yellow-500 hover:text-yellow-600"
        >
          {ticket.favorito ? <FaStar /> : <FaStar className="text-gray-300" />}
        </button>
      </td>
      <td className={`p-4 text-left flex items-center ${color}`}>
        {icon}
        <span>{ticket.categoria || "Sin Categoría"}</span>
      </td>
      <td className="p-4 text-left">{ticket.nombre}</td>
      <td className="p-4 text-left">{ticket.asunto}</td>
      <td className="p-4 text-left text-gray-500">{ticket.fecha}</td>
    </tr>
  );
};
