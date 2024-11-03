// app/[locale]/dashboard/paquetes/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DashboardCard from "@/app/ui/DashboardCard";
import PaqueteCard from "@/app/ui/PaqueteCard";
import PaqueteEditorModal from "@/app/ui/PaqueteEditorModal";
import { FaSuitcase, FaTags, FaPlaneDeparture, FaPlus } from "react-icons/fa";

interface Paquete {
  id: number;
  estado: string;
  titulo: string;
  destino: string;
  salida: string;
  vuelo: {
    aerolinea: string;
    salida: string;
    destino: string;
  };
  hospedaje: {
    hotel: string;
  };
  resumen: {
    precioPorPersona: number;
    incluye: string[];
  };
}

const paquetesActivos: Paquete[] = [
  {
    id: 1,
    estado: "Activo",
    titulo: "Paquete Cancún Todo Incluido",
    destino: "Cancún, México",
    salida: "2023-11-15",
    vuelo: { aerolinea: "AeroMéxico", salida: "CDMX", destino: "Cancún" },
    hospedaje: { hotel: "Hotel Cancún Resort" },
    resumen: {
      precioPorPersona: 1200,
      incluye: ["Vuelo", "Hospedaje", "Desayuno"],
    },
  },
  {
    id: 2,
    estado: "Borrador",
    titulo: "Paquete Tulum Aventura",
    destino: "Tulum, México",
    salida: "2023-12-01",
    vuelo: { aerolinea: "Interjet", salida: "Guadalajara", destino: "Tulum" },
    hospedaje: { hotel: "Tulum Paradise Hotel" },
    resumen: {
      precioPorPersona: 1500,
      incluye: ["Vuelo", "Hospedaje", "Tour a Ruinas"],
    },
  },
  {
    id: 3,
    estado: "Inactivo",
    titulo: "Playa del Carmen Relax",
    destino: "Playa del Carmen, México",
    salida: "2024-01-10",
    vuelo: {
      aerolinea: "Volaris",
      salida: "CDMX",
      destino: "Playa del Carmen",
    },
    hospedaje: { hotel: "Playa del Carmen Beach Hotel" },
    resumen: {
      precioPorPersona: 1300,
      incluye: ["Vuelo", "Hospedaje", "Cena"],
    },
  },
];

export default function PaquetesPage() {
  const router = useRouter();
  const [paquetes, setPaquetes] = useState<Paquete[]>(paquetesActivos);
  const [selectedPaquete, setSelectedPaquete] = useState<Paquete | null>(null);

  const handleEdit = (id: number) => {
    const paquete = paquetes.find((p) => p.id === id);
    if (paquete) setSelectedPaquete(paquete);
  };

  const handleSave = (updatedPaquete: Paquete) => {
    setPaquetes((prevPaquetes) =>
      prevPaquetes.map((paquete) =>
        paquete.id === updatedPaquete.id ? updatedPaquete : paquete
      )
    );
    setSelectedPaquete(null);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este paquete?")) {
      setPaquetes(paquetes.filter((paquete) => paquete.id !== id));
    }
  };

  const handleToggleActive = (id: number) => {
    setPaquetes(
      paquetes.map((paquete) =>
        paquete.id === id
          ? {
              ...paquete,
              estado: paquete.estado === "Activo" ? "Inactivo" : "Activo",
            }
          : paquete
      )
    );
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600 uppercase">Paquetes</h1>

      {/* Tarjetas de métricas de paquetes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Paquetes Activos"
          value={paquetes.filter((p) => p.estado === "Activo").length}
          icon={<FaSuitcase className="text-blue-600" />}
          bgColor="bg-blue-100"
        />
        <DashboardCard
          title="Paquetes en Promoción"
          value={5}
          icon={<FaTags className="text-orange-600" />}
          bgColor="bg-orange-100"
        />
        <DashboardCard
          title="Vendidos Este Mes"
          value={12}
          icon={<FaPlaneDeparture className="text-green-600" />}
          bgColor="bg-green-100"
        />
      </div>

      {/* Separador y botón de nuevo */}
      <div className="flex justify-between items-center mt-8">
        <h2 className="text-2xl font-semibold text-blue-600 uppercase">
          Paquetes Activos
        </h2>
        <button
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={() => router.push("/dashboard/paquetes/nuevo")}
        >
          <FaPlus className="mr-2" />
          Nuevo Paquete
        </button>
      </div>

      {/* Lista de tarjetas de paquetes activos */}
      <div className="space-y-4 mt-4">
        {paquetes.map((paquete) => (
          <PaqueteCard
            key={paquete.id}
            paquete={paquete}
            onEdit={() => handleEdit(paquete.id)}
            onDelete={() => handleDelete(paquete.id)}
            onToggleActive={() => handleToggleActive(paquete.id)}
          />
        ))}
      </div>

      {/* Modal para editar paquete */}
      {selectedPaquete && (
        <PaqueteEditorModal
          paquete={selectedPaquete}
          onSave={handleSave}
          onClose={() => setSelectedPaquete(null)}
        />
      )}
    </div>
  );
}
