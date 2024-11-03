// app/[locale]/dashboard/finanzas/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DashboardCard from "@/app/ui/DashboardCard";
import TransactionTable from "@/app/ui/TransactionTable";
import Ingresos6MesesChart from "@/app/ui/Ingresos6MesesChart";
import Ingresos12MesesChart from "@/app/ui/Ingresos12MesesChart";
import TarjetaBancaria from "@/app/ui/TarjetaBancaria";
import {
  FaDollarSign,
  FaBalanceScale,
  FaPlane,
  FaCalendar,
} from "react-icons/fa";
import Image from "next/image";

// Información de la tarjeta bancaria
const tarjetaBancaria = {
  nombre: "Juan Pérez",
  fechaVencimiento: "08/24",
  ultimosDigitos: "6789",
  balanceEstimado: "$5,250.00",
};

// Datos de transacciones
const transacciones = [
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
    icono: "🚢",
    viaje: "Isla Mujeres - México",
    fechaViaje: "2023-09-22",
    formaPago: "Web",
    ultimosDigitosTarjeta: "4321",
    status: "Completado",
    monto: 1800,
  },
  {
    icono: "🌄",
    viaje: "Tulum - México",
    fechaViaje: "2023-09-25",
    formaPago: "Transferencia",
    ultimosDigitosTarjeta: "8765",
    status: "Cancelado",
    monto: 2100,
  },
  {
    icono: "🏕️",
    viaje: "Holbox - México",
    fechaViaje: "2023-09-28",
    formaPago: "Web",
    ultimosDigitosTarjeta: "1234",
    status: "Completado",
    monto: 2200,
  },
  {
    icono: "🚲",
    viaje: "Cozumel - México",
    fechaViaje: "2023-10-01",
    formaPago: "Transferencia",
    ultimosDigitosTarjeta: "5678",
    status: "Pendiente",
    monto: 2400,
  },
  {
    icono: "🦜",
    viaje: "Chichen Itza - México",
    fechaViaje: "2023-10-03",
    formaPago: "Web",
    ultimosDigitosTarjeta: "4321",
    status: "Completado",
    monto: 2600,
  },
];

// Datos de paquetes vendidos
const paquetesVendidos = [
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
    producto: "Tour Playa del Carmen",
    locacion: "Playa del Carmen, México",
    fecha: "2023-10-12",
    cantidad: 3,
    precio: "$4,500",
    estado: "Cancelado",
    imagen: "/paisaje.jpg",
  },
  {
    producto: "Paquete Isla Mujeres",
    locacion: "Isla Mujeres, México",
    fecha: "2023-10-15",
    cantidad: 4,
    precio: "$2,000",
    estado: "Completado",
    imagen: "/paisaje.jpg",
  },
  {
    producto: "Tour Cozumel Maravillas",
    locacion: "Cozumel, México",
    fecha: "2023-10-20",
    cantidad: 1,
    precio: "$3,200",
    estado: "Pendiente",
    imagen: "/paisaje.jpg",
  },
  {
    producto: "Escapada a Holbox",
    locacion: "Isla Holbox, México",
    fecha: "2023-10-25",
    cantidad: 2,
    precio: "$2,800",
    estado: "Completado",
    imagen: "/paisaje.jpg",
  },
  {
    producto: "Excursión a Chichen Itza",
    locacion: "Chichen Itza, México",
    fecha: "2023-10-30",
    cantidad: 3,
    precio: "$3,600",
    estado: "Cancelado",
    imagen: "/paisaje.jpg",
  },
];

