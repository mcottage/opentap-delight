import { motion } from 'framer-motion';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Mic, Calendar, Clock, Music } from 'lucide-react';
import openMicImage from '@/assets/open-mic.jpg';

const OpenMicNight = () => {
  return (
    <PageLayout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Mic className="w-10 h-10 text-primary" />
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                  Open Mic Night
                </h1>
              </div>
              
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Take the stage at OpenTap's Open Mic Night! Whether you're a seasoned performer or it's your first time, we welcome all talents — singers, comedians, poets, musicians, and more.
              </p>

              <div className="bg-secondary rounded-lg p-6 mb-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Every Wednesday Night</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Sign-ups start at 7:00 PM | Show starts at 8:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Music className="w-5 h-5 text-primary" />
                  <span className="text-foreground">5-minute sets for each performer</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-display font-bold text-foreground">What to Expect:</h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Full PA system and microphones provided</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Supportive, friendly audience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Amazing craft drinks to calm those nerves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Food trucks on-site</span>
                  </li>
                </ul>
              </div>

              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Sign Up to Perform
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={openMicImage}
                alt="Open Mic Night at OpenTap"
                className="w-full h-[500px] object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default OpenMicNight;
