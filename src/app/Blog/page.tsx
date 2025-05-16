
import BlogGrid from "@/components/BlogGrid";
import BlogHero from "@/components/BlogHero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <BlogHero/>
      <BlogGrid/>
      <Footer/>
      
    </main>
  );
}
