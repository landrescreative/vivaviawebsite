"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProfileRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Obtener el userId desde el localStorage
    const userId = localStorage.getItem("userId");

    if (userId) {
      // Redirigir al perfil específico del usuario si está autenticado
      router.push(`/profile/${userId}`);
    } else {
      // Si no hay userId, redirigir al inicio de sesión
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <p className="text-gray-700">Redirigiendo a tu perfil...</p>
    </div>
  );
}
