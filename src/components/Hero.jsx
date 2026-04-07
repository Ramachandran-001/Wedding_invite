import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect roughly simulated by fixed attachment if desired, but let's use a standard cover that looks nice */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero_bg.png')",
          backgroundAttachment: 'fixed', // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Elegant dark overlay */}
      </div>

      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white/80 tracking-[0.3em] uppercase text-sm mb-4"
        >
          We Are Getting Married
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, type: 'spring' }}
          className="font-script text-7xl md:text-9xl text-white mb-6 text-shadow"
        >
          Nilesh & Sudha
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="h-[1px] w-24 bg-primary/80" />
          <p className="text-xl md:text-2xl text-white/90 font-serif font-light">
            May 18, 2026
          </p>
          <p className="text-md text-white/70 uppercase tracking-widest font-sans">
            Community hall, Sanganapuram
          </p>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/60 text-xs tracking-widest uppercase mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
