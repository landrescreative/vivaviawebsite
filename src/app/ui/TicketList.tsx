// src/app/ui/TicketList.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { TicketItem } from "./TicketItem";

export const TicketList = ({
  tickets,
  openTicket,
  toggleFavorite,
  toggleResolved,
  onDelete,
  restoreTicket,
  isTrash = false, // Nuevo prop para indicar si es la papelera
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Número de tickets por página

  const normalizeText = (text) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const filteredTickets = tickets.filter((ticket) => {
    const name = normalizeText(ticket.nombre || "");
    const subject = normalizeText(ticket.asunto || "");
    const category = normalizeText(ticket.categoria || "");
    const term = normalizeText(searchTerm);

    return (
      name.includes(term) || subject.includes(term) || category.includes(term)
    );
  });

  const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTickets = filteredTickets.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-lg shadow-lg p-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        {isTrash ? "Papelera de Tickets" : "Bandeja de Entrada"}
      </h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por nombre, asunto o categoría"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {currentTickets.length > 0 ? (
        <table className="min-w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-4 text-left">Favorito</th>
              <th className="p-4 text-left">Categoría</th>
              <th className="p-4 text-left">Nombre</th>
              <th className="p-4 text-left">Asunto</th>
              <th className="p-4 text-left">Fecha</th>
              <th className="p-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentTickets.map((ticket) => (
              <TicketItem
                key={ticket.id}
                ticket={ticket}
                openTicket={openTicket}
                toggleFavorite={isTrash ? () => {} : toggleFavorite}
                toggleResolved={isTrash ? () => {} : toggleResolved}
                onDelete={isTrash ? restoreTicket : onDelete}
                isTrash={isTrash}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500 mt-4">
          {isTrash
            ? "No hay tickets en la papelera."
            : `No hay resultados para "${searchTerm}".`}
        </p>
      )}

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Anterior
        </button>

        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </motion.div>
  );
};
