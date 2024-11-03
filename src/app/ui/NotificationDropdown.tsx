// app/ui/NotificationDropdown.tsx
import { useState, useEffect } from "react";

interface Notification {
  id: number;
  message: string;
  type: string;
  timestamp: string;
  isRead: boolean;
}

export default function NotificationDropdown() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Simulación de llamada al backend para obtener notificaciones
  useEffect(() => {
    async function fetchNotifications() {
      try {
        const response = await fetch("/data/dashboardData.json");
        const data = await response.json();
        setNotifications(data.notificaciones); // Accede al campo de notificaciones del JSON
      } catch (error) {
        console.error("Error al cargar las notificaciones:", error);
      }
    }

    fetchNotifications();
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const unreadCount = notifications.filter((notif) => !notif.isRead).length;

  return (
    <div className="relative z-50">
      <button onClick={toggleDropdown} className="relative">
        <span className="text-2xl">🔔</span>
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 font-bold text-gray-700 border-b">
            Notificaciones
          </div>
          <ul className="max-h-60 overflow-y-auto">
            {notifications.map((notif) => (
              <li
                key={notif.id}
                onClick={() => markAsRead(notif.id)}
                className={`p-3 cursor-pointer ${
                  notif.isRead ? "bg-gray-100" : "bg-blue-100"
                }`}
              >
                <p className="text-sm font-semibold">{notif.message}</p>
                <span className="text-xs text-gray-500">
                  {new Date(notif.timestamp).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
          {notifications.length === 0 && (
            <p className="p-4 text-center text-gray-500">
              No hay notificaciones
            </p>
          )}
        </div>
      )}
    </div>
  );
}
