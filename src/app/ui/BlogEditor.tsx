import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Estilos predeterminados de Quill

const BlogEditor = () => {
  const [content, setContent] = useState("");

  const handleChange = (value: string) => {
    setContent(value); // Actualiza el contenido del editor
  };

  const handleSubmit = () => {
    console.log("Contenido del blog:", content);
    alert("Blog guardado con éxito.");
    // Aquí puedes enviar el contenido a tu API o backend
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-3xl">
      <h2 className="text-3xl font-bold mb-6">Crear Nuevo Blog</h2>
      <ReactQuill
        theme="snow" // Tema por defecto
        value={content}
        onChange={handleChange}
        placeholder="Escribe tu contenido aquí..."
        modules={{
          toolbar: [
            ["bold", "italic", "underline", "strike"], // Estilos de texto
            [{ header: [1, 2, false] }], // Tamaños de encabezados
            [{ list: "ordered" }, { list: "bullet" }], // Listas
            ["link", "image"], // Enlaces e imágenes
            ["clean"], // Limpiar formato
          ],
        }}
        formats={[
          "header",
          "bold",
          "italic",
          "underline",
          "strike",
          "list",
          "bullet",
          "link",
          "image",
        ]}
      />
      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Guardar Blog
      </button>
    </div>
  );
};

export default BlogEditor;
