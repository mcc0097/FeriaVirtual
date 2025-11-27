import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DescriptionSection from "@/components/DescriptionSection";
import InfoSection from "@/components/InfoSection";
import FinalDescriptionsSection from "@/components/FinalDescription";
import FAQSection from "@/components/FAQSection";
import SponsorsCarousel from "@/components/SponsorsCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <DescriptionSection />
      <InfoSection />
      <FinalDescriptionsSection />
      <FAQSection />
      <SponsorsCarousel />
      <Footer />
    </main>
  );
}
