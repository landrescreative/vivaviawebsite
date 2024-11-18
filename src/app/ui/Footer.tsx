"use client";

import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer
      className="bg-[#193590] text-white rounded-t-[50px] mt-20 shadow-2xl py-10 relative"
      role="contentinfo"
      aria-label={t("sections.contact")}
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        {/* Suscripción al Newsletter */}
        <div className="flex justify-center">
          <div className="bg-white text-gray-800 rounded-3xl shadow-lg p-6 md:p-8 lg:p-12 -mt-16 md:-mt-20 flex flex-col md:flex-row justify-between items-center gap-6 w-full">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                {t("newsletter.title")}
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                {t("newsletter.description")}
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="flex items-center w-full md:w-auto">
                <input
                  type="email"
                  placeholder={t("newsletter.placeholder")}
                  className="px-4 py-3 rounded-l-md text-gray-700 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={t("newsletter.placeholder")}
                />
                <button
                  className="bg-primary text-white px-6 py-3 rounded-r-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={t("newsletter.button")}
                >
                  {t("newsletter.button")}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secciones del Footer */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-20">
          <FooterLinks
            title={t("sections.navigation")}
            links={t.raw("links.navigation")}
          />
          <FooterLinks
            title={t("sections.popularDestinations")}
            links={t.raw("links.popularDestinations")}
          />
          <FooterLinks
            title={t("sections.popularActivities")}
            links={t.raw("links.popularActivities")}
          />
          <FooterLinks
            title={t("sections.generalInfo")}
            links={t.raw("links.generalInfo")}
          />
          <div>
            <h4 className="font-semibold mb-4">{t("sections.contact")}</h4>
            <div className="flex gap-2 items-center mb-3">
              <FaPhone />
              <p className="text-gray-200">{t("contact.phone")}</p>
            </div>
            <div className="flex gap-2 items-center mb-3">
              <MdEmail />
              <p className="text-gray-200">{t("contact.email")}</p>
            </div>
            <h4 className="font-semibold mb-4">
              {t("sections.paymentMethods")}
            </h4>
            <div className="flex gap-4 items-center flex-wrap">
              <Image
                src="/visa_logo.png"
                width={80}
                height={40}
                alt="Visa"
                className="bg-white p-2 rounded-md"
              />
              <Image
                src="/mastercard.png"
                width={80}
                height={40}
                alt="MasterCard"
                className="bg-white p-2 rounded-md"
              />
              <Image
                src="/paypal.png"
                width={80}
                height={40}
                alt="PayPal"
                className="bg-white p-2 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Footer Inferior */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-200">
          <div className="text-center md:text-left">
            <p>{t("sections.rightsReserved")}</p>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

const FooterLinks = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h4 className="font-semibold mb-4">{title}</h4>
    <ul className="space-y-2 text-gray-200">
      {links.map((link, index) => (
        <li key={index}>
          <a href="#" className="hover:underline">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLinks = () => (
  <div className="mt-4 md:mt-0 text-center">
    <div className="flex justify-center space-x-4">
      <a
        href="#"
        className="text-white hover:scale-110 duration-300 transition-all"
        aria-label="Facebook"
      >
        <FaFacebookF className="text-2xl" />
      </a>
      <a
        href="#"
        className="text-white hover:scale-110 duration-300 transition-all"
        aria-label="Twitter"
      >
        <FaTwitter className="text-2xl" />
      </a>
      <a
        href="#"
        className="text-white hover:scale-110 duration-300 transition-all"
        aria-label="Instagram"
      >
        <FaInstagram className="text-2xl" />
      </a>
      <a
        href="#"
        className="text-white hover:scale-110 duration-300 transition-all"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn className="text-2xl" />
      </a>
    </div>
  </div>
);

export default Footer;
