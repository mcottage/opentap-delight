import { motion } from 'framer-motion';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Briefcase, Heart, Users } from 'lucide-react';
import buildingImage from '@/assets/building-exterior.jpg';
import teamImage from '@/assets/team.jpg';

const Careers = () => {
  return (
    <PageLayout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Who We Are Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6">
                Who We Are
              </h1>
              
              <div className="space-y-4 text-foreground text-lg leading-relaxed">
                <p>
                  Brew & Hops is Chamblee's first self-pour taproom. We're not a traditional bar or restaurant — we're something entirely new! At Brew & Hops, we care deeply about the products we serve and the experience we create.
                </p>
                <p>
                  With 42 taps featuring local Georgia breweries and select national craft favorites, we've created a unique space where guests can explore and discover at their own pace. No waiting for a bartender — simply tap your wristband and pour what you want, paying by the ounce.
                </p>
                <p>
                  We offer Indian snacks with plans to expand to a full Indian fusion menu. Our taproom features a 150-inch LED screen for college sports, shuffleboard, board games, and four-ounce cup flights for the ultimate tasting experience.
                </p>
                <p>
                  Brew & Hops was created by Chinmaya and Krishna Desai, a couple passionate about craft beverages and community. They worked with the city of Chamblee to make this unique self-pour concept a reality. And they need you to make it special!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={buildingImage}
                alt="Brew & Hops building exterior"
                className="w-full h-[500px] object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>

          {/* Who We're Looking For */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8 text-center">
              Who We're Looking For
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">Passionate People</h3>
                <p className="text-muted-foreground">
                  We're looking for team members who are passionate about craft drinks and creating memorable experiences.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">Team Players</h3>
                <p className="text-muted-foreground">
                  We value collaboration and believe that great things happen when we work together as a family.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">Self-Starters</h3>
                <p className="text-muted-foreground">
                  We need people who take initiative and are ready to go above and beyond for our guests.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Team Image and Application */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={teamImage}
                alt="Brew & Hops team"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-6"
              />
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-3">Current Openings</h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span>Taproom Ambassador (Part-time & Full-time)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span>Shift Lead</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span>Events Coordinator</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
                Apply Now
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" type="tel" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position Interested In *</Label>
                  <Input id="position" placeholder="e.g., Taproom Ambassador" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="about">Why do you want to join Brew & Hops?</Label>
                  <Textarea id="about" rows={4} />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Submit Application
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Careers;
