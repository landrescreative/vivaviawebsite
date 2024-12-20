"use client";

import { MdArrowOutward } from "react-icons/md";
import { blogPosts } from "@/app/data/blogPosts"; // Importar los posts desde el archivo separado

// Definir el tipo Post
type Post = {
  id: string;
  title: string;
  content: string;
  postDescription: string;
  category: string;
  postImage: string;
  createdAt: string;
  author: string;
};

// Función que encuentra el post por ID
const getPostById = (id: string) => blogPosts.find((post) => post.id === id);

// Función que devuelve los posts más recientes, excluyendo el actual
const getRecentPosts = (currentPostId: string, count: number) =>
  blogPosts
    .filter((post) => post.id !== currentPostId)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, count);

const BlogPost = ({ params }: { params: { id: string } }) => {
  const post = getPostById(params.id);
  const recentPosts = getRecentPosts(params.id, 3); // Los 3 posts más recientes, excluyendo el actual

  if (!post) return <p>Post no encontrado.</p>;

  return (
    <div className="p-6 container mx-auto mt-36">
      <div className="fecha-tiempo flex font-normal">
        <p className="text-gray-500">Publicado el {post.createdAt}</p>
        <div className="w-11 h-1 self-center bg-primary mx-3"></div>
        <p>Tiempo de Lectura: 5 min</p>
      </div>
      <h1 className="text-4xl font-medium text-primary">{post.title}</h1>
      <p className="text-gray-800 mt-2">
        {post.postDescription.length > 200
          ? `${post.postDescription.slice(0, 200)}...`
          : post.postDescription}
      </p>
      <img
        src={post.postImage}
        alt="paisaje"
        className="w-full h-96 object-cover mt-6 rounded-3xl"
      />
      <div className="container mx-auto py-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sección izquierda */}
        <div className="col-span-1">
          <h2 className="text-gray-500">ESCRITO POR</h2>
          <div className="flex items-center justify-start mt-2">
            <img
              src="/paisaje.jpg"
              alt="avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="ml-4 font-semibold">{post.author}</p>
              <p className="ml-4 font-bold text-primary">Escritor de VIVAVIA</p>
            </div>
          </div>
          <h2 className="text-gray-500 mt-4">LEE MAS DE NUESTRO BLOG</h2>
          <div className="hidden md:flex flex-col mt-4">
            {recentPosts.map((recentPost) => (
              <div
                key={recentPost.id}
                className="flex flex-col overflow-hidden text-sm md:text-md mb-8 relative card-blog cursor-pointer"
              >
                <div className="absolute p-2 z-20 bg-white text-black rounded-full top-4 right-4 card-icon">
                  <MdArrowOutward size={24} />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={recentPost.postImage}
                    alt={recentPost.title}
                    className="w-full h-96 object-cover  card-img"
                  />
                </div>
                <div className="py-3">
                  <div className="flex justify-between items-center">
                    <h2 className="text-md uppercase font-bold text-gray-800">
                      {recentPost.category}
                    </h2>
                    <p className="text-gray-500">{recentPost.createdAt}</p>
                  </div>
                  <p className="text-gray-600 mt-1">{recentPost.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección derecha */}
        <div className="col-span-1 md:col-span-3">
          <p className="text-gray-800">{post.postDescription}</p>
          <hr className="my-4" />
          <div
            className="text-gray-700 mt-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
