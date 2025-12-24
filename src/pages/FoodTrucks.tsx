import { motion } from 'framer-motion';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import sandwichImage from '@/assets/food-truck-sandwich.jpg';

const menuItems = [
  {
    id: 1,
    name: 'Indian Snacks Menu',
    date: 'Available Daily',
    time: 'During all hours',
    description: 'Authentic Indian snacks including samosas, pakoras, chaat, and more. The perfect pairing for your self-poured craft beverages!',
    menuLink: '#',
    image: sandwichImage,
  },
  {
    id: 2,
    name: 'Indian Fusion Coming Soon',
    date: 'Expanding Soon',
    time: 'Full Menu',
    description: 'We\'re expanding to a full menu with Indian fusion dishes that blend traditional flavors with modern culinary techniques.',
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
              Indian Fusion Kitchen
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enjoy authentic Indian snacks now, with a full menu of Indian fusion dishes coming soon!
            </p>
          </motion.div>

          <div className="space-y-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden bg-card border-border">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-3">
                        {item.name}
                      </h2>
                      <div className="flex flex-col gap-2 text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{item.time}</span>
                        </div>
                      </div>
                      <p className="text-foreground mb-6">{item.description}</p>
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
