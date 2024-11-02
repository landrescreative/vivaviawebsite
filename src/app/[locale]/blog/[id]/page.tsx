"use client";

import InstagramPost from "@/app/ui/InstagramPost";
import { MdArrowOutward } from "react-icons/md";

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

// Datos estáticos de ejemplo
const posts: Post[] = [
  {
    id: "1",
    title:
      "Descubre la Magia de Tailandia: Un Destino de Ensueño para Todo Tipo de Viajero",
    postDescription:
      "Tailandia, conocida como la Tierra de las Sonrisas, es un destino que ofrece una combinación perfecta de cultura rica, paisajes impresionantes y experiencias únicas. Ya sea que busques aventuras emocionantes, relajación en playas paradisíacas o una inmersión en la vibrante cultura local, Tailandia tiene algo para todos. En este artículo, exploraremos algunas de las principales atracciones y actividades que no puedes perderte en tu viaje a este maravilloso país. ",
    postImage: "/paisaje.jpg",
    category: "Destinos Exóticos",
    content:
      "Tailandia, conocida como la Tierra de las Sonrisas, es un destino que ofrece una combinación perfecta de cultura rica, paisajes impresionantes y experiencias únicas. Ya sea que busques aventuras emocionantes, relajación en playas paradisíacas o una inmersión en la vibrante cultura local, Tailandia tiene algo para todos. En este artículo, exploraremos algunas de las principales atracciones y actividades que no puedes perderte en tu viaje a este maravilloso país. Tailandia, conocida como la Tierra de las Sonrisas, es un destino que ofrece una combinación perfecta de cultura rica, paisajes impresionantes y experiencias únicas. Ya sea que busques aventuras emocionantes, relajación en playas paradisíacas o una inmersión en la vibrante cultura local, Tailandia tiene algo para todos. En este artículo, exploraremos algunas de las principales atracciones y actividades que no puedes perderte en tu viaje a este maravilloso país. Tailandia, conocida como la Tierra de las Sonrisas, es un destino que ofrece una combinación perfecta de cultura rica, paisajes impresionantes y experiencias únicas. Ya sea que busques aventuras emocionantes, relajación en playas paradisíacas o una inmersión en la vibrante cultura local, Tailandia tiene algo para todos. En este artículo, exploraremos algunas de las principales atracciones y actividades que no puedes perderte en tu viaje a este maravilloso país. Tailandia, conocida como la Tierra de las Sonrisas, es un destino que ofrece una combinación perfecta de cultura rica, paisajes impresionantes y experiencias únicas. Ya sea que busques aventuras emocionantes, relajación en playas paradisíacas o una inmersión en la vibrante cultura local, Tailandia tiene algo para todos. En este artículo, exploraremos algunas de las principales atracciones y actividades que no puedes perderte en tu viaje a este maravilloso país. Tailandia, conocida como la Tierra de las Sonrisas, es un destino que ofrece una combinación perfecta de cultura rica, paisajes impresionantes y experiencias únicas. Ya sea que busques aventuras emocionantes, relajación en playas paradisíacas o una inmersión en la vibrante cultura local, Tailandia tiene algo para todos. En este artículo, exploraremos algunas de las principales atracciones y actividades que no puedes perderte en tu viaje a este maravilloso país. ",
    createdAt: "4 de julio 2024",
    author: "Juan Pérez",
  },
];

// Función que encuentra el post por ID
const getPostById = (id: string) => posts.find((post) => post.id === id);

const BlogPost = ({ params }: { params: { id: string } }) => {
  // Obtén el post correspondiente al id de los parámetros
  const post = getPostById(params.id);

  // Si el post no existe, muestra un mensaje de error
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
          <div className="hidden md:flex mt-4">
            <div className="flex flex-col overflow-hidden text-sm md:text-md mb-8 relative card-blog cursor-pointer">
              <div className="absolute p-2 z-20 bg-white text-black rounded-full top-4 right-4 card-icon">
                <MdArrowOutward size={24} />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={post.postImage}
                  alt={post.title}
                  className="w-full h-96 object-cover  card-img"
                />
              </div>
              <div className="py-3">
                <div className="flex justify-between items-center">
                  <h2 className="text-md uppercase font-bold text-gray-800">
                    SEGURIDAD
                  </h2>
                  <p className="text-gray-500">07 de julio</p>
                </div>
                <p className="text-gray-600 mt-1">
                  Cómo Elegir el Seguro de Viaje Ideal para Protegerte Durante
                  tus Aventuras
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección derecha */}
        <div className="col-span-1 md:col-span-3">
          <p className="text-gray-800">{post.postDescription}</p>
          <hr className="my-4" />
          <div className="text-gray-700 mt-4">
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
