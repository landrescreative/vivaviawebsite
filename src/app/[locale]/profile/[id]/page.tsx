"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";

interface UserData {
  name: string;
  email: string;
  birthdate: string;
  phone: string;
}

interface BillingData {
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  paymentMethods: string;
}

interface Transaction {
  icon: string;
  invoiceNumber: string;
  date: string;
  destination: string;
  price: string;
}

export default function Profile() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [userEmail, setUserEmail] = useState("");
  const [editingField, setEditingField] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    name: "Juan Pérez",
    email: "juan.perez@ejemplo.com",
    birthdate: "1990-01-01",
    phone: "555-123-4567",
  });
  const [billingData, setBillingData] = useState<BillingData>({
    address: "123 Calle Ejemplo",
    city: "Ciudad Ejemplo",
    state: "Estado Ejemplo",
    postalCode: "12345",
    country: "País Ejemplo",
    paymentMethods: "Visa **** 1234",
  });
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      icon: "/icono_factura.svg",
      invoiceNumber: "001",
      date: "2024-01-01",
      destination: "Cancún",
      price: "$500.00",
    },
    {
      icon: "/icono_factura.svg",
      invoiceNumber: "002",
      date: "2024-02-15",
      destination: "Tulum",
      price: "$700.00",
    },
  ]);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const storedUserEmail = localStorage.getItem("userEmail");

    if (storedUserId === id) {
      setUserEmail(storedUserEmail || "");
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
    } else {
      router.replace("/login");
    }
  }, [id, router]);

  const handleInputChange = (field: keyof UserData, value: string) => {
    setUserData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleBillingChange = (field: keyof BillingData, value: string) => {
    setBillingData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSave = (field: keyof UserData) => {
    console.log(`Guardando ${field}:`, userData[field]);
    localStorage.setItem("userData", JSON.stringify(userData));
    setEditingField(null);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  const handleBillingSave = (field: keyof BillingData) => {
    localStorage.setItem("billingData", JSON.stringify(billingData));
    setEditingField(null);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userId");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userData");
    localStorage.removeItem("billingData");
    router.replace("/login");
  };

  return (
    <div className="mt-14 md:mt-[90px] w-11/12 mx-auto">
      {/* Header */}
      <div className="bg-primary p-4 text-white text-center">
        <h1>
          Descubre nuestros <strong>paquetes</strong> con
          <strong> descuentos</strong> de más de <strong>20%</strong>
        </h1>
      </div>

      {/* Confirmation Message */}
      {showConfirmation && (
        <div className="bg-green-100 text-green-800 p-4 text-center rounded-md my-4 transition-opacity duration-300 ease-in-out">
          Cambios guardados exitosamente.
        </div>
      )}

      {/* Profile Picture and Info */}
      <div>
        <Image
          src="/paisaje.jpg"
          alt="Profile Header"
          width={800}
          height={500}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="flex justify-between px-20 relative">
        <Image
          src="/paisaje.jpg"
          alt="Profile Image"
          width={200}
          height={200}
          className="w-52 h-52 rounded-full object-cover border-4 border-white absolute -top-20"
        />
        <div className="flex flex-col w-full justify-end items-end py-10">
          <h2>
            <strong className="text-primary">Nombre:</strong> {userData.name}
          </h2>
          <h2>
            <strong className="text-primary">Email:</strong> {userEmail}
          </h2>
          <h2>
            <strong className="text-primary">Fecha de Nacimiento:</strong>{" "}
            {userData.birthdate}
          </h2>
          <h2>
            <strong className="text-primary">Teléfono:</strong> {userData.phone}
          </h2>
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Travel History */}
      <div className="bg-primary p-4 text-white text-center mt-6">
        <h1 className="font-bold">HISTORIAL DE VIAJES</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-20 py-10 gap-4 md:gap-10">
        {["Cancún", "Tulum", "Chichen Itza"].map((destination, index) => (
          <div className="w-full md:w-1/3" key={index}>
            <Image
              src="/paisaje.jpg"
              alt={destination}
              width={800}
              height={500}
              className="w-full h-64 object-cover"
            />
            <h2 className="text-left mt-2 font-bold text-primary">
              {destination}
            </h2>
            <h2>
              <strong>Precio:</strong> 7580
            </h2>
          </div>
        ))}
      </div>

      {/* Personal Data Section */}
      <div className="bg-primary p-4 text-white text-center">
        <h1 className="font-bold">CONFIGURACIÓN</h1>
      </div>
      <div className="shadow-lg rounded-3xl">
        <div className="bg-primary mt-10 p-4 text-white font-bold rounded-t-lg">
          <h1>DATOS PERSONALES</h1>
        </div>
        {["name", "email", "birthdate", "phone"].map((field, index) => (
          <EditableField
            key={index}
            label={
              field === "name"
                ? "Nombre"
                : field.charAt(0).toUpperCase() + field.slice(1)
            }
            field={field}
            value={userData[field as keyof UserData]}
            isEditing={editingField === field}
            onEdit={() => setEditingField(field)}
            onSave={() => handleSave(field as keyof UserData)}
            onChange={(value) =>
              handleInputChange(field as keyof UserData, value)
            }
          />
        ))}
      </div>

      {/* Billing Data Section */}
      <div className="bg-primary mt-10 p-4 text-white font-bold rounded-t-lg">
        <h1>DATOS DE FACTURACIÓN</h1>
      </div>
      {[
        "address",
        "city",
        "state",
        "postalCode",
        "country",
        "paymentMethods",
      ].map((field, index) => (
        <EditableField
          key={index}
          label={
            field === "address"
              ? "Dirección"
              : field === "city"
              ? "Ciudad"
              : field === "state"
              ? "Estado"
              : field === "postalCode"
              ? "Código Postal"
              : field === "country"
              ? "País"
              : "Métodos de Pago"
          }
          field={field}
          value={billingData[field as keyof BillingData]}
          isEditing={editingField === field}
          onEdit={() => setEditingField(field)}
          onSave={() => handleBillingSave(field as keyof BillingData)}
          onChange={(value) =>
            handleBillingChange(field as keyof BillingData, value)
          }
        />
      ))}

      {/* Transactions Section */}
      <div className="bg-primary mt-10 p-4 text-white font-bold rounded-t-lg">
        <h1>TRANSACCIONES</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-md">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Icono
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Factura
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Destino
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Precio
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Descargar
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <Image
                    src={transaction.icon}
                    alt="icon"
                    width={24}
                    height={24}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Factura #{transaction.invoiceNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {transaction.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {transaction.destination}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {transaction.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500 hover:underline cursor-pointer">
                  <Image
                    src="/icono_descarga.svg"
                    alt="download"
                    width={24}
                    height={24}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EditableField({
  label,
  field,
  value,
  isEditing,
  onEdit,
  onSave,
  onChange,
}: {
  label: string;
  field: string;
  value: string;
  isEditing: boolean;
  onEdit: () => void;
  onSave: () => void;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
      <div className="flex flex-col">
        <label className="text-lg font-medium mb-1">{label}:</label>
        {isEditing ? (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border border-gray-300 p-1 rounded-md"
          />
        ) : (
          <span>{value}</span>
        )}
      </div>
      <div>
        {isEditing ? (
          <button onClick={onSave} className="text-green-500 hover:underline">
            Guardar
          </button>
        ) : (
          <button onClick={onEdit} className="text-blue-500 hover:underline">
            Editar
          </button>
        )}
      </div>
    </div>
  );
}
