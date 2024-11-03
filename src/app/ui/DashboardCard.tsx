// app/ui/DashboardCard.tsx
interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor: string;
}

export default function DashboardCard({
  title,
  value,
  icon,
  bgColor,
}: DashboardCardProps) {
  return (
    <div
      className={`p-6 rounded-lg shadow-md bg-white flex items-center space-x-4 ${bgColor}`}
    >
      <div className="rounded-full p-4 bg-opacity-20 text-xl">{icon}</div>
      <div>
        <h3 className="text-sm font-semibold text-gray-600">{title}</h3>
        <p className="text-lg font-bold">{value}</p>
      </div>
    </div>
  );
}
