
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import Projects from "@/components/Projects";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Footer />
    </main>
  );
};

export default Index;
