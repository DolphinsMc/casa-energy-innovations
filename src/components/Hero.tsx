import { ArrowRight, Home } from "lucide-react";
import { motion } from "framer-motion";

const floatingIcons = Array(3).fill(null);

export const Hero = () => {
  return (
    <section className="min-h-[80vh] relative overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/50 z-0" />
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
          className="absolute text-primary/20"
          initial={{ y: "100vh" }}
          animate={{
            y: "-100vh",
            x: [0, Math.random() * 50 - 25],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: index * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 1.5 + 1}rem`,
          }}
        >
          <Home className="w-8 h-8" />
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
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional Home Solutions
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Expert air source heat pump solutions for your home
          </motion.p>
          <motion.div 
            className="flex gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#contact" 
              className="glass btn btn-primary group"
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