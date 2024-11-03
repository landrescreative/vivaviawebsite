// app/ui/TarjetaBancaria.tsx
interface TarjetaBancariaProps {
  nombre: string;
  fechaVencimiento: string;
  ultimosDigitos: string;
  balanceEstimado: string;
}

export default function TarjetaBancaria({
  nombre,
  fechaVencimiento,
  ultimosDigitos,
  balanceEstimado,
}: TarjetaBancariaProps) {
  return (
    <div className="relative w-full max-w-xs bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg p-6 space-y-6">
      {/* Título de la tarjeta con Balance */}
      <div className="text-sm font-semibold flex justify-between items-center">
        <span>Balance</span>
        <span className="text-lg font-bold">{balanceEstimado}</span>
      </div>

      {/* Información de la Tarjeta */}
      <div className="text-2xl font-bold tracking-widest">
        **** **** **** {ultimosDigitos}
      </div>

      {/* Nombre del Titular y Fecha de Vencimiento */}
      <div className="flex justify-between items-center">
        <div>
          <p className="uppercase text-xs mb-1">Titular</p>
          <p className="font-semibold text-lg">{nombre}</p>
        </div>
        <div>
          <p className="uppercase text-xs mb-1">Vence</p>
          <p className="font-semibold text-lg">{fechaVencimiento}</p>
        </div>
      </div>
    </div>
  );
}
