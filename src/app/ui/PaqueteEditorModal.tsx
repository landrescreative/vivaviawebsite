// app/ui/PaqueteEditorModal.tsx
import { useState } from "react";

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

interface PaqueteEditorModalProps {
  paquete: Paquete;
  onSave: (updatedPaquete: Paquete) => void;
  onClose: () => void;
}

export default function PaqueteEditorModal({
  paquete,
  onSave,
  onClose,
}: PaqueteEditorModalProps) {
  const [editedPaquete, setEditedPaquete] = useState<Paquete>(paquete);

  const handleChange = (field: keyof Paquete, value: string | number) => {
    setEditedPaquete((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(editedPaquete);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Editar Paquete</h2>

        <label className="block mb-2">
          Título
          <input
            type="text"
            value={editedPaquete.titulo}
            onChange={(e) => handleChange("titulo", e.target.value)}
            className="w-full p-2 border rounded-md mt-1"
          />
        </label>

        <label className="block mb-2">
          Destino
          <input
            type="text"
            value={editedPaquete.destino}
            onChange={(e) => handleChange("destino", e.target.value)}
            className="w-full p-2 border rounded-md mt-1"
          />
        </label>

        <label className="block mb-2">
          Estado
          <select
            value={editedPaquete.estado}
            onChange={(e) => handleChange("estado", e.target.value)}
            className="w-full p-2 border rounded-md mt-1"
          >
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
            <option value="Borrador">Borrador</option>
            <option value="Eliminado">Eliminado</option>
          </select>
        </label>

        <div className="flex justify-end space-x-4 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-md"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
