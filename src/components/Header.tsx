import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-white hover:text-secondary transition-colors">Home</a>
            <a href="#services" className="text-white hover:text-secondary transition-colors">Services</a>
            <a href="#about" className="text-white hover:text-secondary transition-colors">About</a>
            <a href="#blog" className="text-white hover:text-secondary transition-colors">Blog</a>
            <a href="#contact" className="text-white hover:text-secondary transition-colors">Contact</a>
          </nav>
          <a 
            href="#contact" 
            className="bg-secondary text-primary px-4 py-2 rounded-md font-semibold hover:bg-secondary/90 transition-colors"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
};