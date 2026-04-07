import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoveStory from './components/LoveStory';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import Countdown from './components/Countdown';
import Location from './components/Location';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="bg-secondary min-h-screen font-sans selection:bg-primary/30 selection:text-dark">
      <Navbar />
      <MusicPlayer />
      <Hero />
      <LoveStory />
      <EventDetails />
      <Gallery />
      <Countdown />
      <Location />
      
      {/* Footer */}
      <footer className="bg-dark text-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-script text-4xl mb-4">Nilesh & Sudha</h2>
          <p className="text-white/60 tracking-widest text-sm uppercase mb-8">Are getting married</p>
          <div className="h-px w-24 bg-white/20 mx-auto mb-8"></div>
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Nilesh & Sudha. All Rights Reserved.By Ram
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
