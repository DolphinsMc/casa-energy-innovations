import { Services } from "@/components/Services";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <div className="pt-16">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;