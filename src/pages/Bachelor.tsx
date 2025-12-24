import { motion } from 'framer-motion';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart } from 'lucide-react';
import bachelorImage from '@/assets/bachelor-stage.jpg';

const Bachelor = () => {
  return (
    <PageLayout showTreeBanner={false}>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={bachelorImage}
          alt="The Chamblee Bachelor Live on Stage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="w-8 h-8 text-destructive fill-destructive" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                The Chamblee Bachelor – Live on Stage
              </h1>
              <p className="text-lg text-muted-foreground">
                Chamblee singles — we're looking for YOU! Sick of the apps? Ready to meet in person, have some fun, and maybe even find your person?
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-invert max-w-none mb-12"
            >
              <p className="text-foreground text-lg leading-relaxed mb-6">
                <strong className="text-primary">Brew & Hops is casting now</strong> for <em>The Chamblee Bachelor – Live on Stage</em> — a wild, unfiltered dating show where real singles, bold conversations, and hilarious curveballs collide.
              </p>
              
              <p className="text-foreground text-lg leading-relaxed mb-6">
                <strong className="text-primary">The Twist:</strong> The Chamblee Bachelor and the Hopefuls will be <em>blindfolded</em> to keep the suspense alive until the big reveal and ultimate match.
              </p>

              <div className="bg-secondary rounded-lg p-6 mb-8">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">We're casting:</h3>
                <ul className="space-y-2 text-foreground">
                  <li><strong className="text-primary">The Chamblee Bachelor</strong> – the star of the show</li>
                  <li><strong className="text-primary">Hopefuls</strong> – brave singles ready to shoot their shot on stage in front of a live audience</li>
                </ul>
              </div>

              <p className="text-foreground text-lg leading-relaxed mb-4">
                Think reality TV chaos, stand-up comedy vibes, and a crowd that's part of the action — asking questions, stirring the pot, and helping decide who deserves the next rose.
              </p>

              <p className="text-foreground text-lg leading-relaxed mb-6">
                If you're bold, single, and ready for something real (and ridiculously fun), this is your moment!
              </p>

              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
                <p className="text-primary font-semibold">Dates: Thursdays in November and December (no holidays)</p>
                <p className="text-muted-foreground">Must be 21+ to apply</p>
              </div>
            </motion.div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
                Apply Now
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age *</Label>
                    <Input id="age" type="number" min="21" placeholder="21" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Which role are you applying for? *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelor">The Chamblee Bachelor</SelectItem>
                      <SelectItem value="hopeful">Hopeful</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="about">Tell us about yourself</Label>
                  <Textarea id="about" placeholder="What makes you the perfect candidate?" rows={4} />
                </div>
                <Button type="submit" size="lg" className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                  <Heart className="w-4 h-4 mr-2" />
                  Submit Application
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Bachelor;
