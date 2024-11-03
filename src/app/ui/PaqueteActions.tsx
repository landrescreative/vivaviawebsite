// app/ui/PaqueteActions.tsx
import { FaEdit, FaTrash, FaPowerOff } from "react-icons/fa";

interface PaqueteActionsProps {
  onEdit: () => void;
  onDelete: () => void;
  onToggleActive: () => void;
  isActive: boolean;
}

export default function PaqueteActions({
  onEdit,
  onDelete,
  onToggleActive,
  isActive,
}: PaqueteActionsProps) {
  return (
    <div className="border-t p-4 flex justify-around bg-gray-100 rounded-b-lg">
      <button
        onClick={onEdit}
        className="flex items-center text-blue-600 hover:text-blue-800"
      >
        <FaEdit className="mr-1" /> Editar
      </button>
      <button
        onClick={onDelete}
        className="flex items-center text-red-600 hover:text-red-800"
      >
        <FaTrash className="mr-1" /> Eliminar
      </button>
      <button
        onClick={onToggleActive}
        className={`flex items-center ${
          isActive
            ? "text-yellow-600 hover:text-yellow-800"
            : "text-green-600 hover:text-green-800"
        }`}
      >
        <FaPowerOff className="mr-1" /> {isActive ? "Desactivar" : "Activar"}
      </button>
    </div>
  );
}
