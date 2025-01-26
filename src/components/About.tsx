import { motion } from "framer-motion";
import { Check, Award, Users } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: <Check className="w-6 h-6 text-[#28395D]" />,
      title: "Renewable Energy Expertise",
      description: "Comprehensive clean energy solutions including air source heat pumps and solar power"
    },
    {
      icon: <Award className="w-6 h-6 text-[#28395D]" />,
      title: "Government Grant Assistance",
      description: "£7,500 grant available for new heating systems - we handle all paperwork"
    },
    {
      icon: <Users className="w-6 h-6 text-[#28395D]" />,
      title: "Expert Installation",
      description: "Professional installation by certified specialists with full warranty"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
            Why Choose <span className="text-[#28395D]">CASA</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At CASA Contracts, we are dedicated to providing renewable energy solutions tailored to meet your needs.
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