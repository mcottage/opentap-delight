import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import taproomImage from '@/assets/taproom-interior.jpg';

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
              alt="Interior of OpenTap taproom with craft beer taps"
              className="w-full h-80 md:h-[500px] object-cover rounded-lg shadow-lg"
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
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">
                The Port
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto md:mx-0" />
            </div>
            
            <p className="text-foreground text-lg leading-relaxed mb-8">
              Enjoy local food trucks at The Port, our covered, all-weather food truck setup serving delicious eats seven days a week. Check the calendar to see which truck is here tonight.
            </p>

            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8"
            >
              Calendar
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
