import Image from "next/image";
import Hero from "./ui/Hero";
import Slider from "./ui/Slider";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero></Hero>
      <Slider></Slider>
    </div>
  );
}
