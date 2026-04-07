import { motion } from 'framer-motion';

const LoveStory = () => {
  const storyEvents = [
    {
      year: '2020',
      title: 'First Met',
      description: ' Growing up as cousins, we spent our childhood fighting more than anything else! But as we grew up, the teasing turned into talking. In 2020, we realized the person we used to argue with was actually the person we enjoyed being with the most.',
    },
    {
      year: '2023',
      title: 'The proposal',
      description: ' After three years of sharing our lives from afar, our friendship blossomed into love. We realized that no matter how many kilometers were between us, our hearts were in the same place. 2023 was the year we officially chose each other.',
    },
    {
      year: '2025',
      title: 'First Date',
      description: ' To celebrate our new journey, we had our first official date at the beach in 2025. Watching the waves together, we knew this was just the beginning of a lifetime of dates.',
    }
  ];

  return (
    <section id="story" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary tracking-widest uppercase text-sm mb-2">Our Journey</h2>
          <h3 className="font-script text-6xl md:text-7xl">How we met</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative p-2 bg-white shadow-lg rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <img
                src="/images/_couple.png"
                alt="Couple"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <div className="space-y-12 relative pl-8 before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary before:to-transparent">
            {storyEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-39px] md:left-[-35px] top-1 h-6 w-6 rounded-full border-4 border-secondary bg-primary"></div>

                <h4 className="text-3xl font-serif text-dark mb-1">{event.year}</h4>
                <h5 className="text-xl font-medium text-primary mb-2">{event.title}</h5>
                <p className="text-dark/70 leading-relaxed font-sans font-light">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
