import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'On Tap', href: '#on-tap' },
  { name: 'Food Trucks', href: '#food-trucks' },
  { name: 'Weekly Events', href: '#events' },
  { name: 'Bachelor', href: '#bachelor' },
  { name: 'Open Mic Night', href: '#open-mic' },
  { name: 'Private Parties', href: '#parties' },
];

const secondaryLinks = [
  { name: 'Our Story', href: '#story' },
  { name: 'Careers', href: '#careers' },
  { name: 'FAQ', href: '#faq' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        {/* Logo and Social */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <a href="/" className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-wide">
              Open<span className="text-primary">Tap</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Cart placeholder for spacing */}
          <div className="hidden md:block w-20" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-col items-center mt-4 gap-2">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            {secondaryLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {[...navLinks, ...secondaryLinks].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium py-2 border-b border-border/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
