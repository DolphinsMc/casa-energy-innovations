
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Residential Central Heating",
      location: "London",
      date: "September 2022",
      description: "Large-scale systems with low-loss headers"
    },
    {
      title: "Bathroom Refurbishment",
      location: "Tooting",
      date: "June 2022",
      description: "Complete bathroom renovation with eco-friendly fixtures"
    },
    {
      title: "Kitchen Extension",
      location: "Surbiton",
      date: "2020",
      description: "Modern kitchen extension with sustainable materials"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our latest successful installations and renovations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                <p className="text-secondary font-semibold">{project.location}</p>
                <p className="text-sm text-gray-500">{project.date}</p>
              </div>
              <p className="text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
