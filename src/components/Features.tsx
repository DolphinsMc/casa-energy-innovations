import { motion } from "framer-motion";
import { Leaf, PoundSterling, Zap } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Leaf className="w-12 h-12 text-secondary" />,
      title: "Renewable Energy Expertise",
      description: "From air source heat pumps to solar power, we provide comprehensive clean energy solutions"
    },
    {
      icon: <PoundSterling className="w-12 h-12 text-secondary" />,
      title: "Government Grant Assistance",
      description: "£7,500 grant available for new heating systems - we handle all paperwork"
    },
    {
      icon: <Zap className="w-12 h-12 text-secondary" />,
      title: "Energy Efficiency",
      description: "Our solutions are designed to maximize efficiency and comfort in your home"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Why Choose <span className="text-secondary">CASA</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leading the way in sustainable energy solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:scale-105 transition-transform duration-300"
            >
              <motion.div 
                className="mb-6 transform group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-primary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};