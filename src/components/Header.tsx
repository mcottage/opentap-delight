import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, Menu, X } from 'lucide-react';
import logo from '@/assets/logo.svg';

const navLinks = [
  { name: 'On Tap', href: '/on-tap' },
  { name: 'Food Trucks', href: '/food-trucks' },
  { name: 'Weekly Events', href: '/weekly-events' },
  { name: 'Bachelor', href: '/bachelor' },
  { name: 'Open Mic Night', href: '/open-mic' },
  { name: 'Private Parties', href: '/private-parties' },
];

const secondaryLinks = [
  { name: 'Our Story', href: '/our-story' },
  { name: 'Careers', href: '/careers' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-background sticky top-0 z-50 border-b border-border/50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          <div className="flex-1 flex justify-center">
            <Link to="/" className="block">
              <img src={logo} alt="Brew & Hops" className="h-16 md:h-20 w-auto" />
            </Link>
          </div>

          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:block w-20" />
        </div>

        <nav className="hidden md:flex flex-col items-center mt-3 gap-1">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-display uppercase tracking-widest transition-colors ${
                  isActive(link.href) ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-8 mt-1">
            {secondaryLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-xs font-body uppercase tracking-widest transition-colors ${
                  isActive(link.href) ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {[...navLinks, ...secondaryLinks].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-display uppercase tracking-widest text-sm py-2 border-b border-border/30 ${
                    isActive(link.href) ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
