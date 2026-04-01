import { HeroVideo } from "@/components/home/HeroVideo";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { LocationsSection } from "@/components/home/LocationsSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { CTASection } from "@/components/home/CTASection";
import { ContactBar } from "@/components/home/ContactBar";

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <IntroSection />
      <ServicesSection />
      <LocationsSection />
      <ApproachSection />
      <FeaturedProperties />
      <CTASection />
      <ContactBar />
    </>
  );
}
