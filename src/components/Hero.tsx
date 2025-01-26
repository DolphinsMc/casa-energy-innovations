import { ArrowRight, Package, Truck, Building } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/50 z-0" />
        <img
          src="/lovable-uploads/afc0f047-056f-4667-abe3-611dc5812d99.png"
          alt="Building Materials"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Quality Building Supplies for Every Project
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Your trusted partner in roofing and building materials. Professional service, expert advice, and top-quality products.
          </p>
          <div className="flex gap-4 mb-16">
            <a 
              href="#products" 
              className="bg-secondary text-primary px-8 py-4 rounded font-semibold hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Explore Our Products
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
            >
              <Package className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Quality Materials</h3>
              <p className="text-white/80">Premium building supplies</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
            >
              <Building className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Expert Advice</h3>
              <p className="text-white/80">Professional guidance</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
            >
              <Truck className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-white/80">Reliable shipping</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};