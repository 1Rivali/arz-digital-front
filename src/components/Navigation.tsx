import { useState, useEffect } from "react";
import arzLogo from "@/assets/arz-logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle body scroll lock when mobile menu opens/closes
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    // Cleanup function to reset styles when component unmounts
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "glass-effect border-b border-primary/20 backdrop-blur-xl bg-background/80"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
          >
            <img
              src={arzLogo}
              alt="ARZ Digital Co"
              className="h-16 w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#tech"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Technology
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Contact
            </a>
            {/* <a
              href="#projects"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Projects
            </a> */}
            <a
              href="#testimonials"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Testimonials
            </a>
            <Button variant="outline" size="sm">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-6 h-6">
              <span 
                className={`absolute top-1/2 left-0 w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 -translate-y-1/2' : '-translate-y-2'
                }`}
              />
              <span 
                className={`absolute top-1/2 left-0 w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`absolute top-1/2 left-0 w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1/2' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen 
              ? 'translate-y-0 bg-background/90 backdrop-blur-lg' 
              : '-translate-y-full bg-transparent pointer-events-none'
          } pt-24 px-6 md:hidden`}
          style={{
            height: '100vh',
            top: '80px', // Height of the header
          }}
        >
          <div className="flex flex-col h-full">
            <nav className="flex-1 space-y-1">
              {[
                { href: '#services', label: 'Services' },
                { href: '#tech', label: 'Technology' },
                { href: '#testimonials', label: 'Testimonials' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-4 px-4 -mx-4 text-lg font-medium text-foreground/90 hover:bg-foreground/5 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
