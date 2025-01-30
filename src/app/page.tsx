"use client";
import Image from "next/image";
import HeroSection from './components/sections/HeroSection';
import Testimonial from "./components/sections/TestimonialSection";
import Recomend from "./components/sections/RecommendationsSection";
import FaqSection from "./components/sections/FaqSection";
import DataLayer from "@/app/components/DataLayer";

export default function Home() {
  return (
    <main >
      <DataLayer
        type_page="geral"
        id_produto="2875687"
        operacao="ppt"
        type_content="ppt"
        versao_pico="ppt"
      />
      <HeroSection />
      <Testimonial />
      <Recomend />
      <FaqSection />
    </main>
  );
}
