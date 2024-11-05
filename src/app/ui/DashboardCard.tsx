// app/ui/DashboardCard.tsx
interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor: string;
  iconBgColor: string;
  valueColor: string;
  titleColor: string;
}

export default function DashboardCard({
  title,
  value,
  icon,
  bgColor,
  iconBgColor,
  valueColor,
  titleColor,
}: DashboardCardProps) {
  return (
    <div
      className={`p-6 rounded-3xl shadow-lg shadow-black/5  flex items-center space-x-4 ${bgColor}`}
    >
      <div className={`rounded-full p-4  text-xl  ${iconBgColor}`}>{icon}</div>
      <div>
        <h3 className={`text-md uppercase font-normal ${titleColor} `}>
          {title}
        </h3>
        <p className={`text-xl font-medium ${valueColor}`}>{value}</p>
      </div>
    </div>
  );
}
