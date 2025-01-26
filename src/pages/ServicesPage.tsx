import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";
import { ArrowRight, Award, CheckCircle2, Leaf } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      <Header />
      
      {/* Hero Section with Parallax */}
      <section className="relative h-[80vh] overflow-hidden flex items-center">
        <div className="parallax-bg" style={{ 
          backgroundImage: 'url("/hero-bg.jpg")',
          transform: 'translateZ(-1px) scale(2)'
        }} />
        
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            CASA - RENEWABLE ENERGY
            <span className="block text-secondary mt-2">HEAT PUMP SPECIALIST</span>
          </h1>
          
          <p className="text-xl text-white/90 max-w-2xl mb-8">
            Air Source Heat Pump specialists bringing sustainable energy solutions to your home. Take advantage of the new £7.5k government grant towards your new central heating system.
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="glass-card inline-block px-8 py-4 text-white"
          >
            <span className="flex items-center gap-2">
              Get Started Today <ArrowRight className="w-5 h-5" />
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-secondary" />,
                title: "Expert Installation",
                description: "Professional installation by certified specialists"
              },
              {
                icon: <Leaf className="w-12 h-12 text-secondary" />,
                title: "Eco-Friendly",
                description: "Reduce your carbon footprint with renewable energy"
              },
              {
                icon: <CheckCircle2 className="w-12 h-12 text-secondary" />,
                title: "Government Grants",
                description: "£7,500 grant available - we handle the paperwork"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-8 text-center group hover:scale-105 transition-duration-300"
              >
                <motion.div 
                  className="mb-6 transform group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-primary neon-glow">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <Services />

      {/* Social Proof */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Bringing Dreams to Life
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Thrilled to share the news of yet another successful project completion! 
              It has been an absolute pleasure working under the meticulous eye of brilliant 
              interior designers. We faced our fair share of challenges, but tackling them 
              head-on is what we do best!
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "RenewableEnergy", "CleanEnergy", "SustainableEnergy", 
                "GreenEnergy", "EnergyEfficiency", "GoGreen"
              ].map((tag, index) => (
                <span 
                  key={tag}
                  className="bg-secondary/20 text-primary px-4 py-2 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;