// app/ui/TicketChatView.tsx
import React, { useState } from "react";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaTrashAlt,
  FaImage,
  FaTimes,
  FaQuestionCircle,
} from "react-icons/fa";
import { categoryIcons, categoryColors } from "@/app/ui/categoryData";

// Subcomponente para la vista previa de la imagen
const ImagePreview = ({ imagePreview, removeImagePreview }) => (
  <div className="flex items-center p-2 bg-gray-100 rounded-lg mx-4 mb-4">
    <img
      src={imagePreview}
      alt="Preview"
      className="w-16 h-16 rounded-md mr-4"
    />
    <button
      onClick={removeImagePreview}
      className="text-red-500 hover:text-red-600 flex items-center"
    >
      <FaTimes className="mr-1" /> Quitar imagen
    </button>
  </div>
);

export const TicketChatView = ({ ticket, closeTicket, onTicketResolved }) => {
  const [messages, setMessages] = useState(ticket.mensajes || []);
  const [newMessage, setNewMessage] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isResolved, setIsResolved] = useState(ticket.resuelto || false);

  const handleSendMessage = () => {
    if (!newMessage.trim() && !imageFile) return;

    const message = {
      de: "Soporte",
      mensaje: newMessage,
      fecha: new Date().toLocaleDateString(),
      imagen: imageFile ? URL.createObjectURL(imageFile) : null,
    };

    setMessages((prevMessages) => [...prevMessages, message]);
    setNewMessage("");
    setImageFile(null);
    setImagePreview(null);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImagePreview = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  // Alternar el estado de resuelto/no resuelto
  const toggleResolvedStatus = () => {
    setIsResolved((prevIsResolved) => {
      const newResolvedStatus = !prevIsResolved;
      // Llamar al callback con el nuevo estado para que el componente padre actualice la lista
      if (onTicketResolved) onTicketResolved(ticket.id, newResolvedStatus);
      return newResolvedStatus;
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-lg">
      {/* Encabezado */}
      <header className="p-6 border-b flex items-center justify-between">
        <button
          onClick={closeTicket}
          className="flex items-center text-blue-600 font-semibold mb-4"
        >
          <FaArrowLeft className="mr-2" /> Regresar
        </button>
        <div>
          <h3 className="text-xl font-semibold">{ticket.nombre}</h3>
          <div className="flex items-center">
            {categoryIcons[ticket.categoria as keyof typeof categoryIcons] ?? (
              <FaQuestionCircle className="text-gray-500 mr-2" />
            )}
            <span
              className={`${
                categoryColors[
                  ticket.categoria as keyof typeof categoryColors
                ] ?? "bg-gray-100 text-gray-700"
              } px-2 py-1 rounded-full text-xs font-semibold`}
            >
              {ticket.categoria || "Sin Categoría"}
            </span>
          </div>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={toggleResolvedStatus}
            className={`flex items-center ${
              isResolved
                ? "text-gray-500 hover:text-red-500"
                : "text-green-500 hover:text-green-600"
            }`}
          >
            <FaCheckCircle className="mr-1" />
            {isResolved ? "Desmarcar Resuelto" : "Marcar como Resuelto"}
          </button>
          <button className="text-red-500 flex items-center hover:text-red-600">
            <FaTrashAlt className="mr-1" /> Eliminar
          </button>
        </div>
      </header>

      {/* Historial de mensajes */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        {messages.map((msg, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold">{msg.de}</p>
            <p className="text-gray-600 text-sm">{msg.fecha}</p>
            <p>{msg.mensaje}</p>
            {msg.imagen && (
              <img
                src={msg.imagen}
                alt="Uploaded"
                className="mt-2 w-64 h-auto rounded-lg"
              />
            )}
          </div>
        ))}
      </main>

      {/* Vista previa de la imagen seleccionada */}
      {imagePreview && (
        <ImagePreview
          imagePreview={imagePreview}
          removeImagePreview={removeImagePreview}
        />
      )}

      {/* Área de respuesta */}
      <footer className="bg-white p-4 border-t border-gray-200 flex items-center space-x-4">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
        />
        <label className="text-gray-500 hover:text-blue-500 cursor-pointer">
          <FaImage />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Enviar
        </button>
      </footer>
    </div>
  );
};
