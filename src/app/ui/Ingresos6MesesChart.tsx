// app/ui/Ingresos6MesesChart.tsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const ingresos6Meses = [
  { mes: "Abr", ingresos: 2000 },
  { mes: "May", ingresos: 3000 },
  { mes: "Jun", ingresos: 2500 },
  { mes: "Jul", ingresos: 3200 },
  { mes: "Ago", ingresos: 4000 },
  { mes: "Sep", ingresos: 4500 },
];

// Encontrar el ingreso más alto
const maxIngreso = Math.max(...ingresos6Meses.map((item) => item.ingresos));

export default function Ingresos6MesesChart() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl shadow-black/5 p-4 flex justify-center items-center col-span-2">
      <ResponsiveContainer width="100%">
        <BarChart data={ingresos6Meses}>
          <XAxis dataKey="mes" className="text-sm text-slate-400" />
          <Tooltip />
          <Bar dataKey="ingresos" radius={[10, 10, 0, 0]}>
            {ingresos6Meses.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.ingresos === maxIngreso ? "#16DBCC" : "#edf0f7"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
