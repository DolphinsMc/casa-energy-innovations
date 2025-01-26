import { motion } from "framer-motion";
import { Shield, Leaf, PoundSterling } from "lucide-react";

const services = [
  {
    icon: <Shield className="w-12 h-12 text-secondary" />,
    title: "Expert Installation",
    description: "Professional heat pump installation by certified specialists"
  },
  {
    icon: <Leaf className="w-12 h-12 text-secondary" />,
    title: "Eco-Friendly Solutions",
    description: "Reduce your carbon footprint with renewable energy"
  },
  {
    icon: <PoundSterling className="w-12 h-12 text-secondary" />,
    title: "Government Grants",
    description: "£7,500 grant available for new heating systems"
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/10 to-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-8 text-center"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-primary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};