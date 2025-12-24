import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Clock, Phone } from 'lucide-react';
import logo from '@/assets/logo.svg';

export const Footer = () => {
  return (
    <footer className="bg-forest-dark py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-16">
          {/* Logo and Social */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Brew & Hops" className="h-20 w-auto mx-auto md:mx-0" />
            </Link>
            <p className="text-muted-foreground mt-4 mb-6">
              Chamblee's Self-Pour Taproom
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h3 className="font-display uppercase tracking-widest text-foreground text-lg mb-4 flex items-center gap-2 justify-center md:justify-start">
              <Clock className="w-5 h-5 text-primary" />
              Hours
            </h3>
            <ul className="space-y-2 text-muted-foreground font-body">
              <li>Monday - Thursday: 3PM - 10PM</li>
              <li>Friday: 3PM - 11PM</li>
              <li>Saturday: 12PM - 11PM</li>
              <li>Sunday: 12PM - 9PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="font-display uppercase tracking-widest text-foreground text-lg mb-4 flex items-center gap-2 justify-center md:justify-start">
              <MapPin className="w-5 h-5 text-primary" />
              Location
            </h3>
            <address className="text-muted-foreground not-italic space-y-2 font-body">
              <p>5251 Peachtree Blvd #103</p>
              <p>Chamblee, GA 30341</p>
            </address>
            <a href="tel:+16785551234" className="text-primary hover:text-primary/80 transition-colors mt-4 flex items-center gap-2 justify-center md:justify-start font-body">
              <Phone className="w-4 h-4" />
              (678) 555-1234
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm font-body">
            © {new Date().getFullYear()} Brew & Hops. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
