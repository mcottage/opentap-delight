import { motion } from 'framer-motion';
import { PageLayout } from '@/components/PageLayout';
import heroImage from '@/assets/hero-aerial.jpg';
import teamImage from '@/assets/team.jpg';

const OurStory = () => {
  return (
    <PageLayout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground">
              How a Chamblee couple is bringing self-pour craft beverages to the community.
            </p>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <img
              src={heroImage}
              alt="Brew & Hops taproom"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Story Content */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="prose prose-invert prose-lg max-w-none mb-16"
            >
              <h2 className="text-3xl font-display font-bold text-primary mb-6">The Beginning</h2>
              <p className="text-foreground leading-relaxed mb-6">
                Brew & Hops was created by Chinmaya and Krishna Desai, a couple with a passion for craft beverages and community. They worked closely with the city of Chamblee to update local ordinances allowing self-pour taps, making Brew & Hops a unique and pioneering addition to the area.
              </p>
              
              <h2 className="text-3xl font-display font-bold text-primary mb-6">A New Concept</h2>
              <p className="text-foreground leading-relaxed mb-6">
                Brew & Hops is Chamblee's first self-pour taproom. We're not a traditional bar or restaurant — we're something new! With 42 taps featuring local Georgia breweries and select national craft favorites, you pour what you want and pay by the ounce. It's a unique tasting experience that puts you in control.
              </p>

              <h2 className="text-3xl font-display font-bold text-primary mb-6">The Experience</h2>
              <p className="text-foreground leading-relaxed mb-6">
                We've created a space where you can explore and discover new favorites at your own pace. No waiting for a bartender — simply tap your wristband and pour. With 30 taps dedicated to beer, cider, kombucha, and non-alcoholic options, plus 12 wines, there's something for everyone.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                Catch college sports on our 150-inch LED screen, challenge friends to shuffleboard, or enjoy our selection of board games. Try our four-ounce cup flights for the ultimate tasting experience.
              </p>

              <h2 className="text-3xl font-display font-bold text-primary mb-6">Indian Fusion Flavors</h2>
              <p className="text-foreground leading-relaxed">
                We're starting with a selection of authentic Indian snacks, with plans to expand to a full menu of Indian fusion dishes. It's the perfect pairing for your self-poured craft beverages. Whether you're a craft beer enthusiast or just looking for a unique place to hang out with friends and family, Brew & Hops welcomes you.
              </p>
            </motion.div>

            {/* Team Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <img
                src={teamImage}
                alt="Brew & Hops team"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div>
                <h2 className="text-3xl font-display font-bold text-primary mb-4">Join the Family</h2>
                <p className="text-foreground leading-relaxed mb-6">
                  Our amazing team is what makes Brew & Hops special. From our Taproom Ambassadors to our events team, everyone plays a role in creating memorable experiences for our guests.
                </p>
                <p className="text-muted-foreground">
                  Interested in joining our team? Visit our Careers page to see current openings.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default OurStory;
