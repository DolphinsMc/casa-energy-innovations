import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Features } from "@/components/Features";
import { Innovation } from "@/components/Innovation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white overflow-hidden">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Services />
        <Features />
        <Projects />
        <Innovation />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;