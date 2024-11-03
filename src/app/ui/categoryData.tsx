// src/app/ui/categoryData.ts
import {
  FaQuestionCircle,
  FaLifeRing,
  FaInfoCircle,
  FaUserShield,
} from "react-icons/fa";

export const categoryIcons = {
  Duda: <FaQuestionCircle className="text-yellow-500 mr-2" />,
  Soporte: <FaLifeRing className="text-blue-500 mr-2" />,
  Info: <FaInfoCircle className="text-green-500 mr-2" />,
  Cuenta: <FaUserShield className="text-purple-500 mr-2" />,
};

export const categoryColors = {
  Duda: "bg-yellow-100 text-yellow-700",
  Soporte: "bg-blue-100 text-blue-700",
  Info: "bg-green-100 text-green-700",
  Cuenta: "bg-purple-100 text-purple-700",
};
