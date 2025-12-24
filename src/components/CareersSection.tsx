import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import teamImage from '@/assets/team.jpg';
import { Link } from 'react-router-dom';

export const CareersSection = () => {
  return (
    <section id="careers" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase tracking-wider text-foreground mb-6">
              Join Our Team
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
              We're always looking for passionate individuals who love craft drinks and creating memorable experiences. Join the Pines Brewing family today.
            </p>

            <Link to="/careers">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-display uppercase tracking-wider px-8"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={teamImage}
              alt="Pines Brewing team members smiling outdoors"
              className="w-full h-80 md:h-[400px] object-cover rounded shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
