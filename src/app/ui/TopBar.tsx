// app/ui/TopBar.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Importar usePathname
import { FaUserCircle } from "react-icons/fa";
import NotificationDropdown from "@/app/ui/NotificationDropdown";

interface TopBarProps {
  onLogout: () => void;
}

export default function TopBar({ onLogout }: TopBarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [title, setTitle] = useState("Dashboard");
  const pathname = usePathname(); // Obtener la ruta actual

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    // Mapa de títulos basado en la ruta sin el prefijo de idioma
    const routeTitles: { [key: string]: string } = {
      "/dashboard": "Dashboard",
      "/dashboard/paquetes": "Paquetes",
      "/dashboard/finanzas": "Finanzas",
      "/dashboard/soporte": "Soporte",
      "/dashboard/blog": "Blog",
    };

    // Quitar el prefijo de idioma de la ruta
    const normalizedPath = pathname.replace(/^\/[a-z]{2}/, ""); // Elimina "/es" o cualquier prefijo de dos letras

    // Establece el título en función de la ruta actual sin el prefijo de idioma
    const matchedTitle = routeTitles[normalizedPath] || "Dashboard";
    setTitle(matchedTitle);
  }, [pathname]); // Escucha cambios en pathname

  return (
    <div className="flex justify-between items-center p-4 bg-white  text-primary shadow-md">
      <h1 className="text-lg font-bold uppercase">{title}</h1>

      <div className="flex items-center space-x-4">
        {/* Notificación */}
        <NotificationDropdown />

        {/* Usuario */}
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center">
            <FaUserCircle className="text-2xl" />
          </button>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-gray-700">
              <button
                onClick={onLogout}
                className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
