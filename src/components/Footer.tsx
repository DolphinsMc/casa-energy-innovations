import { Logo } from "./Logo";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-white/80">
              Leading provider of renewable energy solutions in the UK.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#services" className="text-white/80 hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#about" className="text-white/80 hover:text-secondary transition-colors">About</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-white/80">0800 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-white/80">info@casa-energy.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-white/80">123 Energy Street, London, UK</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-white/80 hover:text-secondary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-secondary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-secondary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
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