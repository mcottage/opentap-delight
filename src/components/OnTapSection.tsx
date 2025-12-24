import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Beer } from 'lucide-react';
import { Link } from 'react-router-dom';

export const OnTapSection = () => {
  return (
    <section id="on-tap" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-primary rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-primary rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-primary rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <Beer className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase tracking-wider text-foreground mb-6">
            On Tap Menu
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 font-body">
            Over 60 taps featuring craft beers, ciders, wines, seltzers, and non-alcoholic options. There's something for everyone.
          </p>

          <Link to="/on-tap">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-display uppercase tracking-wider px-8"
            >
              View Full Menu
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
