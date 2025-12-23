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
                  OpenTap is a new category in craft beer. We're not a brewery, bar, or restaurant…we're an OpenTap! At OpenTap, we care deeply about the products we serve and the people who make them!
                </p>
                <p>
                  We work very closely with brewers, distributors, and manufacturers to curate a huge draft selection. And we've removed all the hurdles and sticking points associated with normal spots (e.g., flagging down a bartender, waiting to be seated, feeling pressure to leave after eating) allowing guests to simply walk in and pour a drink within seconds.
                </p>
                <p>
                  At OpenTap, we're "Open to Whatever!" We have a ton of beer, wine, cocktails, and craft sodas for folks to enjoy. Our craft beer experience is an inspiring modern log cabin design.
                </p>
                <p>
                  OpenTap was created by Scott and Brooke Thorne, and their 9 year-old son Benjamin. An outdoorsy family who truly were scratching their own itch. They love the craft beer experience and being a South Charlotte family, they wanted to create something in their neck of the woods…and that's exactly what they did. And they need you to make it special!
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
                alt="OpenTap building exterior"
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
                alt="OpenTap team"
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
                  <Label htmlFor="about">Why do you want to join OpenTap?</Label>
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
