import { motion } from 'framer-motion';

const Location = () => {
  return (
    <section id="location" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-primary tracking-widest uppercase text-sm mb-2">Getting There</h2>
              <h3 className="font-script text-6xl md:text-7xl mb-6">Venue & Map</h3>
              <p className="text-dark/70 font-sans leading-relaxed mb-6">
                We can't wait to celebrate with you! The main wedding ceremony and reception will be held at the prestigious Community Hall,Sanganapuram.
              </p>
            </div>

            <div className="p-8 border border-primary/20 bg-secondary/30 rounded-br-[40px] rounded-tl-[40px]">
              <h4 className="text-2xl font-serif text-dark mb-4">Shri Naarumpoo Nathar Swamy temple</h4>
              <p className="text-dark/70 font-sans mb-2">Community Hall</p>
              <p className="text-dark/70 font-sans mb-6">Sanganapuram</p>
              
              <a 
                href="https://maps.app.goo.gl/2x9K2VWnudeq6BHY7?g_st=aw" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium tracking-widest text-sm uppercase hover:bg-dark transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[500px] w-full border-4 border-white shadow-xl relative"
          >
            {/* Elegant Map Embed - using a styled placeholder iframe for the example */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=YOUR_LOCATION_DATA" 
              className="w-full h-full"
              style={{ border: 0, filter: 'grayscale(30%) contrast(1.1)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
