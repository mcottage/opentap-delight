import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import taproomImage from '@/assets/taproom-interior.jpg';
import { Link } from 'react-router-dom';

export const ThePortSection = () => {
  return (
    <section id="food-trucks" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <img
              src={taproomImage}
              alt="Interior of Pines Brewing taproom with craft beer taps"
              className="w-full h-80 md:h-[500px] object-cover rounded shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-display uppercase tracking-wider text-primary mb-2">
                The Port
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto md:mx-0" />
            </div>
            
            <p className="text-foreground text-lg leading-relaxed mb-8 font-body">
              Enjoy local food trucks at The Port, our covered, all-weather food truck setup serving delicious eats seven days a week. Check the calendar to see which truck is here tonight.
            </p>

            <Link to="/food-trucks">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-display uppercase tracking-wider px-8"
              >
                Calendar
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
