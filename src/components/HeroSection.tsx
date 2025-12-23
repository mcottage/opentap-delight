import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-aerial.jpg';

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
          alt="Aerial view of OpenTap taproom - a modern log cabin style restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/70" />
      </motion.div>
      
      {/* Play button overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center hover:bg-secondary transition-colors group">
          <svg className="w-6 h-6 md:w-8 md:h-8 text-foreground ml-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </motion.div>
    </section>
  );
};
