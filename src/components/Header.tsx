import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-white hover:text-secondary transition-colors">Home</Link>
            <Link to="/services" className="text-white hover:text-secondary transition-colors">Services</Link>
            <Link to="/about" className="text-white hover:text-secondary transition-colors">About</Link>
            <Link to="/blog" className="text-white hover:text-secondary transition-colors">Blog</Link>
            <Link to="/contact" className="text-white hover:text-secondary transition-colors">Contact</Link>
            <Link to="/dashboard" className="text-white hover:text-secondary transition-colors flex items-center gap-1">
              Dashboard
              <span className="text-xs bg-secondary/20 px-2 py-0.5 rounded-full">Admin</span>
            </Link>
          </nav>
          <Link 
            to="/contact" 
            className="bg-secondary text-primary px-4 py-2 rounded-md font-semibold hover:bg-secondary/90 transition-colors"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
};