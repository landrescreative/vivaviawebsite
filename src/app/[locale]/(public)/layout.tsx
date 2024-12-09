import type { Metadata } from "next";
import "@/app/[locale]/globals.css";
import Navbar from "../../ui/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { useTranslations } from "next-intl";
import Footer from "../../ui/Footer";
import { Poppins } from "@next/font/google";

export const metadata: Metadata = {
  title: "VIVAVIA ALPHA",
  description: "VER 0.3.2",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // all weights
  subsets: ["latin"],
});

export default function LocaleLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const t = useTranslations();
  return (
    <html lang={locale} className="">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
