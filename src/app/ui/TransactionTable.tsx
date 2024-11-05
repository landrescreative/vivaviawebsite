// app/ui/TransactionTable.tsx
interface Transaccion {
  icono: string;
  viaje: string;
  fechaViaje: string;
  formaPago: string;
  ultimosDigitosTarjeta: string;
  status: string;
  monto: number;
}

interface TransactionTableProps {
  transactions: Transaccion[];
}

export default function TransactionTable({
  transactions,
}: TransactionTableProps) {
  // Limitar las transacciones a las primeras 3
  const limitedTransactions = transactions.slice(0, 3);

  return (
    <div className="overflow-x-auto rounded-3xl shadow-2xl shadow-black/5">
      <table className="min-w-full bg-white border border-gray-100 ">
        <thead className=" border-b">
          <tr>
            <th className="p-4 text-left text-sm font-semibold text-gray-500">
              Icono
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-500">
              Destino
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-500">
              Fecha del Viaje
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-500">
              Forma de Pago
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-500">
              Tarjeta
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-500">
              Estado
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-500">
              Monto
            </th>
          </tr>
        </thead>
        <tbody>
          {limitedTransactions.map((transaction, index) => (
            <tr key={index} className="border-b">
              <td className="p-4 text-center">
                <span className="text-blue-500 text-2xl">✈️</span>
              </td>
              <td className="p-4 text-[#718EBF]">{transaction.viaje}</td>
              <td className="p-4 text-[#718EBF]">{transaction.fechaViaje}</td>
              <td className="p-4 text-[#718EBF]">{transaction.formaPago}</td>
              <td className="p-4 text-[#718EBF]">
                **** {transaction.ultimosDigitosTarjeta}
              </td>
              <td className="p-4 text-[#718EBF]">
                <span
                  className={`inline-flex items-center ${
                    transaction.status === "Completado"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {transaction.status}
                </span>
              </td>
              <td className="p-4 text-[#718EBF]">${transaction.monto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
