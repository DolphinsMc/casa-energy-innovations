import { ArrowRight, Home } from "lucide-react";
import { motion } from "framer-motion";

const floatingIcons = Array(5).fill(null);

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/50 z-0" />
        <img
          src="/lovable-uploads/afc0f047-056f-4667-abe3-611dc5812d99.png"
          alt="Renewable Energy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-secondary/30"
          initial={{ y: "100vh" }}
          animate={{
            y: "-100vh",
            x: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: index * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 2 + 1}rem`,
          }}
        >
          <Home className="w-12 h-12" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Renewable Energy Solutions
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Leading the way in sustainable energy with expert air source heat pump solutions
          </motion.p>
          <motion.div 
            className="flex gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#contact" 
              className="glass group px-8 py-4 rounded-lg font-semibold 
                       bg-secondary/80 text-primary hover:bg-secondary 
                       transition-all duration-300 shadow-lg hover:shadow-secondary/50
                       hover:scale-105 flex items-center gap-2
                       border border-white/20 backdrop-blur-sm"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};