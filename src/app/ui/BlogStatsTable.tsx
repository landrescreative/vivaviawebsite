// app/ui/BlogStatsTable.tsx
interface BlogStats {
  icono: string;
  titulo: string;
  descripcion: string;
  visitas: number;
}

interface BlogStatsTableProps {
  blogStats: BlogStats[];
}

export default function BlogStatsTable({ blogStats }: BlogStatsTableProps) {
  // Limitar las entradas de blog a las primeras 4
  const limitedBlogStats = blogStats.slice(0, 4);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="p-4 text-left text-sm font-semibold text-gray-600">
              Entrada
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-600">
              Visitas
            </th>
          </tr>
        </thead>
        <tbody>
          {limitedBlogStats.map((blog, index) => (
            <tr key={index} className="border-b">
              <td className="p-4">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2 text-2xl">📘</span>
                  <div>
                    <p className="font-semibold">{blog.titulo}</p>
                    <p className="text-sm text-gray-600">{blog.descripcion}</p>
                  </div>
                </div>
              </td>
              <td className="p-4 text-center">{blog.visitas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
