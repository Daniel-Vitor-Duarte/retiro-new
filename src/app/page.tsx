import Image from "next/image";
import HeroSection from './components/sections/HeroSection';
import Testimonial from "./components/sections/TestimonialSection";
import Recomend from "./components/sections/RecommendationsSection";
import FaqSection from "./components/sections/FaqSection";

export default function Home() {
  return (
    <main >
       <HeroSection />
       <Testimonial />
       <Recomend />
       <FaqSection />
    </main>
  );
}
