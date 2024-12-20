"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { blogPosts } from "@/app/data/blogPosts";
import { useTranslations } from "next-intl";

const Page: React.FC = () => {
  const t = useTranslations("blogPage");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(t("categories.all"));

  const categories = [
    t("categories.all"),
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === t("categories.all") ||
      post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col px-5 md:px-0">
      {/* Encabezado */}
      <div className="flex flex-col lg:w-5/6 mx-auto mt-20 md:mt-36">
        <h1 className="text-4xl text-primary">{t("header.title")}</h1>
        <p>{t("header.subtitle")}</p>
        <div className="rounded-3xl overflow-hidden mt-8 relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-h-96 object-cover"
          >
            <source src="/paisaje.mp4" type="video/mp4" />
          </video>
          <div className="absolute z-20 w-full h-full top-0 flex justify-center items-center">
            <h1 className="text-white text-7xl font-bold uppercase">
              {t("header.banner")}
            </h1>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="lg:w-5/6 mx-auto mt-12 flex flex-col md:flex-row justify-between items-start">
        <div>
          <h1 className="text-4xl text-primary">{t("filters.title")}</h1>
          <p>{t("filters.subtitle")}</p>
        </div>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          {/* Filtro de Categorías */}
          <select
            className="p-2 border border-gray-300 rounded-full"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {/* Input de Búsqueda */}
          <input
            type="text"
            placeholder={t("filters.searchPlaceholder")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-full"
          />
        </div>
      </div>

      {/* Grid de Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 lg:w-5/6 mx-auto">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <article className="flex flex-col overflow-hidden text-sm md:text-md mb-8 relative card-blog cursor-pointer transition-transform duration-300 hover:scale-105 ">
                <div className="absolute p-2 z-20 bg-white text-black rounded-full top-4 right-4 card-icon">
                  <MdArrowOutward size={24} />
                </div>
                <div className="overflow-hidden rounded-2xl h-[300px]">
                  <Image
                    src={post.postImage}
                    alt={post.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="py-3">
                  <div className="flex justify-between items-center">
                    <h2 className="text-md uppercase font-bold text-gray-800">
                      {post.category}
                    </h2>
                    <p className="text-gray-500">{post.date}</p>
                  </div>
                  <p className="text-gray-600 mt-2">{post.title}</p>
                </div>
              </article>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            {t("noResultsMessage")}
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
