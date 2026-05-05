import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu as MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  onSearchClick: () => void;
}

export const Navbar = ({ onSearchClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-4 group">
          <div className="w-14 h-14 bg-cactus-dark rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden shadow-lg">
            <img 
              src="/logo-cactus-coffee.jpg" 
              alt="Cactus Coffee Logo" 
              className="w-full h-full object-contain p-2" 
              onError={(e) => {
                
                (e.target as HTMLElement).style.display = 'none';
                if ((e.target as HTMLElement).parentElement) {
                  (e.target as HTMLElement).parentElement!.innerHTML = '<span class="text-desert-sand font-bold text-xl">C</span>';
                }
              }} 
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-sans font-black tracking-[0.3em] text-[10px] uppercase leading-none ${
              isScrolled ? 'text-cactus-dark' : 'text-desert-sand'
            }`}>
              CACTUS
            </span>
            <span className={`font-sans font-medium tracking-[0.3em] text-[10px] uppercase leading-none mt-1 ${
              isScrolled ? 'text-copper' : 'text-copper/80'
            }`}>
              COFFEE
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <div className={`flex items-center gap-2 px-2 py-1.5 rounded-full transition-all duration-500 ${
            isScrolled 
              ? 'bg-black/5 backdrop-blur-xl border border-black/5 shadow-sm' 
              : 'bg-white/10 backdrop-blur-md border border-white/10'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2 font-sans text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 group ${
                  isScrolled ? 'text-cactus-dark' : 'text-desert-sand'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-1 left-5 right-5 h-[1px] bg-copper scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </a>
            ))}
          </div>
        </div>

        {/* Action buttons & Mobile Toggle container */}
        <div className="flex items-center gap-2 md:gap-6">
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={onSearchClick}
              className={`transition-all duration-300 hover:scale-110 ${
                isScrolled ? 'text-cactus-dark' : 'text-desert-sand'
              }`}
              aria-label="Search"
            >
              <Search className="w-4 h-4 stroke-[2.5]" />
            </button>
            <a
              href="#contact"
              className={`px-8 py-3.5 rounded-full font-sans text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-copper/20 ${
                isScrolled 
                  ? 'bg-cactus-dark text-desert-sand hover:bg-copper' 
                  : 'bg-desert-sand text-cactus-dark hover:bg-white'
              }`}
            >
              ORDER ONLINE
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={onSearchClick}
              className={`md:hidden p-3 transition-colors ${
                isScrolled ? 'text-cactus-dark hover:text-copper' : 'text-desert-sand hover:text-white'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              className={`md:hidden p-2 ${
                isScrolled ? 'text-cactus-dark' : 'text-desert-sand'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-desert-sand border-t border-cactus-dark/10 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-8 gap-8 items-center text-cactus-dark">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-sans font-medium tracking-tight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="w-full text-center px-10 py-5 bg-cactus-dark text-desert-sand rounded-full font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ORDER NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
