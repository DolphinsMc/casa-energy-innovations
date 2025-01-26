import { Logo } from "./Logo";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <Logo />
            </motion.div>
            <p className="text-white/80">
              Leading provider of renewable energy solutions in the UK.
            </p>
          </motion.div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 neon-glow">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-secondary transition-colors hover-scale inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-secondary transition-colors hover-scale inline-block">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-secondary transition-colors hover-scale inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-secondary transition-colors hover-scale inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 neon-glow">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="w-4 h-4 text-secondary" />
                <span>0800 123 4567</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4 text-secondary" />
                <span>info@casa-energy.com</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>123 Energy Street, London, UK</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 neon-glow">Follow Us</h3>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-white/80 hover:text-secondary transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} CASA Energy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};