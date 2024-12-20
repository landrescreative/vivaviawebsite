"use client";
import React from "react";
import FAQ from "@/app/ui/FAQ";
import ContactForm from "@/app/ui/ContactForm";
import QuickGuideCard from "@/app/ui/QuickGuideCard";
import HeroSection from "@/app/ui/HeroSection";
import { useTranslations } from "next-intl";

const Page: React.FC = () => {
  const t = useTranslations("contactPage");

  // Mapear las guías manualmente desde las claves de traducción
  const guides = t.raw("guides");

  return (
    <div>
      <HeroSection />
      <div className="mx-auto w-10/12 my-10">
        <div className="separador text-center mb-8">
          <h2 className="text-4xl">
            <strong className="text-primary">{t("heroSection.title")}</strong>
          </h2>
          <p className="text-lg text-slate-600">{t("heroSection.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide: any, index: number) => (
            <QuickGuideCard
              key={index}
              title={guide.title}
              description={guide.description}
              redirectUrl={guide.redirectUrl}
            />
          ))}
        </div>
      </div>

      <FAQ />
      <ContactForm />
    </div>
  );
};

export default Page;
