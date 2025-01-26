import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Ready to Transform Your Home?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get in touch with CASA Contracts today and take the first step towards a greener, 
            more energy-efficient future.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card inline-flex items-center gap-2 px-8 py-4 text-primary hover:text-secondary transition-colors group"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};