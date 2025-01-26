import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Award, Users, Zap, Home, Wrench, Lightbulb } from "lucide-react";

const AboutPage = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: "Renewable Energy Expertise",
      description: "Specialists in air source heat pumps and sustainable solutions"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Expert Team",
      description: "Skilled professionals dedicated to excellence"
    },
    {
      icon: <Zap className="w-8 h-8 text-secondary" />,
      title: "Energy Efficiency",
      description: "Up to 40% more efficient than traditional systems"
    }
  ];

  const projects = [
    {
      title: "Residential Central Heating",
      location: "London",
      date: "September 2022",
      description: "Large-scale systems with low-loss headers"
    },
    {
      title: "Bathroom Refurbishments",
      location: "Tooting",
      date: "June 2022",
      description: "Complete renovation with modern fixtures"
    },
    {
      title: "Kitchen Extensions",
      location: "Surbiton",
      date: "2020",
      description: "Expanded living space with sustainable features"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      <Header />
      
      {/* Hero Section with Parallax */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="parallax-bg bg-[url('/hero-bg.jpg')]" />
        <div className="absolute inset-0 bg-primary/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-glow">
              Welcome to CASA Contracts
            </h1>
            <p className="text-xl text-white/90">
              Air Source Heat Pump Specialists
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Mission Statement */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gradient">Our Mission</h2>
            <p className="text-lg text-gray-700">
              At CASA Contracts, we are dedicated to providing renewable energy solutions tailored to meet your needs. 
              As specialists in air source heat pumps, we pride ourselves on delivering energy-efficient systems that 
              reduce carbon footprints and save on energy costs.
            </p>
          </div>
        </motion.section>

        {/* Achievements Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Why Choose CASA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Showcase */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Our Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4">
                  {project.location} - {project.date}
                </p>
                <p className="text-gray-600">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gradient">
              Ready to Transform Your Home?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Take advantage of the £7,500 government grant towards your new central heating system. 
              We handle all the paperwork for you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;