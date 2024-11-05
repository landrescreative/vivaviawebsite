// components/ui/Sidebar.tsx
"use client";

import { useState } from "react";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import {
  FaHome,
  FaBox,
  FaChartBar,
  FaQuestionCircle,
  FaBlog,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const activeSegment = useSelectedLayoutSegment();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigate = (path: string) => {
    router.push(path);
    setIsOpen(false); // Close sidebar on mobile navigation
  };

  const isActive = (segment: string) =>
    segment === "dashboard"
      ? activeSegment === null
      : activeSegment === segment;

  return (
    <div className="flex">
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="p-2 md:hidden fixed top-4 left-4 z-20 text-white bg-blue-600 rounded-lg"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white p-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:flex-shrink-0`}
      >
        <div className="flex flex-col mb-16 text-primary justify-center items-center">
          <h2 className="text-2xl font-bold">VIVAVIA</h2>
          <h2 className="text-sm">ADMINISTRACION</h2>
        </div>
        <nav className="space-y-4">
          <button
            onClick={() => navigate("/dashboard")}
            className={`flex items-center p-2 text-lg rounded-lg w-full font-semibold transition-colors hover:bg-gray-100 ${
              isActive("dashboard") ? "text-blue-700" : "text-gray-500"
            }`}
          >
            <FaHome
              className={`mr-5 ${
                isActive("dashboard") ? "text-blue-700" : "text-gray-500"
              }`}
            />
            <span>{isActive("dashboard") ? "Dashboard" : "Dashboard"}</span>
          </button>
          <button
            onClick={() => navigate("/dashboard/paquetes")}
            className={`flex items-center p-2 text-lg rounded-lg w-full font-semibold transition-colors hover:bg-gray-100 ${
              isActive("paquetes") ? "text-blue-700" : "text-gray-500"
            }`}
          >
            <FaBox
              className={`mr-5 ${
                isActive("paquetes") ? "text-blue-700" : "text-gray-500"
              }`}
            />
            <span>Paquetes</span>
          </button>
          <button
            onClick={() => navigate("/dashboard/finanzas")}
            className={`flex items-center p-2 text-lg rounded-lg w-full font-semibold transition-colors hover:bg-gray-100 ${
              isActive("finanzas") ? "text-blue-700" : "text-gray-500"
            }`}
          >
            <FaChartBar
              className={`mr-5 ${
                isActive("finanzas") ? "text-blue-700" : "text-gray-500"
              }`}
            />
            <span>Finanzas</span>
          </button>
          <button
            onClick={() => navigate("/dashboard/soporte")}
            className={`flex items-center p-2 text-lg rounded-lg w-full font-semibold transition-colors hover:bg-gray-100 ${
              isActive("soporte") ? "text-blue-700" : "text-gray-500"
            }`}
          >
            <FaQuestionCircle
              className={`mr-5 ${
                isActive("soporte") ? "text-blue-700" : "text-gray-500"
              }`}
            />
            <span>Soporte</span>
          </button>
          <button
            onClick={() => navigate("/dashboard/blog")}
            className={`flex items-center p-2 text-lg rounded-lg w-full font-semibold transition-colors hover:bg-gray-100 ${
              isActive("blog") ? "text-blue-700" : "text-gray-500"
            }`}
          >
            <FaBlog
              className={`mr-5 ${
                isActive("blog") ? "text-blue-700" : "text-gray-500"
              }`}
            />
            <span>Blog</span>
          </button>
        </nav>
      </div>

      {/* Semi-transparent background when sidebar is open on small screens */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
        ></div>
      )}
    </div>
  );
}
