// app/[locale]/dashboard/soporte/page.tsx
"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { SupportCategories } from "@/app/ui/SupportCategories";
import { TicketList } from "@/app/ui/TicketList";
import { TicketChatView } from "@/app/ui/TicketChatView";
import {
  useSupportTickets,
  useResolveTicket,
  useToggleFavoriteTicket,
} from "./hooks/useSupportTickets";

export default function SoportePage() {
  const [selectedCategory, setSelectedCategory] = useState("Tickets");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTicket, setSelectedTicket] = useState(null);
  const { data: ticketsData = [], isLoading } = useSupportTickets();

  const [localTicketsData, setLocalTicketsData] = useState([]);

  useEffect(() => {
    setLocalTicketsData(ticketsData);
  }, [ticketsData]);

  const { mutate: resolveTicket } = useResolveTicket();
  const { mutate: toggleFavorite } = useToggleFavoriteTicket();

  const markAsResolved = useCallback(
    (ticketId: number, currentResolvedState: boolean) => {
      resolveTicket({ ticketId, isResolved: !currentResolvedState });
      setSelectedTicket(null);
    },
    [resolveTicket]
  );

  const handleDeleteTicket = useCallback((ticketId: number) => {
    setLocalTicketsData((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, eliminado: true } : ticket
      )
    );
    setSelectedTicket(null);
  }, []);

  const restoreTicket = useCallback((ticketId: number) => {
    setLocalTicketsData((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, eliminado: false } : ticket
      )
    );
  }, []);

  const filteredTickets = useMemo(() => {
    return localTicketsData
      .filter((ticket) => {
        // Mostrar solo los tickets en la papelera si la categoría seleccionada es "Eliminados"
        if (selectedCategory === "Eliminados") {
          return ticket.eliminado;
        }
        // Mostrar solo los tickets no eliminados para otras categorías
        return !ticket.eliminado;
      })
      .filter((ticket) => {
        const matchesCategory =
          selectedCategory === "Tickets" ||
          (selectedCategory === "Favoritos"
            ? ticket.favorito
            : selectedCategory === "Resueltos"
            ? ticket.resuelto
            : ticket.categoria === selectedCategory);
        const matchesSearch =
          ticket.asunto.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ticket.nombre.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      });
  }, [localTicketsData, selectedCategory, searchTerm]);

  if (isLoading) return <p>Loading tickets...</p>;

  return (
    <div className="flex h-full">
      <SupportCategories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        ticketsData={localTicketsData}
      />
      <div className="w-3/4 p-6">
        {selectedTicket ? (
          <TicketChatView
            ticket={selectedTicket}
            closeTicket={() => setSelectedTicket(null)}
            onTicketResolved={(id) =>
              markAsResolved(id, selectedTicket.resuelto)
            }
            onDelete={() => handleDeleteTicket(selectedTicket.id)}
          />
        ) : (
          <TicketList
            tickets={filteredTickets}
            openTicket={(ticket) => setSelectedTicket(ticket)}
            toggleFavorite={toggleFavorite}
            toggleResolved={markAsResolved}
            onDelete={handleDeleteTicket}
            isTrash={selectedCategory === "Eliminados"} // Indicar si es la vista de papelera
            restoreTicket={restoreTicket} // Pasar función de restaurar
          />
        )}
      </div>
    </div>
  );
}
