// /app/blog/[id]/page.tsx

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  author: string;
};

// Datos estáticos de ejemplo
const posts: Post[] = [
  {
    id: "1",
    title: "Primer Post del Blog",
    content: "Este es el contenido del primer post.",
    createdAt: "2023-01-01",
    author: "Juan Pérez",
  },
  {
    id: "2",
    title: "Segundo Post del Blog",
    content: "Este es el contenido del segundo post.",
    createdAt: "2023-01-02",
    author: "Maria García",
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
    <div className="p-6 mt-36">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-gray-500 mt-2">
        Publicado el: {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <div className="text-gray-700 mt-4">
        <p>{post.content}</p>
      </div>
      <p className="mt-6 font-semibold">Autor: {post.author}</p>
    </div>
  );
};

export default BlogPost;
