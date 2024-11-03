// app/ui/SupportCategories.tsx
import React from "react";

export const SupportCategories = ({
  selectedCategory,
  setSelectedCategory,
  ticketsData,
}) => (
  <div className="w-1/4 bg-gray-100 p-4 border-r border-gray-200">
    <h2 className="text-lg font-semibold mb-4 text-white bg-blue-600 p-3 rounded-md">
      Tickets de Soporte
    </h2>
    <ul className="space-y-3">
      {["Tickets", "Duda", "Soporte", "Info", "Cuenta", "Favoritos"].map(
        (category) => (
          <li
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`flex justify-between items-center p-3 rounded-md cursor-pointer ${
              selectedCategory === category
                ? "bg-blue-200 text-blue-700 font-semibold"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <span>{category}</span>
            <span className="bg-gray-300 text-gray-700 rounded-full px-2 py-1 text-xs">
              {category === "Favoritos"
                ? ticketsData.filter((ticket) => ticket.favorito).length
                : ticketsData.filter(
                    (ticket) =>
                      ticket.categoria === category || category === "Tickets"
                  ).length}
            </span>
          </li>
        )
      )}
    </ul>
  </div>
);
