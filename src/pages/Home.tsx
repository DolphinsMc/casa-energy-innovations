import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Hero />
      <About />
      <Services />
      <Projects />
    </main>
  );
};

export default Home;