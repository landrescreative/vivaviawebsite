"use client";
import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { IoIosArrowDown, IoIosCall, IoMdMenu, IoMdClose } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai"; // Icono de perfil
import { useTranslations } from "next-intl";

const Navbar: React.FC = ({}) => {
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const currencyDropdownRef = useRef<HTMLDivElement>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    setIsAuthenticated(isLoggedIn === "true");
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        currencyDropdownRef.current &&
        !currencyDropdownRef.current.contains(event.target as Node)
      ) {
        setShowCurrencyDropdown(false);
      }
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setShowLanguageDropdown(false);
      }
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setShowProfileDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsAuthenticated(false);
    router.push("/login");
  };

  const t = useTranslations();

  return (
    <div className="w-full fixed z-50 top-0 text-black">
      <div className="py-1 justify-evenly items-center bg-primary text-white hidden md:flex">
        <h1 className="flex justify-center items-center gap-1">
          <IoIosCall /> 800 55592283
        </h1>
        <Link href="/contacto" className="hover:underline">
          <h1 className="">{t("navbar.soporte")}</h1>
        </Link>
        <Link href="/contacto/#faq" className="hover:underline">
          <h1 className="">{t("navbar.preguntas")}</h1>
        </Link>

        <div className="relative" ref={currencyDropdownRef}>
          <button
            onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
            className="flex items-center gap-1"
          >
            <FaDollarSign /> MXN <IoIosArrowDown />
          </button>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{
              opacity: showCurrencyDropdown ? 1 : 0,
              y: showCurrencyDropdown ? 0 : -5,
            }}
            exit={{ opacity: 0, y: -5 }}
            className={`absolute mt-2 right-0 w-32 bg-white border border-gray-300 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
              showCurrencyDropdown
                ? "opacity-100 translate-y-0"
                : "opacity-0 hidden -translate-y-5"
            }`}
          >
            <ul className="text-black">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex justify-center items-center gap-3">
                <img src="/flagusa.webp" className="w-5 h-full" />
                USD
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex justify-center items-center gap-3">
                <img src="/Flag_of_Mexico.png" className="w-5 h-full" />
                MXN
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="relative" ref={languageDropdownRef}>
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="flex items-center gap-1"
          >
            <GrLanguage /> ESPAÑOL <IoIosArrowDown />
          </button>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{
              opacity: showLanguageDropdown ? 1 : 0,
              y: showLanguageDropdown ? 0 : -5,
            }}
            exit={{ opacity: 0, y: -5 }}
            className={`absolute mt-2 right-0 w-32 bg-white border border-gray-300 shadow-lg transition-transform duration-300 ease-in-out transform ${
              showLanguageDropdown
                ? "opacity-100 translate-y-0"
                : "opacity-0 hidden translate-y-2"
            }`}
          >
            <ul className="text-black">
              <Link
                href="/es"
                locale="es"
                className="flex justify-center items-center gap-1 px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                <img src="/Flag_of_Mexico.png" className="w-5 h-full" /> ESPAÑOL
              </Link>
              <Link
                href="/en"
                locale="en"
                className="flex justify-center items-center gap-1 px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                <img src="/flagusa.webp" className="w-5 h-full" /> ENGLISH
              </Link>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="flex w-full py-3 justify-evenly items-center bg-white">
        {/* Logo */}
        <Link
          href="/"
          className="text-primary flex justify-center items-center  text-2xl flex-grow md:flex-grow-0 pl-4"
        >
          <h1>VIVAVIA</h1>
        </Link>

        <div className="md:hidden pr-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary text-2xl"
          >
            {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>

        <div className="flex justify-around gap-5 text-gray-500">
          <Link href="/" className="text-primary uppercase hidden md:block">
            {t("navbar.inicio")}
          </Link>
          <Link
            href="/destinos"
            className="hover:text-primary uppercase transition-colors duration-300 hidden md:block"
          >
            {t("navbar.paquetes")}
          </Link>

          <Link
            href="/nosotros"
            className="hover:text-primary uppercase transition-colors duration-300 hidden md:block"
          >
            {t("navbar.nosotros")}
          </Link>
          <Link
            href="/contacto"
            className="hover:text-primary uppercase transition-colors duration-300 hidden md:block"
          >
            {t("navbar.contacto")}
          </Link>
          <Link
            href="/blog"
            className="hover:text-primary uppercase transition-colors duration-300 hidden md:block"
          >
            {t("navbar.blog")}
          </Link>
        </div>

        {isAuthenticated ? (
          <div className="relative" ref={profileDropdownRef}>
            <button
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              className="text-primary text-2xl flex items-center"
            >
              <AiOutlineUser />
              <IoIosArrowDown className="ml-1" />
            </button>
            {showProfileDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
              >
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                  onClick={() => router.push("/profile")}
                >
                  Mi Perfil
                </button>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                  onClick={handleLogout}
                >
                  Cerrar Sesión
                </button>
              </motion.div>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center gap-3 hidden md:flex">
            <Link
              href="/login"
              className="text-primary hover:scale-105 transition-transform"
            >
              {t("navbar.isesion")}
            </Link>
            <Link
              href={"/register"}
              className="py-3 px-5 bg-primary text-center text-white rounded-full hover:scale-105 transition-transform hover:shadow-lg"
            >
              {t("navbar.registro")}
            </Link>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            className="flex flex-col text-end md:hidden gap-8 px-5 py-9 bg-white text-gray-500"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-5"
            >
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                {t("navbar.inicio")}
              </Link>
              <Link href="/destinos" onClick={() => setIsMobileMenuOpen(false)}>
                {t("navbar.paquetes")}
              </Link>

              <Link href="/nosotros" onClick={() => setIsMobileMenuOpen(false)}>
                {t("navbar.nosotros")}
              </Link>
              <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                {t("navbar.contacto")}
              </Link>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                {t("navbar.blog")}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-3 mt-3 justify-center items-center"
            >
              {isAuthenticated ? (
                <div className="relative" ref={profileDropdownRef}>
                  <button
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                    className="text-primary text-2xl flex items-center"
                  >
                    <AiOutlineUser />
                    <IoIosArrowDown className="ml-1" />
                  </button>
                  {showProfileDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
                    >
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                        onClick={() => router.push("/profile")}
                      >
                        Mi Perfil
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                        onClick={handleLogout}
                      >
                        Cerrar Sesión
                      </button>
                    </motion.div>
                  )}
                </div>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-primary hover:scale-105 transition-transform"
                  >
                    {t("navbar.isesion")}
                  </Link>
                  <button className="py-3 px-5 bg-primary text-center text-white rounded-full hover:scale-105 transition-transform hover:shadow-lg">
                    {t("navbar.registro")}
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
