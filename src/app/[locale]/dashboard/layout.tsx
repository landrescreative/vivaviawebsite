// app/[locale]/dashboard/layout.tsx
"use client";
import "../globals.css";
import { usePathname } from "next/navigation";
import TopBar from "@/app/ui/TopBar";
import Sidebar from "@/app/ui/Sidebar";
import { ReactNode, useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface DashboardLayoutProps {
  children: ReactNode;
}

// Crear la instancia del QueryClient fuera del componente para evitar recrearla en cada renderizado
const queryClient = new QueryClient();

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  // Uso de useMemo para almacenar los títulos de cada página, evitando recrearlos en cada render
  const pageTitles = useMemo(
    () => ({
      "/dashboard": "Dashboard",
      "/dashboard/paquetes": "Paquetes",
      "/dashboard/finanzas": "Finanzas",
      "/dashboard/soporte": "Soporte",
      "/dashboard/blog": "Blog",
    }),
    []
  );

  const title = pageTitles[pathname] || "Dashboard";

  const handleLogout = () => {
    // Lógica de cierre de sesión
    console.log("Cerrar sesión");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Contenido Principal */}
        <div className="flex flex-col flex-1">
          {/* Barra Superior */}
          <TopBar title={title} onLogout={handleLogout} />

          {/* Contenido de la Página */}
          <main className="flex-1 p-6 bg-[#F6FAFF] overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </QueryClientProvider>
  );
}
