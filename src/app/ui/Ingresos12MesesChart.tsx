// app/ui/Ingresos12MesesChart.tsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ingresos12Meses = [
  { mes: "Oct", ingresos: 3000 },
  { mes: "Nov", ingresos: 3200 },
  { mes: "Dic", ingresos: 4200 },
  { mes: "Ene", ingresos: 2500 },
  { mes: "Feb", ingresos: 2700 },
  { mes: "Mar", ingresos: 3500 },
  { mes: "Abr", ingresos: 4000 },
  { mes: "May", ingresos: 4200 },
  { mes: "Jun", ingresos: 3700 },
  { mes: "Jul", ingresos: 4500 },
  { mes: "Ago", ingresos: 4800 },
  { mes: "Sep", ingresos: 5000 },
];

export default function Ingresos12MesesChart() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-blue-600 uppercase mb-4">
        Ingresos de los Últimos 12 Meses
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={ingresos12Meses}>
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
