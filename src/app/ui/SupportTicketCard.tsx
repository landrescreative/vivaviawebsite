// app/ui/SupportTicketCard.tsx
import { FaEnvelope } from "react-icons/fa";

interface SupportTicketCardProps {
  icono: string;
  asunto: string;
  remitente: string;
  mensaje: string;
  estatus: string;
}

export default function SupportTicketCard({
  icono,
  asunto,
  remitente,
  mensaje,
  estatus,
}: SupportTicketCardProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border">
      {/* Cabecera de la tarjeta */}
      <div className="flex items-center mb-4">
        <FaEnvelope className="text-blue-500 mr-2 text-2xl" />
        <div>
          <h3 className="text-lg font-semibold">{asunto}</h3>
          <p className="text-sm text-gray-600">De: {remitente}</p>
        </div>
        <button className="ml-auto text-sm text-blue-600 hover:underline">
          Ver mensaje
        </button>
      </div>

      {/* Vista previa del mensaje */}
      <p className="text-gray-700 text-sm mb-4">{mensaje}</p>

      {/* Barra de estatus */}
      <div
        className={`p-2 text-center text-sm font-semibold rounded-lg ${
          estatus === "Resuelto"
            ? "bg-green-100 text-green-600"
            : estatus === "Pendiente"
            ? "bg-yellow-100 text-yellow-600"
            : "bg-red-100 text-red-600"
        }`}
      >
        {estatus}
      </div>
    </div>
  );
}
