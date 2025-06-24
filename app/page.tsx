import Book from "@/components/Book";
import Contact from "@/components/Contact";
import Design from "@/components/Design";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Proof from "@/components/Proof";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <Proof/>
      <Design/>
      <Book/>
      <Contact/>
      <Footer/>
    </main>
  );
}
