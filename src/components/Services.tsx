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

export const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive renewable energy solutions for your home
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
              className="glass-card group hover:scale-105 transition-transform duration-300"
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
      </div>
    </section>
  );
};