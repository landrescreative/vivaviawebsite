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
import { useFinancesData } from "./hooks/useTransactions";

export default function FinanzasPage() {
  // Estado para la paginación
  const [paquetePage, setPaquetePage] = useState(0);
  const [transaccionPage, setTransaccionPage] = useState(0);
  const itemsPerPagePaquetes = 5;
  const itemsPerPageTransacciones = 3;

  const { data, isLoading } = useFinancesData();

  if (isLoading) return <p>Cargando datos...</p>;

  const { tarjetaBancaria, transacciones, paquetesVendidos } = data;

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
      <h2 className="text-3xl font-bold text-blue-600 uppercase mb-8">
        HISTORIAL DE INGRESOS
      </h2>

      {/* Gráficas de Ingresos */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-8"
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
          bgColor="bg-blue-700"
          iconBgColor="bg-blue-200"
          valueColor="text-white"
          titleColor="text-white"
        />
        <DashboardCard
          title="Balance General"
          value="$35,200"
          icon={<FaBalanceScale className="text-pink-500" />}
          bgColor="bg-white"
          iconBgColor="bg-pink-200"
          titleColor="text-[#718EBF]"
        />
        <DashboardCard
          title="Último Viaje"
          value="$2,000"
          icon={<FaPlane className="text-teal-500" />}
          bgColor="bg-white"
          iconBgColor="bg-teal-100"
          titleColor="text-[#718EBF]"
        />
        <DashboardCard
          title="Ingresos Totales"
          value="$75,000"
          icon={<FaDollarSign className="text-purple-600" />}
          bgColor="bg-white"
          iconBgColor="bg-purple-100"
          titleColor="text-[#718EBF]"
        />
      </motion.div>

      {/* Tarjeta de Información Bancaria */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-blue-600 uppercase my-8">
          TARJETAS
        </h2>
        <TarjetaBancaria {...tarjetaBancaria} />
      </motion.div>

      {/* Transacciones */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-blue-600 uppercase my-8">
          Transacciones
        </h2>
        <TransactionTable transactions={paginatedTransacciones} />
        <div className="flex justify-center mt-4">
          {renderPaginationButtons(
            transaccionPage,
            totalTransaccionPages,
            setTransaccionPage
          )}
        </div>
      </motion.div>

      {/* Últimos Paquetes Vendidos */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-blue-600 uppercase my-8">
          Últimos Paquetes Vendidos
        </h2>
        <div className="overflow-x-auto bg-white rounded-3xl shadow-lg p-6">
          <table className="min-w-full bg-white">
            <thead className="bg-primary rounded-2xl">
              <tr>
                <th className="p-4 text-left text-sm font-semibold text-white">
                  Imagen
                </th>
                <th className="p-4 text-left text-sm font-semibold text-white">
                  Producto
                </th>
                <th className="p-4 text-left text-sm font-semibold text-white">
                  Locación
                </th>
                <th className="p-4 text-left text-sm font-semibold text-white">
                  Fecha
                </th>
                <th className="p-4 text-left text-sm font-semibold text-white">
                  Cantidad
                </th>
                <th className="p-4 text-left text-sm font-semibold text-white">
                  Precio
                </th>
                <th className="p-4 text-left text-sm font-semibold text-white">
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
