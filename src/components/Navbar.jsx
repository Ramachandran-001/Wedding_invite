import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'Our Story', to: 'story' },
    { name: 'Events', to: 'events' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Location', to: 'location' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-secondary/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="hero" smooth={true} duration={800} className={`font-script text-3xl font-bold transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
              N & S
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={800}
                className={`cursor-pointer text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:text-primary ${isScrolled ? 'text-dark' : 'text-white/90 hover:text-white'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile indicator could go here, keeping simple for elegant feel */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
