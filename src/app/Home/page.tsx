import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";

import Home from "@/components/Home"
import LatestProjects from "@/components/LatestProjects";
import MissionVisionValue from "@/components/MissionVisionValue";
import Navbar from "@/components/Navbar";
import OurServicesSection from "@/components/OurServicesSection";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Home />
      <AboutSection />
      <MissionVisionValue />
      <OurServicesSection />
      <LatestProjects />
      <TestimonialSlider />
      <HeroBanner />
      <Footer />
    </main>
  );
}
