// app/[locale]/dashboard/layout.tsx
"use client";

import { usePathname } from "next/navigation";
import TopBar from "@/app/ui/TopBar";
import Sidebar from "@/app/ui/Sidebar"; // Asegúrate de que existe un componente Sidebar con tus rutas

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const pageTitles: { [key: string]: string } = {
    "/dashboard": "Dashboard",
    "/dashboard/paquetes": "Paquetes",
    "/dashboard/finanzas": "Finanzas",
    "/dashboard/soporte": "Soporte",
    "/dashboard/blog": "Blog",
  };

  const title = pageTitles[pathname] || "Dashboard";

  const handleLogout = () => {
    // Aquí puedes agregar la lógica para cerrar sesión
    console.log("Cerrar sesión");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* TopBar */}
        <TopBar title={title} onLogout={handleLogout} />

        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
