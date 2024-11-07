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
        className="p-2 md:hidden fixed top-4 right-4 z-50 text-white bg-blue-600 rounded-lg"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 h-full transition-transform transform bg-white ${
          isOpen ? "translate-x-0 right-0" : "translate-x-full right-0"
        } md:left-0 md:translate-x-0 md:static z-30 w-64 md:w-20 lg:w-64 p-6`}
      >
        <div className="flex flex-col mb-16 text-primary justify-center items-center">
          <h2 className="text-2xl font-bold hidden lg:block">VIVAVIA</h2>
          <h2 className="text-sm hidden lg:block">ADMINISTRACION</h2>
        </div>
        <nav className="space-y-4">
          <button
            onClick={() => navigate("/dashboard")}
            className={`flex items-center p-2 rounded-lg w-full font-semibold transition-colors hover:bg-gray-100 ${
              isActive("dashboard") ? "text-blue-700" : "text-gray-500"
            }`}
          >
            <FaHome
              className={`lg:mr-5 ${
                isActive("dashboard") ? "text-blue-700" : "text-gray-500"
              }`}
              size={isOpen ? 24 : 28} /* Icon size adjustment */
            />
            <span className="block ml-4 md:ml-0 md:hidden lg:inline">
              Dashboard
            </span>
          </button>
          <button
            onClick={() => navigate("/dashboard/paquetes")}
            className={`flex items-center p-2 rounded-lg w-full font-semibold transition-colors hover:bg-gray-100 ${
              isActive("paquetes") ? "text-blue-700" : "text-gray-500"
            }`}
          >
            <FaBox
              className={`lg:mr-5 ${
                isActive("paquetes") ? "text-blue-700" : "text-gray-500"
              }`}
              size={isOpen ? 24 : 28}
            />
            <span className="block ml-4 md:ml-0 md:hidden lg:inline">
              Paquetes
            </span>
          </button>
          <button
            onClick={() => navigate("/dashboard/finanzas")}
            className={`flex items-center p-2 rounded-lg w-full font-semibold transition-colors hover:bg-gray-100 ${
              isActive("finanzas") ? "text-blue-700" : "text-gray-500"
            }`}
          >
            <FaChartBar
              className={`lg:mr-5 ${
                isActive("finanzas") ? "text-blue-700" : "text-gray-500"
              }`}
              size={isOpen ? 24 : 28}
            />
            <span className="block ml-4 md:ml-0 md:hidden lg:inline">
              Finanzas
            </span>
          </button>
          <button
            onClick={() => navigate("/dashboard/soporte")}
            className={`flex items-center p-2 rounded-lg w-full font-semibold transition-colors hover:bg-gray-100 ${
              isActive("soporte") ? "text-blue-700" : "text-gray-500"
            }`}
          >
            <FaQuestionCircle
              className={`lg:mr-5 ${
                isActive("soporte") ? "text-blue-700" : "text-gray-500"
              }`}
              size={isOpen ? 24 : 28}
            />
            <span className="block ml-4 md:ml-0 md:hidden lg:inline">
              Soporte
            </span>
          </button>
          <button
            onClick={() => navigate("/dashboard/blog")}
            className={`flex items-center p-2 rounded-lg w-full font-semibold transition-colors hover:bg-gray-100 ${
              isActive("blog") ? "text-blue-700" : "text-gray-500"
            }`}
          >
            <FaBlog
              className={`lg:mr-5 ${
                isActive("blog") ? "text-blue-700" : "text-gray-500"
              }`}
              size={isOpen ? 24 : 28}
            />
            <span className="block ml-4 md:ml-0 md:hidden lg:inline">Blog</span>
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
