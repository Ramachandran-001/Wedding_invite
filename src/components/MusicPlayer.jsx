import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX } from 'lucide-react';
import audioFile from '../assets/Sutha_audio.mpeg';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef(null);

  // Play music on first user interaction if blocked by browser policy
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.log('Autoplay prevented', err));

        // Remove event listeners after first interaction
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('scroll', handleFirstInteraction);
      }
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('scroll', handleFirstInteraction);

    // Hide tooltip after 5 seconds
    const tooltipTimer = setTimeout(() => setShowTooltip(false), 5000);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
      clearTimeout(tooltipTimer);
    };
  }, [isPlaying]);

  const togglePlayMode = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      if (!isMuted) {
        // Instead of pausing, we mute to keep it playing quietly in background
        audioRef.current.muted = true;
        setIsMuted(true);
      } else {
        // Unmute
        audioRef.current.muted = false;
        setIsMuted(false);
      }
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsMuted(false);
        })
        .catch(err => console.log('Playback prevented', err));
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-primary/20 text-dark/80 text-sm font-medium tracking-wide flex items-center gap-2"
          >
            <span>Play Music</span>
            <div className="flex gap-0.5">
              <span className="w-1 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
              <span className="w-1 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
              <span className="w-1 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={togglePlayMode}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 bg-white shadow-xl rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform duration-300 relative group border border-primary/20"
      >
        {/* Rotating ring when playing */}
        {isPlaying && !isMuted && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40"
          />
        )}

        {isPlaying && !isMuted ? (
          <Volume2 size={24} className="group-hover:text-dark transition-colors" />
        ) : (
          <VolumeX size={24} className="group-hover:text-dark transition-colors opacity-70" />
        )}
      </button>

      {/* Demonstration royalty free ambient wedding music */}
      <audio
        ref={audioRef}
        src={audioFile}
        loop
      />
    </div>
  );
};

export default MusicPlayer;
