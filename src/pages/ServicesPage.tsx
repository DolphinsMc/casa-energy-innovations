import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Leaf, PoundSterling, Thermometer, Power, WrenchIcon } from "lucide-react";

const services = [
  {
    icon: <Thermometer className="w-12 h-12 text-secondary" />,
    title: "Heat Pump Systems",
    description: "Expert installation of efficient air source heat pumps for sustainable heating"
  },
  {
    icon: <Power className="w-12 h-12 text-secondary" />,
    title: "Electrical Services",
    description: "Complete electrical solutions from rewiring to smart home installations"
  },
  {
    icon: <WrenchIcon className="w-12 h-12 text-secondary" />,
    title: "Plumbing & Heating",
    description: "Professional plumbing services and heating system maintenance"
  },
  {
    icon: <Shield className="w-12 h-12 text-secondary" />,
    title: "Expert Installation",
    description: "Professional installation by certified specialists with warranty"
  },
  {
    icon: <Leaf className="w-12 h-12 text-secondary" />,
    title: "Eco-Friendly Solutions",
    description: "Reduce your carbon footprint with renewable energy systems"
  },
  {
    icon: <PoundSterling className="w-12 h-12 text-secondary" />,
    title: "Government Grants",
    description: "£7,500 grant available for new heating systems - we handle the paperwork"
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white overflow-hidden">
      <Header />
      
      {/* Hero Section with Parallax */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="parallax-bg bg-[url('/hero-bg.jpg')]" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-glow">
              Our Services
            </h1>
            <p className="text-xl text-white/90">
              Comprehensive renewable energy solutions for your home
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your home with our expert renewable energy solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300"
            >
              <motion.div 
                className="mb-6 transform group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-primary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gradient">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Take advantage of the £7,500 government grant towards your new central heating system. 
              We handle all the paperwork for you.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-secondary text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
            >
              Contact Us Today
            </motion.a>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;