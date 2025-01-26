import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/50 z-0" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://casa-assets.fra1.cdn.digitaloceanspaces.com/hero-video.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto pt-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Welcome to </span>
            <span className="text-secondary">CASA</span>
          </h1>
          <p className="text-2xl md:text-4xl mb-4 text-[#33C3F0]">
            Renewable Energy
          </p>
          <p className="text-xl md:text-2xl mb-8 text-[#33C3F0]">
            Air Source Heat Pump Specialists
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Transform your home's energy efficiency with our expert heat pump solutions. Save money, reduce your carbon footprint, and enjoy reliable heating and cooling all year round.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="#contact" 
              className="glass-card px-8 py-4 text-white hover:bg-white/20 transition-all duration-300"
            >
              Get Started Today
            </a>
            <a 
              href="#services" 
              className="glass-card px-8 py-4 text-secondary font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 group"
            >
              Discover Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};