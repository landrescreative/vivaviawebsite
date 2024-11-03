// app/ui/TopBar.tsx
"use client";

import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import NotificationDropdown from "@/app/ui/NotificationDropdown";

interface TopBarProps {
  title: string;
  onLogout: () => void;
}

export default function TopBar({ title, onLogout }: TopBarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
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
