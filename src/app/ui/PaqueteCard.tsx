// app/ui/PaqueteCard.tsx
import PaqueteActions from "@/app/ui/PaqueteActions";

interface VueloInfo {
  aerolinea: string;
  salida: string;
  destino: string;
}

interface HospedajeInfo {
  hotel: string;
}

interface ResumenInfo {
  precioPorPersona: number;
  incluye: string[];
}

interface Paquete {
  id: number;
  estado: string;
  titulo: string;
  destino: string;
  salida: string;
  vuelo: VueloInfo;
  hospedaje: HospedajeInfo;
  resumen: ResumenInfo;
}

interface PaqueteCardProps {
  paquete: Paquete;
  onEdit: () => void;
  onDelete: () => void;
  onToggleActive: () => void;
}

// Función para asignar color basado en el estado
const getEstadoColor = (estado: string) => {
  switch (estado) {
    case "Activo":
      return "bg-green-500"; // Verde para Activo
    case "Inactivo":
      return "bg-gray-500"; // Gris para Inactivo
    case "Borrador":
      return "bg-blue-500"; // Azul para Borrador
    case "Eliminado":
      return "bg-red-500"; // Rojo para Eliminado
    default:
      return "bg-gray-500"; // Color por defecto
  }
};

export default function PaqueteCard({
  paquete,
  onEdit,
  onDelete,
  onToggleActive,
}: PaqueteCardProps) {
  const isActive = paquete.estado === "Activo";
  const estadoColor = getEstadoColor(paquete.estado); // Obtiene el color del estado

  return (
    <div className="bg-white rounded-lg shadow-md flex">
      {/* Estado en Vertical con Color Dinámico */}
      <div
        className={`flex flex-col justify-center items-center w-16 text-white rounded-l-lg ${estadoColor}`}
      >
        <span className="transform rotate-90 font-semibold uppercase whitespace-nowrap text-sm">
          {paquete.estado}
        </span>
      </div>

      {/* Detalles del Paquete */}
      <div className="flex-grow flex flex-col">
        {/* Título, Destino y Salida (Fondo Azul Completo) */}
        <div className="bg-primary text-white p-4 flex flex-col space-y-2 rounded-tr-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">{paquete.titulo}</h3>
            <p className="text-sm">
              {paquete.destino} | Salida: {paquete.salida}
            </p>
          </div>

          {/* Encabezados dentro de la Zona Azul */}
          <div className="grid grid-cols-3 gap-4 text-sm font-bold">
            <p>Vuelo</p>
            <p>Hospedaje</p>
            <p>Resumen del Paquete</p>
          </div>
        </div>

        {/* Información del paquete con fondo blanco */}
        <div className="p-6 grid grid-cols-3 gap-4 flex-grow">
          {/* Información de Vuelo */}
          <div>
            <p className="text-gray-600">
              Aerolínea: {paquete.vuelo.aerolinea}
            </p>
            <p className="text-gray-600">Salida: {paquete.vuelo.salida}</p>
            <p className="text-gray-600">Destino: {paquete.vuelo.destino}</p>
          </div>

          {/* Información de Hospedaje */}
          <div>
            <p className="text-gray-600">Hotel: {paquete.hospedaje.hotel}</p>
          </div>

          {/* Resumen del Paquete */}
          <div>
            <p className="text-gray-600">
              Precio por Persona: ${paquete.resumen.precioPorPersona}
            </p>
            <p className="text-gray-600">
              Incluye: {paquete.resumen.incluye.join(", ")}
            </p>
          </div>
        </div>

        {/* Botones de Acción */}
        <PaqueteActions
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleActive={onToggleActive}
          isActive={isActive}
        />
      </div>
    </div>
  );
}
