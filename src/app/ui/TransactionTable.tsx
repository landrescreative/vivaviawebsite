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
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="p-4 text-left text-sm font-semibold text-gray-600">
              Icono
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-600">
              Viaje + Destino
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-600">
              Fecha del Viaje
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-600">
              Forma de Pago
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-600">
              Últimos Dígitos
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-600">
              Estado
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-600">
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
              <td className="p-4">{transaction.viaje}</td>
              <td className="p-4">{transaction.fechaViaje}</td>
              <td className="p-4">{transaction.formaPago}</td>
              <td className="p-4">**** {transaction.ultimosDigitosTarjeta}</td>
              <td className="p-4">
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
              <td className="p-4">${transaction.monto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
