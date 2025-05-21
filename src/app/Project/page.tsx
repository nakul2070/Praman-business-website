import Footer from "@/components/Footer";
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
