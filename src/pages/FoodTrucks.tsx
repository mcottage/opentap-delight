import { motion } from 'framer-motion';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import sandwichImage from '@/assets/food-truck-sandwich.jpg';

const foodTrucks = [
  {
    id: 1,
    name: 'Praise Cheeses',
    date: 'Sunday, December 21, 2025',
    time: '12:00 PM - 9:00 PM',
    description: 'A Charlotte-based food truck offering melty grilled sandwiches, warm soups, healthy salads, and delectable features that are fast and delicious!',
    menuLink: 'https://praise-cheeses.com/',
    image: sandwichImage,
  },
  {
    id: 2,
    name: "Consuelo's Taqueria",
    date: 'Monday, December 22, 2025',
    time: '5:00 PM - 9:00 PM',
    description: "Consuelo's Taqueria is inspired by the traditional flavors of Mexico City. They serve up some amazing tacos, burritos, and quesadillas!",
    menuLink: '#',
    image: sandwichImage,
  },
  {
    id: 3,
    name: 'Smoke & Barrel BBQ',
    date: 'Tuesday, December 23, 2025',
    time: '5:00 PM - 9:00 PM',
    description: 'Authentic Carolina-style BBQ with slow-smoked meats, homemade sides, and signature sauces.',
    menuLink: '#',
    image: sandwichImage,
  },
  {
    id: 4,
    name: 'Wok This Way',
    date: 'Wednesday, December 24, 2025',
    time: '3:00 PM - 8:00 PM',
    description: 'Fresh Asian fusion dishes made to order. From stir-fries to noodle bowls, everything is prepared fresh.',
    menuLink: '#',
    image: sandwichImage,
  },
];

const FoodTrucks = () => {
  return (
    <PageLayout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              The Port
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enjoy local food trucks at The Port, our covered, all-weather food truck setup serving delicious eats seven days a week.
            </p>
          </motion.div>

          <div className="space-y-8">
            {foodTrucks.map((truck, index) => (
              <motion.div
                key={truck.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden bg-card border-border">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <img
                        src={truck.image}
                        alt={truck.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-center">
                        <div className="text-xs uppercase tracking-wider">Dec</div>
                        <div className="text-2xl font-bold">{21 + index}</div>
                      </div>
                    </div>
                    <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-3">
                        {truck.name}
                      </h2>
                      <div className="flex flex-col gap-2 text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{truck.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{truck.time}</span>
                        </div>
                      </div>
                      <p className="text-foreground mb-6">{truck.description}</p>
                      <div className="flex gap-4">
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Menu
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FoodTrucks;
