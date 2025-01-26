import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { Features } from "@/components/Features";
import { Innovation } from "@/components/Innovation";
import { Contact } from "@/components/Contact";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Features />
      <Projects />
      <Innovation />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;