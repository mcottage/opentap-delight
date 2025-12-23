import { motion } from 'framer-motion';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, Calendar, Mail } from 'lucide-react';
import partyImage from '@/assets/party-cheers.jpg';
import mezzanineImage from '@/assets/mezzanine.jpg';

const venues = [
  {
    name: 'Treehouse Mezzanine',
    capacity: '25-40 guests',
    description: 'Our elevated private space with stunning views of the taproom below. Perfect for corporate events and intimate celebrations.',
    image: mezzanineImage,
  },
  {
    name: 'The Lawn',
    capacity: '50-100 guests',
    description: 'Our expansive outdoor turf area with games and flexible seating. Ideal for large gatherings and celebrations.',
    image: mezzanineImage,
  },
  {
    name: 'Full Venue Buyout',
    capacity: '150+ guests',
    description: 'Exclusive access to the entire OpenTap experience. Perfect for weddings, large corporate events, and milestone celebrations.',
    image: partyImage,
  },
];

const PrivateParties = () => {
  return (
    <PageLayout showTreeBanner={false}>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={partyImage}
          alt="Host your next party at OpenTap"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground text-center"
          >
            Host your next Party with OpenTap.
          </motion.h1>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="bg-background">
        <svg viewBox="0 0 1440 60" className="w-full h-8 md:h-12 -mt-8 md:-mt-12">
          <path fill="hsl(var(--primary))" d="M0,30 C360,60 720,0 1080,30 C1260,45 1440,30 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* Venues Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Spaces
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From intimate gatherings to large celebrations, we have the perfect space for your event.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {venues.map((venue, index) => (
              <motion.div
                key={venue.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{venue.name}</h3>
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{venue.capacity}</span>
                </div>
                <p className="text-muted-foreground">{venue.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-card rounded-xl p-8 border border-border"
          >
            <div className="text-center mb-8">
              <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                Inquire About Your Event
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and our events team will get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests *</Label>
                  <Input id="guests" type="number" placeholder="50" required />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="venue">Preferred Space</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a space" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mezzanine">Treehouse Mezzanine</SelectItem>
                      <SelectItem value="lawn">The Lawn</SelectItem>
                      <SelectItem value="full">Full Venue Buyout</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventType">Type of Event</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="birthday">Birthday Party</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="wedding">Wedding/Reception</SelectItem>
                    <SelectItem value="rehearsal">Rehearsal Dinner</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Additional Details</Label>
                <Textarea id="message" placeholder="Tell us more about your event..." rows={4} />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Calendar className="w-4 h-4 mr-2" />
                Submit Inquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivateParties;
