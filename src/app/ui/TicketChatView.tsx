// app/ui/TicketChatView.tsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaTrashAlt,
  FaImage,
  FaTimes,
  FaQuestionCircle,
} from "react-icons/fa";
import { categoryIcons, categoryColors } from "@/app/ui/categoryData";
import { format, isToday, parseISO } from "date-fns";
import { IoIosSend } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const ImagePreview = ({ imagePreview, removeImagePreview }) => (
  <div className="flex items-center justify-between p-3 bg-gray-200 rounded-lg mx-4 mb-4">
    <img
      src={imagePreview}
      alt="Preview"
      className="w-16 h-16 rounded-md mr-4"
    />
    <button
      onClick={removeImagePreview}
      className=" bg-red-500 flex p-4 rounded-lg mr-3 items-center"
    >
      <FaTrash size={36} className="text-white" />
    </button>
  </div>
);

// Función para formatear fecha u hora
const formatMessageDate = (dateString: string) => {
  const date = parseISO(dateString);
  return isToday(date) ? format(date, "HH:mm") : format(date, "yyyy-MM-dd");
};

// Componente para el modal de vista ampliada de imagen
const ImageModal = ({ imageUrl, onClose }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    onClick={onClose}
  >
    <div className="relative">
      <img
        src={imageUrl}
        alt="Enlarged view"
        className="max-w-full max-h-screen rounded-lg"
      />
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white bg-gray-700 rounded-full p-2 hover:bg-gray-600"
      >
        <FaTimes />
      </button>
    </div>
  </div>
);

export const TicketChatView = ({ ticket, closeTicket, onTicketResolved }) => {
  const [messages, setMessages] = useState(ticket.mensajes || []);
  const [newMessage, setNewMessage] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isResolved, setIsResolved] = useState(ticket.resuelto || false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Estado para la imagen seleccionada en el modal

  const fileInputRef = useRef<HTMLInputElement>(null); // Reference to the file input

  const handleSendMessage = () => {
    if (!newMessage.trim() && !imageFile) return;

    const message = {
      de: "Soporte",
      mensaje: newMessage,
      fecha: new Date().toISOString(),
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
    if (fileInputRef.current) fileInputRef.current.value = ""; // Reset file input
  };

  const toggleResolvedStatus = () => {
    setIsResolved((prevIsResolved) => {
      const newResolvedStatus = !prevIsResolved;
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

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-lg">
      <header className="p-6 border-b flex items-center justify-between">
        <div className="flex gap-5">
          <button
            onClick={closeTicket}
            className="flex items-center text-blue-600 font-semibold p-2 rounded-full mr-4 bg-primary"
          >
            <FaArrowLeft className="text-white" />
          </button>
          <h3 className="text-xl font-semibold">{ticket.nombre}</h3>
          <div className="flex items-center">
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
                : "text-primary hover:text-green-600"
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
      <main className="flex-1 overflow-y-auto p-6 bg-white custom-scrollbar">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.de === "Soporte" ? "justify-end" : "justify-start"
            } mb-4`}
          >
            {msg.de !== "Soporte" && (
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-4">
                <FaUser className="text-gray-600" />
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, x: msg.de === "Soporte" ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-4 rounded-lg w-full max-w-xs lg:max-w-md ${
                msg.de === "Soporte"
                  ? "bg-blue-100 text-blue-800 ml-auto"
                  : "bg-gray-200 text-gray-800 mr-auto"
              } break-words overflow-hidden`}
            >
              <p className="font-semibold">{msg.de}</p>
              <p className="text-gray-600 text-sm">
                {formatMessageDate(msg.fecha)}
              </p>
              <p className="whitespace-pre-wrap break-words">{msg.mensaje}</p>
              {msg.imagen && (
                <img
                  src={msg.imagen}
                  alt="Uploaded"
                  className="mt-2 w-64 h-auto rounded-lg cursor-pointer"
                  onClick={() => handleImageClick(msg.imagen)}
                />
              )}
            </motion.div>
          </div>
        ))}
      </main>

      {imagePreview && (
        <ImagePreview
          imagePreview={imagePreview}
          removeImagePreview={removeImagePreview}
        />
      )}

      {/* Modal para la vista ampliada de imagen */}
      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={closeImageModal} />
      )}

      <footer className="bg-white p-4 border-t border-gray-200 flex items-center space-x-4">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full p-2 rounded-md focus:outline-none focus:border-blue-500"
        />
        <label className="text-gray-500 hover:text-blue-500 cursor-pointer">
          <FaImage />
          <input
            ref={fileInputRef} // Reference to the file input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
        <motion.button
          onClick={handleSendMessage}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white flex justify-center items-center px-6 text-md py-2 rounded-md hover:bg-blue-600"
        >
          Enviar
          <IoIosSend className="ml-2" size={20} />
        </motion.button>
      </footer>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f0f0f0;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #b3b3b3;
          border-radius: 4px;
          border: 2px solid #f0f0f0;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #a0a0a0;
        }
      `}</style>
    </div>
  );
};
