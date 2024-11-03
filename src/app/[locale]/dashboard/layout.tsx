"use client";
// app/[locale]/dashboard/layout.tsx
import Sidebar from "../../ui/Sidebar";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
