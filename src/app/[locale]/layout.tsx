import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../ui/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { useTranslations } from "next-intl";
import Footer from "../ui/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const t = useTranslations();
  return (
    <html lang={locale} className="">
      <body>
        <NextIntlClientProvider messages={{}}>
          <Navbar
            inicio={t("navbar.inicio")}
            paquetes={t("navbar.paquetes")}
            blog={t("navbar.blog")}
            nosotros={t("navbar.nosotros")}
            contacto={t("navbar.contacto")}
            isesion={t("navbar.isesion")}
            registro={t("navbar.registro")}
            soporte={t("navbar.soporte")}
            preguntas={t("navbar.preguntas")}
          />
          {children}
          <Footer></Footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
