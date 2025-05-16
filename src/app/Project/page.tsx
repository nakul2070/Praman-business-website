import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import LaserScanning from "@/components/LaserScanning";
import LatestProjects from "@/components/LatestProjects";
import Navbar from "@/components/Navbar";
import ProjectHero from "@/components/ProjectHero";


export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProjectHero/>
      <LatestProjects />
      <Footer/>
      
    </main>
  );
}
