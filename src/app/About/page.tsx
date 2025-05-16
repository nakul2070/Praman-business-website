import AboutHero from "@/components/AboutHero";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero/>
      <AboutSection />
      <Footer/>
      
    </main>
  );
}
