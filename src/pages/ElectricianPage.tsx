import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Zap, Shield, Wrench, CheckCircle } from "lucide-react";

const ElectricianPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#0F1218] overflow-hidden">
      <Header />
      
      {/* Hero Section with Parallax */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-[#1A1F2C]/90" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Electrical Services
            </h1>
            <p className="text-xl text-gray-200">
              Professional electrical solutions for your home and business
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Zap className="w-12 h-12 text-[#F97316]" />,
              title: "Electrical Installations",
              description: "Complete wiring and installation services for new builds and renovations"
            },
            {
              icon: <Shield className="w-12 h-12 text-[#F97316]" />,
              title: "Safety Inspections",
              description: "Thorough electrical safety checks and certifications"
            },
            {
              icon: <Wrench className="w-12 h-12 text-[#F97316]" />,
              title: "Maintenance & Repairs",
              description: "Quick and reliable electrical repair services"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-lg text-center group hover:scale-105 transition-transform duration-300"
            >
              <motion.div 
                className="mb-6 transform group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass p-8 rounded-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today for a free consultation and quote
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#F97316]/90 transition-colors duration-300"
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

export default ElectricianPage;