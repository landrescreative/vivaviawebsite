// app/[locale]/dashboard/soporte/page.tsx
"use client";

import { useState, useMemo, useCallback } from "react";
import { SupportCategories } from "@/app/ui/SupportCategories";
import { TicketList } from "@/app/ui/TicketList";
import { TicketChatView } from "@/app/ui/TicketChatView";

// Datos ficticios de los tickets de soporte
const tickets = [
  {
    id: 1,
    categoria: "Duda",
    asunto: "¿Cómo actualizo mi perfil?",
    fecha: "2023-11-01",
    nombre: "Carlos Pérez",
    favorito: false,
    estado: "Nuevo",
    mensajes: [
      {
        de: "Carlos Pérez",
        mensaje: "¿Cómo puedo actualizar mi perfil?",
        fecha: "2023-11-01",
      },
    ],
  },
  {
    id: 2,
    categoria: "Soporte",
    asunto: "Problema con el pago",
    fecha: "2023-10-28",
    nombre: "María Gómez",
    favorito: true,
    estado: "Leído",
    mensajes: [
      {
        de: "María Gómez",
        mensaje: "Tengo un problema con el pago de mi suscripción",
        fecha: "2023-10-28",
      },
    ],
  },
  // Más tickets...
];

export default function SoportePage() {
  const [selectedCategory, setSelectedCategory] = useState("Tickets");
  const [ticketsData, setTicketsData] = useState(tickets);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTicket, setSelectedTicket] = useState(null);

  const toggleFavorite = useCallback((id: number) => {
    setTicketsData((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === id ? { ...ticket, favorito: !ticket.favorito } : ticket
      )
    );
  }, []);

  const openTicket = useCallback((ticket) => setSelectedTicket(ticket), []);
  const closeTicket = useCallback(() => setSelectedTicket(null), []);

  const filteredTickets = useMemo(() => {
    return ticketsData.filter((ticket) => {
      const matchesCategory =
        selectedCategory === "Tickets" ||
        (selectedCategory === "Favoritos"
          ? ticket.favorito
          : ticket.categoria === selectedCategory);
      const matchesSearch =
        ticket.asunto.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.nombre.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [ticketsData, selectedCategory, searchTerm]);

  return (
    <div className="flex h-full">
      <SupportCategories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        ticketsData={ticketsData}
      />
      <div className="w-3/4 p-6">
        {selectedTicket ? (
          <TicketChatView ticket={selectedTicket} closeTicket={closeTicket} />
        ) : (
          <TicketList
            tickets={filteredTickets}
            openTicket={openTicket}
            toggleFavorite={toggleFavorite}
          />
        )}
      </div>
    </div>
  );
}
