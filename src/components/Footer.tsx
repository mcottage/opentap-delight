import { Instagram, Facebook, MapPin, Clock, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-navy-dark py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-16">
          {/* Logo and Social */}
          <div className="text-center md:text-left">
            <a href="/" className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-wide">
              Open<span className="text-primary">Tap</span>
            </a>
            <p className="text-muted-foreground mt-4 mb-6">
              A Modern Log Cabin Taproom in Charlotte, NC
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-foreground text-lg mb-4 flex items-center gap-2 justify-center md:justify-start">
              <Clock className="w-5 h-5 text-primary" />
              Hours
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Monday - Thursday: 3PM - 10PM</li>
              <li>Friday: 3PM - 11PM</li>
              <li>Saturday: 12PM - 11PM</li>
              <li>Sunday: 12PM - 9PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-foreground text-lg mb-4 flex items-center gap-2 justify-center md:justify-start">
              <MapPin className="w-5 h-5 text-primary" />
              Location
            </h3>
            <address className="text-muted-foreground not-italic space-y-2">
              <p>2412 Thrift Rd</p>
              <p>Charlotte, NC 28208</p>
            </address>
            <a href="tel:+17045551234" className="text-primary hover:text-primary/80 transition-colors mt-4 flex items-center gap-2 justify-center md:justify-start">
              <Phone className="w-4 h-4" />
              (704) 555-1234
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} OpenTap CLT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
