import { motion } from 'framer-motion';
import pizzaImage from '@/assets/pizza-beer.jpg';

export const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            A Modern Log Cabin Taproom!
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Step into a world of flavor and creativity at OpenTap, where local food trucks pull directly into our covered, all-weather food truck port connected to our taproom. With great food, over 60 taps featuring a wide selection of craft drinks, including non-alcoholic options, and a welcoming atmosphere, OpenTap offers a relaxed place to gather and unwind.
          </p>
        </motion.div>

        {/* NC Badge and Food Image */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-primary/20 border-2 border-primary flex items-center justify-center">
              <span className="text-primary font-display font-bold text-2xl md:text-3xl">NC</span>
            </div>
            <span className="mt-2 text-muted-foreground text-sm">North Carolina</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={pizzaImage}
              alt="Delicious pizza slice with melted cheese and a craft beer"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
