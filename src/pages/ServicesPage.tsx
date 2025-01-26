import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      <Header />
      <div className="pt-16">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;