import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shower, Bath, Tools, CheckCircle } from "lucide-react";

const BathroomPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background overflow-hidden">
      <Header />
      
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-primary/90" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Bathroom Renovation Specialists
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Transform your bathroom into a modern sanctuary
            </p>
          </motion.div>
        </div>
      </div>

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
              icon: <Bath className="w-12 h-12 text-primary" />,
              title: "Complete Renovations",
              description: "Full bathroom makeovers and installations"
            },
            {
              icon: <Shower className="w-12 h-12 text-primary" />,
              title: "Modern Fixtures",
              description: "Latest designs in bathroom fixtures and fittings"
            },
            {
              icon: <Tools className="w-12 h-12 text-primary" />,
              title: "Expert Installation",
              description: "Professional fitting and finishing services"
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
              <h3 className="text-xl font-bold mb-4 text-primary">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass p-8 rounded-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Ready for Your Dream Bathroom?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us to discuss your bathroom renovation project
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
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

export default BathroomPage;