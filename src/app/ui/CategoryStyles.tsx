// app/ui/categoryStyles.tsx
import {
  FaQuestionCircle,
  FaLifeRing,
  FaInfoCircle,
  FaUserShield,
} from "react-icons/fa";

export const categoryStyles = {
  Duda: {
    color: "bg-yellow-100 text-yellow-700",
    icon: <FaQuestionCircle className="text-yellow-500 mr-2" />,
  },
  Soporte: {
    color: "bg-blue-100 text-blue-700",
    icon: <FaLifeRing className="text-blue-500 mr-2" />,
  },
  Info: {
    color: "bg-green-100 text-green-700",
    icon: <FaInfoCircle className="text-green-500 mr-2" />,
  },
  Cuenta: {
    color: "bg-purple-100 text-purple-700",
    icon: <FaUserShield className="text-purple-500 mr-2" />,
  },
};
