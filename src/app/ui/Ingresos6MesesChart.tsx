// app/ui/Ingresos6MesesChart.tsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ingresos6Meses = [
  { mes: "Abr", ingresos: 2000 },
  { mes: "May", ingresos: 3000 },
  { mes: "Jun", ingresos: 2500 },
  { mes: "Jul", ingresos: 3200 },
  { mes: "Ago", ingresos: 4000 },
  { mes: "Sep", ingresos: 4500 },
];

export default function Ingresos6MesesChart() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-blue-600 uppercase mb-4">
        Ingresos de los Últimos 6 Meses
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={ingresos6Meses}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="ingresos" fill="#16DBCC" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
