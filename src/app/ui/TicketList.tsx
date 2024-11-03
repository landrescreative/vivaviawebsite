// app/ui/TicketList.tsx
import React from "react";
import { motion } from "framer-motion";
import { TicketItem } from "./TicketItem";

export const TicketList = ({ tickets, openTicket, toggleFavorite }) => (
  <motion.div
    className="bg-white border border-gray-200 rounded-lg shadow-lg p-6"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-2xl font-bold text-blue-600 mb-6">
      Bandeja de Entrada
    </h2>
    <table className="min-w-full">
      <thead className="bg-gray-100 border-b">
        <tr>
          <th className="p-4 text-left">Favorito</th>
          <th className="p-4 text-left">Categoría</th>
          <th className="p-4 text-left">Nombre</th>
          <th className="p-4 text-left">Asunto</th>
          <th className="p-4 text-left">Fecha</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <TicketItem
            key={ticket.id}
            ticket={ticket}
            openTicket={openTicket}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </tbody>
    </table>
  </motion.div>
);
