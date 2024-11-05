// app/[locale]/dashboard/soporte/hooks/useSupportTickets.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Datos ficticios de los tickets de soporte con el campo "eliminado" agregado
const fakeTickets = [
  {
    id: 1,
    categoria: "Duda",
    asunto: "¿Cómo actualizo mi perfil?",
    fecha: "2023-11-01",
    nombre: "Carlos Pérez",
    favorito: false,
    resuelto: false,
    eliminado: false, // Nuevo campo para la papelera
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
    categoria: "Problema",
    asunto: "No puedo iniciar sesión",
    fecha: "2023-11-01",
    nombre: "Ana Gómez",
    favorito: true,
    resuelto: false,
    eliminado: false,
    estado: "Nuevo",
    mensajes: [
      {
        de: "Ana Gómez",
        mensaje: "No puedo iniciar sesión en la plataforma",
        fecha: "2023-11-01",
      },
    ],
  },
  // ... otros tickets
];

// Hook para obtener los tickets de soporte
export const useSupportTickets = () => {
  return useQuery({
    queryKey: ["supportTickets"],
    queryFn: async () => {
      return fakeTickets; // Simula la llamada a una API con datos ficticios
    },
  });
};

// Hook para alternar el estado de resuelto de un ticket
export const useResolveTicket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      ticketId,
      isResolved,
    }: {
      ticketId: number;
      isResolved: boolean;
    }) => {
      return { ticketId, isResolved };
    },
    onSuccess: ({ ticketId, isResolved }) => {
      queryClient.setQueryData(["supportTickets"], (oldTickets: any) =>
        oldTickets.map((ticket: any) =>
          ticket.id === ticketId ? { ...ticket, resuelto: isResolved } : ticket
        )
      );
    },
  });
};

// Hook para marcar o desmarcar un ticket como favorito
export const useToggleFavoriteTicket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (ticketId: number) => {
      return ticketId;
    },
    onSuccess: (ticketId) => {
      queryClient.setQueryData(["supportTickets"], (oldTickets: any) =>
        oldTickets.map((ticket: any) =>
          ticket.id === ticketId
            ? { ...ticket, favorito: !ticket.favorito }
            : ticket
        )
      );
    },
  });
};

// Hook para alternar el estado de "eliminado" (enviar a la papelera o restaurar)
export const useToggleTrashTicket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (ticketId: number) => {
      return ticketId; // Simula la eliminación/recuperación del ticket
    },
    onSuccess: (ticketId) => {
      queryClient.setQueryData(["supportTickets"], (oldTickets: any) =>
        oldTickets.map((ticket: any) =>
          ticket.id === ticketId
            ? { ...ticket, eliminado: !ticket.eliminado } // Alterna el estado de eliminado
            : ticket
        )
      );
    },
  });
};
