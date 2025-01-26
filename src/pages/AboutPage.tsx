import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <div className="pt-16">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;