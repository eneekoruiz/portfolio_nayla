import useSmoothScroll from "./hooks/useSmoothScroll";
import Navigation from "./components/Navigation";

// Import Sections
import HeroSection from "./sections/HeroSection";
import TransitionEyeSection from "./sections/TransitionEyeSection";
import WorkIndexSection from "./sections/WorkIndexSection";
import TarotSection from "./sections/TarotSection";
import BrandingSection from "./sections/BrandingSection";
import PhotographySection from "./sections/PhotographySection";
import PackagingSection from "./sections/PackagingSection";
import MerchSection from "./sections/MerchSection";
import EditorialSection from "./sections/EditorialSection";
import ContactCvSection from "./sections/ContactCvSection";

export default function App() {
  // Initialize Lenis smooth scroll
  useSmoothScroll();

  return (
    <>
      {/* Background SVG Grain Noise */}
      <div className="noise-overlay" />

      {/* Persistent Navigation Bar */}
      <Navigation />

      {/* Main Sections Layout */}
      <main>
        <HeroSection />
        <TransitionEyeSection />
        <WorkIndexSection />
        <TarotSection />
        <BrandingSection />
        <PhotographySection />
        <PackagingSection />
        <MerchSection />
        <EditorialSection />
        <ContactCvSection />
      </main>
    </>
  );
}
