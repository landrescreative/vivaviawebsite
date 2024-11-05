// app/[locale]/(dashboard)/page.tsx
"use client";

import { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import DashboardCard from "@/app/ui/DashboardCard";
import {
  FaMoneyBillWave,
  FaSuitcase,
  FaPlaneDeparture,
  FaTags,
  FaChartLine,
} from "react-icons/fa";

// Lazy load de componentes secundarios
const TransactionTable = lazy(() => import("@/app/ui/TransactionTable"));
const BlogStatsTable = lazy(() => import("@/app/ui/BlogStatsTable"));
const SupportTicketCard = lazy(() => import("@/app/ui/SupportTicketCard"));

// Tipos de datos de la API
interface DashboardData {
  balanceMensual: number;
  balanceGeneral: number;
  ultimoViaje: {
    destino: string;
    fecha: string;
  };
  paquetesActivos: number;
  paquetesEnPromocion: number;
  paquetesVendidosMes: number;
}

interface Transaccion {
  icono: string;
  viaje: string;
  fechaViaje: string;
  formaPago: string;
  ultimosDigitosTarjeta: string;
  status: string;
  monto: number;
}

interface BlogEstadistica {
  icono: string;
  titulo: string;
  descripcion: string;
  visitas: number;
}

interface TicketSoporte {
  icono: string;
  asunto: string;
  remitente: string;
  mensaje: string;
  estatus: string;
}

export default function DashboardHome() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  const [transacciones, setTransacciones] = useState<Transaccion[]>([]);
  const [estadisticasBlogs, setEstadisticasBlogs] = useState<BlogEstadistica[]>(
    []
  );
  const [ticketsSoporte, setTicketsSoporte] = useState<TicketSoporte[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch("/data/dashboardData.json");
        const data = await response.json();
        setDashboardData(data.dashboardData);
        setTransacciones(data.transacciones);
        setEstadisticasBlogs(data.estadisticasBlogs);
        setTicketsSoporte(data.ticketsSoporte);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  // Variantes de animación
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Estilos para los títulos
  const titleStyle =
    "text-2xl font-semibold text-primary uppercase border-b pb-2 mb-4";

  return (
    <div className="p-6 space-y-6">
      {/* Tarjetas de datos del dashboard */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <DashboardCard
          title="Balance Mensual"
          value={`$${dashboardData?.balanceMensual}`}
          icon={<FaMoneyBillWave className="text-blue-500" />}
          bgColor="bg-blue-700"
          iconBgColor="bg-blue-200"
          valueColor="text-white"
          titleColor="text-white"
        />
        <DashboardCard
          title="Balance General"
          value={`$${dashboardData?.balanceGeneral}`}
          icon={<FaChartLine className="text-pink-500" />}
          bgColor="bg-white"
          iconBgColor="bg-pink-200"
          titleColor="text-[#718EBF]"
        />
        <DashboardCard
          title="Último Viaje"
          value={`${dashboardData?.ultimoViaje.destino}`}
          icon={<FaPlaneDeparture className="text-teal-500" />}
          bgColor="bg-white"
          iconBgColor="bg-teal-100"
          titleColor="text-[#718EBF]"
        />
        <DashboardCard
          title="Paquetes Activos"
          value={dashboardData?.paquetesActivos}
          icon={<FaSuitcase className="text-blue-500" />}
          bgColor="bg-white"
          iconBgColor="bg-blue-100"
          titleColor="text-[#718EBF]"
        />
        <DashboardCard
          title="Paquetes en Promoción"
          value={dashboardData?.paquetesEnPromocion}
          icon={<FaTags className="text-yellow-500" />}
          bgColor="bg-white"
          iconBgColor="bg-yellow-100"
          titleColor="text-[#718EBF]"
        />
        <DashboardCard
          title="VENDIDOS ESTE MES"
          value={dashboardData?.paquetesVendidosMes}
          icon={<FaSuitcase className="text-orange-500" />}
          bgColor="bg-white"
          iconBgColor="bg-orange-100"
          titleColor="text-[#718EBF]"
        />
      </motion.div>

      {/* Tabla de Transacciones */}
      <motion.div
        className="mt-8 "
        initial="hidden"
        animate="visible"
        variants={slideUp}
      >
        <h2 className={titleStyle}>Transacciones</h2>
        <Suspense fallback={<div>Cargando tabla de transacciones...</div>}>
          <TransactionTable transactions={transacciones.slice(0, 3)} />
        </Suspense>
      </motion.div>

      {/* Tabla de Estadísticas de Blogs */}
      <motion.div
        className="mt-8"
        initial="hidden"
        animate="visible"
        variants={slideUp}
      >
        <h2 className={titleStyle}>Estadísticas de Blogs</h2>
        <Suspense fallback={<div>Cargando estadísticas de blogs...</div>}>
          <BlogStatsTable blogStats={estadisticasBlogs.slice(0, 4)} />
        </Suspense>
      </motion.div>

      {/* Tickets de Soporte */}
      <motion.div
        className="mt-8"
        initial="hidden"
        animate="visible"
        variants={slideUp}
      >
        <h2 className={titleStyle}>Tickets de Soporte pendientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Suspense fallback={<div>Cargando tickets de soporte...</div>}>
            {ticketsSoporte.slice(0, 2).map((ticket, index) => (
              <SupportTicketCard
                key={index}
                icono={ticket.icono}
                asunto={ticket.asunto}
                remitente={ticket.remitente}
                mensaje={ticket.mensaje}
                estatus={ticket.estatus}
              />
            ))}
          </Suspense>
        </div>
      </motion.div>
    </div>
  );
}
