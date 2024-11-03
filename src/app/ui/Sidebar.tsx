"use client ";
// components/Sidebar.tsx
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-64 bg-indigo-700 text-white flex flex-col h-full">
      <div className="p-4 text-2xl font-bold">Mi Dashboard</div>
      <nav className="flex-1">
        <ul>
          <li>
            <Link href="/dashboard" className="block p-4 hover:bg-indigo-600">
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/paquetes"
              className="block p-4 hover:bg-indigo-600"
            >
              Paquetes
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/finanzas"
              className="block p-4 hover:bg-indigo-600"
            >
              Finanzas
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/soporte"
              className="block p-4 hover:bg-indigo-600"
            >
              Soporte
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/blog"
              className="block p-4 hover:bg-indigo-600"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <button
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            router.push("/login");
          }}
          className="w-full p-2 bg-red-500 hover:bg-red-600 rounded"
        >
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
}
