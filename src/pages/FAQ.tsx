import { motion } from 'framer-motion';
import { PageLayout } from '@/components/PageLayout';
import taproomImage from '@/assets/taproom-interior.jpg';

const faqItems = [
  {
    question: 'Are you pet friendly?',
    answer: 'We love dogs, but to make sure everyone stays safe, Brew & Hops is a pet-free environment. We welcome service dogs.',
  },
  {
    question: 'What food do you serve?',
    answer: 'We offer authentic Indian snacks and are expanding to a full menu of Indian fusion dishes. The perfect pairing for your self-poured beverages!',
  },
  {
    question: 'Do you have gluten-free alcoholic beverage options?',
    answer: 'Yes! We proudly offer a variety of gluten-reduced beers and gluten-free ciders, wines, and kombucha.',
  },
  {
    question: 'Do you have non-alcoholic options?',
    answer: 'Absolutely! We have taps dedicated to non-alcoholic beer, kombucha, and other NA options.',
  },
  {
    question: 'Do you take reservations?',
    answer: "Brew & Hops is first-come, first-served. If you're interested in reserving a private space for an event, please see our Private Parties page.",
  },
  {
    question: 'What do you mean by self-pour?',
    answer: "There's no waiting at Brew & Hops! When you arrive, we'll program a wristband with your credit card information and ID. From there you are free to pour from any of our 42 taps! Simply tap your wristband to the beverage of your choice and start pouring — as much or as little as you like. Each tap has a screen that provides information about the beverage, including a short description, alcohol content, and price per ounce. You're only charged for the ounces you pour. When you're done exploring and tasting, you drop your band in the easy checkout bin or meet us at the register. That's it. Simple.",
  },
  {
    question: 'How old do I have to be to visit?',
    answer: 'Brew & Hops is 21+ only. We require valid ID for all guests.',
  },
  {
    question: 'What forms of payment do you accept?',
    answer: 'We accept all major credit cards. Cash is also accepted at the register.',
  },
];

const FAQ = () => {
  return (
    <PageLayout showTreeBanner={false}>
      {/* Hero Section with Background */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={taproomImage}
            alt="Brew & Hops taproom"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground text-center"
          >
            Frequently Asked Questions
          </motion.h1>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-display font-bold text-primary mb-3">
                  {item.question}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQ;
