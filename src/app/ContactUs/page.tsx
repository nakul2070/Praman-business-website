

import ContactForm from "@/components/ContactForm";
import ContactUsHero from "@/components/ContactUsHero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactUsHero/>
      <ContactForm/>
      <Footer/>
      
    </main>
  );
}
