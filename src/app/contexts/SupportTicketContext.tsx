// app/context/SupportTicketContext.tsx
"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

interface TicketSoporte {
  id: number;
  icono: string;
  categoria: string;
  asunto: string;
  fecha: string;
  nombre: string;
  favorito: boolean;
  resuelto: boolean;
  estado: string;
  mensajes: { de: string; mensaje: string; fecha: string }[];
}

interface SupportTicketContextType {
  tickets: TicketSoporte[];
  toggleFavorite: (id: number) => void;
  markAsResolved: (id: number) => void;
}

const SupportTicketContext = createContext<
  SupportTicketContextType | undefined
>(undefined);

export function SupportTicketProvider({ children }: { children: ReactNode }) {
  const [tickets, setTickets] = useState<TicketSoporte[]>([
    {
      id: 1,
      icono: "✉️",
      categoria: "Duda",
      asunto: "¿Cómo actualizo mi perfil?",
      fecha: "2023-11-01",
      nombre: "Carlos Pérez",
      favorito: false,
      resuelto: false,
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
      icono: "⚠️",
      categoria: "Soporte",
      asunto: "Problema con el pago",
      fecha: "2023-10-28",
      nombre: "María Gómez",
      favorito: true,
      resuelto: false,
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
  ]);

  const toggleFavorite = useCallback((id: number) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === id ? { ...ticket, favorito: !ticket.favorito } : ticket
      )
    );
  }, []);

  const markAsResolved = useCallback((id: number) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === id ? { ...ticket, resuelto: true } : ticket
      )
    );
  }, []);

  return (
    <SupportTicketContext.Provider
      value={{ tickets, toggleFavorite, markAsResolved }}
    >
      {children}
    </SupportTicketContext.Provider>
  );
}

export function useSupportTickets() {
  const context = useContext(SupportTicketContext);
  if (!context) {
    throw new Error(
      "useSupportTickets debe ser usado dentro de SupportTicketProvider"
    );
  }
  return context;
}
