import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-aerial.jpg';
import logo from '@/assets/logo.svg';

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Aerial view of Pines Brewing Company taproom in the forest"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background" />
      </motion.div>
      
      {/* Logo overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <img src={logo} alt="Pines Brewing Company" className="h-32 md:h-48 w-auto mb-6" />
        <p className="font-display uppercase tracking-[0.3em] text-foreground/90 text-sm md:text-base">
          Craft Beer • Forest Vibes
        </p>
      </motion.div>
    </section>
  );
};
