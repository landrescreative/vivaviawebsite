import Image from "next/image";
import Hero from "../../ui/Hero";
import Slider from "../../ui/Slider";
import { useTranslations } from "next-intl";
import RecentTravels from "../../ui/RecentTravels";
import Ofertas from "../../ui/Ofertas";
import AboutUsSection from "../../ui/AboutUsSection";
import BlogSection from "../../ui/BlogSection";
import ReviewsSection from "../../ui/ReviewSection";
import Footer from "../../ui/Footer";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="flex flex-col">
      <Hero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        button={t("hero.button")}
      ></Hero>
      <Slider></Slider>
      <RecentTravels></RecentTravels>
      <Ofertas></Ofertas>
      <AboutUsSection></AboutUsSection>
      <BlogSection></BlogSection>
      <ReviewsSection></ReviewsSection>
    </div>
  );
}
