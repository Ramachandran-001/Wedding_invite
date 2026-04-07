import { motion } from 'framer-motion';

const EventDetails = () => {
  const events = [
    {
      title: "Ponnurukku Ceremony",
      date: "May 14, 2026",
      time: "09:00 PM - 10:00 PM",
      venue: "House",
    },
    {
      title: "Mehendi",
      date: "May 16, 2026",
      time: "05:00 PM - 07:00 PM",
      venue: "House",
    },
    {
      title: "Wedding Ceremony",
      date: "May 18, 2026",
      time: "06:00 AM - 07:30 PM",
      venue: "Shri Naarumpoo Nathar Swamy temple Pazhavoor",
    },
    {
      title: "Reception",
      date: "May 18, 2026",
      time: "10:00 AM Onwards",
      venue: "Community Hall, Sanganapuram",
    }
  ];

  return (
    <section id="events" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary tracking-widest uppercase text-sm mb-2">Join Us</h2>
          <h3 className="font-script text-6xl md:text-7xl">Event Details</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 border border-primary/20 relative group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/50 m-2 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/50 m-2 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
              
              <h4 className="text-2xl font-serif text-dark mb-4 text-center">{event.title}</h4>
              <div className="space-y-3 text-center">
                <p className="text-sm font-medium text-dark/80 uppercase tracking-widest">
                  {event.date}
                </p>
                <div className="h-px w-12 bg-primary/30 mx-auto"></div>
                <p className="text-sm text-dark/60">
                  {event.time}
                </p>
                <p className="text-sm text-dark/70 font-serif italic pt-2">
                  {event.venue}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
