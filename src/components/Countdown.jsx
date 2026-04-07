import CountdownTimer from 'react-countdown';
import { motion } from 'framer-motion';

const Countdown = () => {
  // Target date: December 15, 2026
  const targetDate = new Date('2026-05-14T09:00:00').getTime();

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className="text-4xl font-serif text-primary">
          <span className="font-script text-6xl">It's Time!</span>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center gap-4 sm:gap-8 lg:gap-12 text-center">
          {[
            { label: 'Days', value: days },
            { label: 'Hours', value: hours },
            { label: 'Minutes', value: minutes },
            { label: 'Seconds', value: seconds },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex justify-center items-center mb-4">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white shadow-sm">
                  {item.value}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-sans tracking-[0.2em] uppercase text-white/80">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <section className="relative py-32 bg-dark flex flex-col items-center justify-center overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-primary blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[150%] bg-primary blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-4xl w-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-primary tracking-widest uppercase text-sm mb-4">Counting Down The Days</h2>
          <h3 className="font-script text-5xl md:text-6xl text-white">Until we say "I DO"</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <CountdownTimer date={targetDate} renderer={renderer} />
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
