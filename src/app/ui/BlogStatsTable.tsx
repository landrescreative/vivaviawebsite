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
    <div className="overflow-x-auto shadow-2xl rounded-3xl shadow-black/5">
      <table className="min-w-full bg-white rounded-3xl">
        <thead className="">
          <tr>
            <th className="px-10 py-6 text-left text-sm font-semibold text-gray-600 uppercase">
              Entrada
            </th>
            <th className="px-10 py-6 text-left text-sm font-semibold text-gray-600 uppercase">
              Visitas
            </th>
          </tr>
        </thead>
        <tbody>
          {limitedBlogStats.map((blog, index) => (
            <tr key={index} className="border-b">
              <td className="p-4">
                <div className="flex items-start">
                  <img
                    src="/paisaje.jpg"
                    width={40}
                    height={40}
                    className="rounded-full w-14 h-14 mr-4"
                    alt="Paisaje"
                  />
                  <div>
                    <p className="font-medium">{blog.titulo}</p>
                    <p className="text-sm text-[#718EBF]">{blog.descripcion}</p>
                  </div>
                </div>
              </td>
              <td className="p-4 text-center text-primary">{blog.visitas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
