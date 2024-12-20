"use client";
import BlogStatsTable from "@/app/ui/BlogStatsTable";
import DashboardEntries from "@/app/ui/DashboardEntries";
import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";

// app/[locale]/dashboard/blog/page.tsx
export default function Blog() {
  const [estadisticasBlogs, setEstadisticasBlogs] = useState<BlogEstadistica[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch("/data/dashboardData.json");
        const data = await response.json();
        setEstadisticasBlogs(data.estadisticasBlogs);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const titleStyle =
    "text-2xl font-semibold text-primary uppercase border-b pb-2 mb-4";

  return (
    <motion.div
      className="mt-8"
      initial="hidden"
      animate="visible"
      variants={slideUp}
    >
      <h2 className={titleStyle}>Estadísticas de Blogs</h2>
      <Suspense fallback={<div>Cargando estadísticas de blogs...</div>}>
        <BlogStatsTable blogStats={estadisticasBlogs.slice(0, 4)} />
        <DashboardEntries />
      </Suspense>
    </motion.div>
  );
}
