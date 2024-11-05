// app/ui/Ingresos12MesesChart.tsx
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

// Encontrar el ingreso más alto
const maxIngreso = Math.max(...ingresos12Meses.map((item) => item.ingresos));

export default function Ingresos12MesesChart() {
  return (
    <div className="bg-white  shadow-2xl shadow-black/5 rounded-3xl p-6 col-span-2 md:col-span-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={ingresos12Meses}>
          <XAxis dataKey="mes" />
          <Tooltip />
          <Bar dataKey="ingresos" radius={[10, 10, 0, 0]}>
            {ingresos12Meses.map((entry, index) => (
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
