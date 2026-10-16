import BestPlaceSection from "@/components/organisms/Landing/BestPlaceSection";
import CategorySection from "@/components/organisms/Landing/CategorySection";
import HeroSection from "@/components/organisms/Landing/Hersection";
import PopularVillasSection from "@/components/organisms/Landing/PopularVillasSection";
import SpecialOffersSection from "@/components/organisms/Landing/SpecialOffersSection";
import TestimonialsSection from "@/components/organisms/Landing/TestimonialsSection";
import WhyChooseUsSection from "@/components/organisms/Landing/WhyChooseUsSection";


export default function HomePage() {
  return (
    <>
      <div className="flex flex-col gap-24">
        <HeroSection />
        <CategorySection />
        <SpecialOffersSection />
        <PopularVillasSection />
        <TestimonialsSection />
        <BestPlaceSection />
        <WhyChooseUsSection />
      </div>
    </>
  );
}