export default function FinanzasPage() {
  // Estados para la paginación
  const [paquetePage, setPaquetePage] = useState(0);
  const [transaccionPage, setTransaccionPage] = useState(0);
  const itemsPerPagePaquetes = 5;
  const itemsPerPageTransacciones = 3;

  // Calcular el número total de páginas
  const totalPaquetePages = Math.ceil(
    paquetesVendidos.length / itemsPerPagePaquetes
  );
  const totalTransaccionPages = Math.ceil(
    transacciones.length / itemsPerPageTransacciones
  );

  // Obtener los elementos de la página actual
  const paginatedPaquetes = paquetesVendidos.slice(
    paquetePage * itemsPerPagePaquetes,
    paquetePage * itemsPerPagePaquetes + itemsPerPagePaquetes
  );
  const paginatedTransacciones = transacciones.slice(
    transaccionPage * itemsPerPageTransacciones,
    transaccionPage * itemsPerPageTransacciones + itemsPerPageTransacciones
  );

  // Función para renderizar botones de paginación numérica
  const renderPaginationButtons = (
    currentPage: number,
    totalPages: number,
    onPageChange: (page: number) => void
  ) => {
    return Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        onClick={() => onPageChange(index)}
        className={`px-3 py-1 mx-1 rounded-md ${
          index === currentPage
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        } hover:bg-blue-400`}
      >
        {index + 1}
      </button>
    ));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Gráficas de Ingresos */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Ingresos6MesesChart />
        <Ingresos12MesesChart />
      </motion.div>

      {/* Tarjetas de Resumen */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <DashboardCard
          title="Balance Mensual"
          value="$4,500"
          icon={<FaCalendar className="text-blue-600" />}
          bgColor="bg-blue-100 rounded-lg shadow-lg"
        />
        <DashboardCard
          title="Balance General"
          value="$35,200"
          icon={<FaBalanceScale className="text-green-600" />}
          bgColor="bg-green-100 rounded-lg shadow-lg"
        />
        <DashboardCard
          title="Último Viaje"
          value="$2,000"
          icon={<FaPlane className="text-orange-600" />}
          bgColor="bg-orange-100 rounded-lg shadow-lg"
        />
        <DashboardCard
          title="Ingresos Totales"
          value="$75,000"
          icon={<FaDollarSign className="text-purple-600" />}
          bgColor="bg-purple-100 rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Tarjeta de Información Bancaria */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <TarjetaBancaria
          nombre={tarjetaBancaria.nombre}
          fechaVencimiento={tarjetaBancaria.fechaVencimiento}
          ultimosDigitos={tarjetaBancaria.ultimosDigitos}
          balanceEstimado={tarjetaBancaria.balanceEstimado}
        />
      </motion.div>

      {/* Transacciones */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-blue-600 uppercase mt-8">
          Transacciones
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <TransactionTable transactions={paginatedTransacciones} />
          <div className="flex justify-center mt-4">
            {renderPaginationButtons(
              transaccionPage,
              totalTransaccionPages,
              setTransaccionPage
            )}
          </div>
        </div>
      </motion.div>

      {/* Últimos Paquetes Vendidos */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-blue-600 uppercase mt-8">
          Últimos Paquetes Vendidos
        </h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow-lg p-6">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">
                  Imagen
                </th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">
                  Producto
                </th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">
                  Locación
                </th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">
                  Fecha
                </th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">
                  Cantidad
                </th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">
                  Precio
                </th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">
                  Estado
                </th>
              </tr>
            </thead>
            <motion.tbody>
              {paginatedPaquetes.map((paquete, index) => (
                <motion.tr
                  key={index}
                  className="border-b"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <td className="p-4">
                    <Image
                      src={paquete.imagen}
                      alt={paquete.producto}
                      width={50}
                      height={50}
                      className="rounded-lg"
                    />
                  </td>
                  <td className="p-4">{paquete.producto}</td>
                  <td className="p-4">{paquete.locacion}</td>
                  <td className="p-4">{paquete.fecha}</td>
                  <td className="p-4">{paquete.cantidad}</td>
                  <td className="p-4">{paquete.precio}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        paquete.estado === "Completado"
                          ? "bg-green-100 text-green-800"
                          : paquete.estado === "Pendiente"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {paquete.estado}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>

          {/* Paginación de Paquetes */}
          <div className="flex justify-center mt-4">
            {renderPaginationButtons(
              paquetePage,
              totalPaquetePages,
              setPaquetePage
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
