"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/app/data/blogPosts";
import { useTranslations } from "next-intl";

const BlogSection = () => {
  const t = useTranslations("blogSection");

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-12 lg:w-5/6 mx-auto min-h-screen flex flex-col justify-center items-center">
      {/* Título y Párrafo */}
      <header className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-primary">{t("title")}</h2>
        <p className="text-lg text-gray-600 mt-4">{t("description")}</p>
      </header>

      {/* Tarjetas de blog */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {blogPosts.slice(0, 2).map((post) => (
          <motion.article
            key={post.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 border border-gray-200"
            variants={cardVariants}
          >
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={post.postImage}
                alt={post.title}
                width={400}
                height={300}
                placeholder="blur"
                blurDataURL="/placeholder.jpg"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold py-1 px-3 rounded-full shadow-lg">
                {post.category}
              </div>
            </div>
            <div className="p-6">
              <time className="text-sm text-gray-500 mb-2 block">
                {post.createdAt}
              </time>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.postDescription}
              </p>
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-600 font-semibold hover:underline flex items-center gap-2"
              >
                {t("readMore")} <span>&rarr;</span>
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Botón Ver Más */}
      <div className="mt-10 text-center">
        <Link
          href="/blog"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md"
          aria-label={t("buttonAriaLabel")}
        >
          {t("buttonText")}
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
