import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts } from "../data/blogPosts";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

// Custom styles for the Quill toolbar and editor
const quillCustomStyles = `
  .ql-toolbar {
    background-color: var(--tw-bg-primary, #3049BF) !important;
    border-radius: 0.5rem !important;
    color: white !important;
  }
  .ql-toolbar button,
  .ql-toolbar .ql-picker-label {
    color: white !important;
  }
  .ql-toolbar button:hover {
    background-color: rgba(255, 255, 255, 0.2) !important;
  }
  .ql-toolbar .ql-picker-options {
    background-color: white !important;
    color: black !important;
  }
  .ql-editor {
    background-color: white !important;
    color: black !important;
    border: 1px solid var(--tw-bg-primary, #3049BF) !important;
    border-radius: 0.5rem !important;
    padding: 1rem !important;
  }
    .ql-bold, .ql-italic, .ql-underline, .ql-strike, ql-picker-label svg, .ql-link, .ql-image, .ql-list, .ql-code, .ql-blockquote, .ql-clean {
    filter: invert(1);
    }
`;

const DashboardEntries = () => {
  const [posts, setPosts] = useState(blogPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [editorContent, setEditorContent] = useState("");
  const [newPost, setNewPost] = useState({
    id: null,
    title: "",
    author: "",
    date: "",
    description: "",
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  const postsPerPage = 3;

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const paginatedPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handleSavePost = () => {
    if (newPost.id) {
      setPosts(
        posts.map((post) =>
          post.id === newPost.id
            ? { ...post, ...newPost, postDescription: editorContent }
            : post
        )
      );
    } else {
      const newPostEntry = {
        id: Date.now().toString(),
        title: newPost.title,
        author: newPost.author,
        createdAt: newPost.date || new Date().toLocaleDateString(),
        postDescription: editorContent,
        postImage: "/placeholder.jpg",
        views: 0,
        isPublished: false,
      };
      setPosts([newPostEntry, ...posts]);
    }
    setIsCreatingPost(false);
    setEditorContent("");
    setNewPost({ id: null, title: "", author: "", date: "", description: "" });
  };

  const handlePublishToggle = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, isPublished: !post.isPublished } : post
      )
    );
  };

  const handleEditPost = (post) => {
    setIsCreatingPost(true);
    setNewPost({
      id: post.id,
      title: post.title,
      author: post.author,
      date: post.createdAt,
      description: post.postDescription,
    });
    setEditorContent(post.postDescription);
  };

  const handleOpenDeleteModal = (postId) => {
    setShowDeleteModal(true);
    setPostToDelete(postId);
  };

  const handleDeletePost = () => {
    setPosts(posts.filter((post) => post.id !== postToDelete));
    setShowDeleteModal(false);
    setPostToDelete(null);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setPostToDelete(null);
  };

  return (
    <div className="flex-1 py-8 relative">
      <style>{quillCustomStyles}</style>

      {/* Delete Modal */}
      {showDeleteModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div
            className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-sm"
            onClick={handleCloseDeleteModal}
          ></div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full z-10"
          >
            <p className="text-lg font-semibold mb-4">
              ¿Estás seguro de que deseas eliminar este post?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={handleCloseDeleteModal}
              >
                Cancelar
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={handleDeletePost}
              >
                Eliminar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Topbar */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-primary uppercase border-b pb-2 mb-4">
          {isCreatingPost ? "Crear Nueva Entrada" : "Entradas"}
        </h1>
        {!isCreatingPost && (
          <button
            className="flex items-center bg-primary text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setIsCreatingPost(true)}
          >
            <span className="mr-2">NUEVO</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        )}
      </div>

      {isCreatingPost ? (
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Título
            <input
              type="text"
              placeholder="Título"
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </label>

          <label className="block text-gray-700 font-bold mb-2">
            Autor
            <input
              type="text"
              placeholder="Autor"
              value={newPost.author}
              onChange={(e) =>
                setNewPost({ ...newPost, author: e.target.value })
              }
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </label>

          <label className="block text-gray-700 font-bold mb-2">
            Fecha
            <input
              type="date"
              value={newPost.date}
              onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </label>

          <ReactQuill
            value={editorContent}
            onChange={setEditorContent}
            className="mb-4 h-40"
          />

          <div className="flex justify-end space-x-4 mt-8">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={handleSavePost}
            >
              Guardar
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => setIsCreatingPost(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <AnimatePresence>
          {paginatedPosts.map((post) => {
            const statusColor = post.isPublished
              ? "bg-[#001783] uppercase text-white "
              : "bg-[#DDDBFF] uppercase text-purple-400 ";
            const statusText = post.isPublished ? "Publicado" : "Borrador";

            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                layout
                className="flex bg-white rounded-xl shadow-lg p-6 border border-gray-200 relative overflow-hidden mb-4"
              >
                <div
                  className={`absolute left-0 top-0 bottom-0 flex items-center justify-center text-3xl tracking-widest font-bold  ${statusColor}`}
                  style={{
                    minWidth: "4rem",
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {statusText}
                </div>

                <div className="flex-1 ml-16">
                  <p className="text-sm text-gray-500">
                    {post.createdAt} - {post.views} vistas
                  </p>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p
                    className="text-gray-700 mb-4"
                    dangerouslySetInnerHTML={{
                      __html: post.postDescription,
                    }}
                  />
                  <p className="text-sm text-gray-600 mb-4">
                    Escrito por:{" "}
                    <span className="font-semibold">{post.author}</span>
                  </p>

                  <div className="flex space-x-4">
                    <button
                      className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600"
                      onClick={() => handlePublishToggle(post.id)}
                    >
                      {post.isPublished ? "Borrador" : "Publicar"}
                    </button>
                    <button
                      className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
                      onClick={() => handleEditPost(post)}
                    >
                      Editar
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      onClick={() => handleOpenDeleteModal(post.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>

                <div className="w-1/5 ml-4">
                  <img
                    src={post.postImage}
                    alt={post.title}
                    className="rounded-lg w-full h-auto object-cover aspect-square"
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      )}
    </div>
  );
};

export default DashboardEntries;
