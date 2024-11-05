// app/[locale]/dashboard/finances/hooks/useFinancesData.ts
import { useQuery } from "@tanstack/react-query";

// Datos ficticios
const fakeData = {
  tarjetaBancaria: {
    nombre: "Juan Pérez",
    fechaVencimiento: "08/24",
    ultimosDigitos: "6789",
    balanceEstimado: "$5,250.00",
  },
  transacciones: [
    {
      icono: "✈️",
      viaje: "Cancún - México",
      fechaViaje: "2023-09-12",
      formaPago: "Web",
      ultimosDigitosTarjeta: "1234",
      status: "Completado",
      monto: 2000,
    },
    {
      icono: "🏖️",
      viaje: "Playa del Carmen",
      fechaViaje: "2023-09-20",
      formaPago: "Transferencia",
      ultimosDigitosTarjeta: "5678",
      status: "Pendiente",
      monto: 1500,
    },
    {
      icono: "🏞️",
      viaje: "Tulum - México",
      fechaViaje: "2023-09-25",
      formaPago: "Web",
      ultimosDigitosTarjeta: "2345",
      status: "Completado",
      monto: 1000,
    },
    {
      icono: "🏝️",
      viaje: "Riviera Maya",
      fechaViaje: "2023-09-30",
      formaPago: "Web",
      ultimosDigitosTarjeta: "6789",
      status: "Completado",
      monto: 2500,
    },
    {
      icono: "🏔️",
      viaje: "Cancún - México",
      fechaViaje: "2023-10-05",
      formaPago: "Web",
      ultimosDigitosTarjeta: "1234",
      status: "Pendiente",
      monto: 2000,
    },
    {
      icono: "🏖️",
      viaje: "Playa del Carmen",
      fechaViaje: "2023-10-10",
      formaPago: "Transferencia",
      ultimosDigitosTarjeta: "5678",
      status: "Pendiente",
      monto: 1500,
    },
    // Más datos de transacciones...
  ],
  paquetesVendidos: [
    {
      producto: "Paquete Cancún Todo Incluido",
      locacion: "Cancún, México",
      fecha: "2023-10-05",
      cantidad: 2,
      precio: "$3,000",
      estado: "Completado",
      imagen: "/paisaje.jpg",
    },
    {
      producto: "Paquete Tulum Aventura",
      locacion: "Tulum, México",
      fecha: "2023-10-10",
      cantidad: 1,
      precio: "$1,500",
      estado: "Pendiente",
      imagen: "/paisaje.jpg",
    },
    {
      producto: "Paquete Riviera Maya Romántico",
      locacion: "Riviera Maya, México",
      fecha: "2023-10-15",
      cantidad: 2,
      precio: "$4,000",
      estado: "Completado",
      imagen: "/paisaje.jpg",
    },
    {
      producto: "Paquete Playa del Carmen Familiar",
      locacion: "Playa del Carmen, México",
      fecha: "2023-10-20",
      cantidad: 3,
      precio: "$6,000",
      estado: "Completado",
      imagen: "/paisaje.jpg",
    },
    {
      producto: "Paquete Cancún Todo Incluido",
      locacion: "Cancún, México",
      fecha: "2023-10-25",
      cantidad: 1,
      precio: "$1,500",
      estado: "Pendiente",
      imagen: "/paisaje.jpg",
    },
    {
      producto: "Paquete Tulum Aventura",
      locacion: "Tulum, México",
      fecha: "2023-10-30",
      cantidad: 2,
      precio: "$3,000",
      estado: "Pendiente",
      imagen: "/paisaje.jpg",
    },
    // Más datos de paquetes...
  ],
};

export const useFinancesData = () => {
  return useQuery({
    queryKey: ["financesData"],
    queryFn: async () => {
      // Simula una llamada a la API
      return fakeData;
    },
  });
};
