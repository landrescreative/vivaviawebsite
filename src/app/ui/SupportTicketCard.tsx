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
    <div className=" bg-white rounded-lg shadow-md border">
      {/* Cabecera de la tarjeta */}
      <div className="flex items-center mb-4 gap-2 p-4">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-primary rounded-full">
          <FaEnvelope className="text-xl" />
        </div>
        <div>
          <h3 className="text-md font-medium">{asunto}</h3>
          <p className="text-sm text-[#718ebf]">De: {remitente}</p>
        </div>
        <button className="ml-auto text-sm text-white bg-primary py-2 px-5 uppercase rounded-full hover:underline">
          Ver mensaje
        </button>
      </div>

      {/* Vista previa del mensaje */}
      <p className="text-[#718ebf] text-sm mb-4 px-4">{mensaje}</p>

      {/* Barra de estatus */}
      <div
        className={`p-2 m-0 text-center text-sm font-semibold rounded-lg ${
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
