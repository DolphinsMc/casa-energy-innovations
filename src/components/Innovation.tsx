
import { motion } from "framer-motion";
import { Thermometer, Gauge } from "lucide-react";

const Innovation = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Efficiency Meets Innovation
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <Thermometer className="w-8 h-8 text-secondary" />
              <h3 className="text-xl font-bold text-primary">Underfloor Heating</h3>
            </div>
            <p className="text-gray-600">
              Up to 40% more efficient than radiators, offering evenly distributed warmth throughout your home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <Gauge className="w-8 h-8 text-secondary" />
              <h3 className="text-xl font-bold text-primary">Advanced Heating Units</h3>
            </div>
            <p className="text-gray-600">
              Daikin Hydro Split high-temperature pumps reaching up to 75°C for optimal performance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
