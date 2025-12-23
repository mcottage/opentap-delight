import { motion } from 'framer-motion';
import { PageLayout } from '@/components/PageLayout';
import { Beer, Wine, Coffee, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import taproomImage from '@/assets/taproom-interior.jpg';

const categories = [
  {
    name: 'Craft Beer',
    count: '40+',
    icon: Beer,
    description: 'IPAs, Stouts, Lagers, Sours, and more from local and national breweries.',
  },
  {
    name: 'Wine',
    count: '10+',
    icon: Wine,
    description: 'Red, white, rosé, and sparkling wines on tap for the freshest pour.',
  },
  {
    name: 'Seltzers & Ciders',
    count: '8+',
    icon: Droplets,
    description: 'Refreshing hard seltzers and craft ciders for lighter options.',
  },
  {
    name: 'Non-Alcoholic',
    count: '12+',
    icon: Coffee,
    description: 'NA beers, mocktails, craft sodas, and specialty coffee drinks.',
  },
];

const OnTap = () => {
  return (
    <PageLayout showTreeBanner={false}>
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={taproomImage}
          alt="OpenTap bar with taps"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              On Tap Menu
            </h1>
            <p className="text-xl text-muted-foreground">
              Over 60 taps of craft drinks
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border text-center hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-1">
                  {category.name}
                </h3>
                <p className="text-3xl font-bold text-primary mb-3">{category.count}</p>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </motion.div>
            ))}
          </div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-xl p-8 md:p-12 max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              How Open-Serve Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Get Your Wristband</h3>
                <p className="text-muted-foreground text-sm">
                  We'll program a wristband with your credit card and ID when you arrive.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Tap & Pour</h3>
                <p className="text-muted-foreground text-sm">
                  Tap your wristband on any tap and pour as much or as little as you like.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Easy Checkout</h3>
                <p className="text-muted-foreground text-sm">
                  Drop your wristband in the checkout bin when you're done. That's it!
                </p>
              </div>
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="https://untappd.com/v/opentap/11838659" target="_blank" rel="noopener noreferrer">
                View Full Menu on Untappd
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default OnTap;
