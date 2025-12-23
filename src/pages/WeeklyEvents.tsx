import { motion } from 'framer-motion';
import { PageLayout } from '@/components/PageLayout';
import { Calendar, Clock, Music, Beer, Gamepad2 } from 'lucide-react';

const events = [
  {
    day: 'Monday',
    name: 'Mellow Monday',
    time: '3PM - 10PM',
    description: 'Start your week right with chill vibes and great drinks.',
    icon: Beer,
  },
  {
    day: 'Tuesday',
    name: 'Trivia Night',
    time: '7PM - 9PM',
    description: 'Test your knowledge with our weekly trivia competition. Teams of up to 6 players.',
    icon: Gamepad2,
  },
  {
    day: 'Wednesday',
    name: 'Open Mic Night',
    time: '8PM - 11PM',
    description: 'Take the stage and show off your talents. All performers welcome!',
    icon: Music,
  },
  {
    day: 'Thursday',
    name: 'The Charlotte Bachelor',
    time: '8PM - 10PM',
    description: 'Our live dating show! Watch singles mingle on stage in this hilarious event.',
    icon: Calendar,
  },
  {
    day: 'Friday',
    name: 'Live Music',
    time: '7PM - 10PM',
    description: 'Local bands and musicians perform live every Friday night.',
    icon: Music,
  },
  {
    day: 'Saturday',
    name: 'Weekend Vibes',
    time: '12PM - 11PM',
    description: 'Extended hours, great food trucks, and the best craft drink selection in Charlotte.',
    icon: Beer,
  },
  {
    day: 'Sunday',
    name: 'Sunday Funday',
    time: '12PM - 9PM',
    description: 'End your weekend with games, drinks, and good times with friends and family.',
    icon: Gamepad2,
  },
];

const WeeklyEvents = () => {
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
            <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              Weekly Events
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              There's always something happening at OpenTap. Check out our weekly lineup of events!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {events.map((event, index) => (
              <motion.div
                key={event.day}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <event.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <div>
                        <span className="text-sm text-primary font-semibold uppercase tracking-wider">
                          {event.day}
                        </span>
                        <h3 className="text-xl font-display font-bold text-foreground">
                          {event.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <p className="text-foreground">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default WeeklyEvents;
