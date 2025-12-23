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
              How a South Charlotte family created something special in their neck of the woods.
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
              alt="OpenTap taproom aerial view"
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
                OpenTap was created by Scott and Brooke Thorne, and their son Benjamin. An outdoorsy family who truly were scratching their own itch. They love the craft beer experience and being a South Charlotte family, they wanted to create something in their neck of the woods…and that's exactly what they did.
              </p>
              
              <h2 className="text-3xl font-display font-bold text-primary mb-6">A New Category</h2>
              <p className="text-foreground leading-relaxed mb-6">
                OpenTap is a new category in craft beer. We're not a brewery, bar, or restaurant…we're an OpenTap! We care deeply about the products we serve and the people who make them. We work very closely with brewers, distributors, and manufacturers to curate a huge draft selection.
              </p>

              <h2 className="text-3xl font-display font-bold text-primary mb-6">The Experience</h2>
              <p className="text-foreground leading-relaxed mb-6">
                We've removed all the hurdles and sticking points associated with normal spots — flagging down a bartender, waiting to be seated, feeling pressure to leave after eating. At OpenTap, guests simply walk in and pour a drink within seconds.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                Our craft beer experience is an inspiring modern log cabin design. Boasting unique features like an 18-foot-tall indoor abstract tree, a mezzanine with a cantilever, putting green, 3000 sq. ft. of turf, and huge accordion doors creating an indoor-outdoor experience.
              </p>

              <h2 className="text-3xl font-display font-bold text-primary mb-6">Open to Whatever!</h2>
              <p className="text-foreground leading-relaxed">
                At OpenTap, we're "Open to Whatever!" We have a ton of beer, wine, cocktails, and craft sodas for folks to enjoy. Whether you're a craft beer enthusiast or just looking for a great place to hang out with friends and family, OpenTap welcomes you.
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
                alt="OpenTap team"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div>
                <h2 className="text-3xl font-display font-bold text-primary mb-4">Join the Family</h2>
                <p className="text-foreground leading-relaxed mb-6">
                  Our amazing team is what makes OpenTap special. From our Taproom Ambassadors to our events team, everyone plays a role in creating memorable experiences for our guests.
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
