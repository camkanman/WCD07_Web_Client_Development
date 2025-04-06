import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById('about');
    
    const handleScroll = () => {
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const shouldFloat = rect.top < 0;
        setIsFloating(shouldFloat);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isFloating ? 'fixed top-6' : 'absolute top-6'} z-50 right-6 w-16 h-16 rounded-full flex items-center justify-center hover:opacity-90 transition-all ${isOpen ? 'opacity-0 pointer-events-none' : 'bg-black text-white'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-1/2 h-full bg-black z-40"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="fixed top-6 right-6 w-16 h-16 rounded-full bg-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="h-full flex flex-col justify-between py-24 px-16">
                <nav className="space-y-12">
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link to="/" className="group flex items-baseline text-white text-8xl font-extralight">
                      <span className="text-5xl mr-6">•</span>
                      <span className="group-hover:opacity-70 transition-opacity">Home</span>
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link 
                      to="/#about" 
                      className="block text-white text-8xl font-extralight hover:opacity-70 transition-opacity pl-14"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      About
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link 
                      to="/#work" 
                      className="block text-white text-8xl font-extralight hover:opacity-70 transition-opacity pl-14"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Work
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="/contact" className="block text-white text-8xl font-extralight hover:opacity-70 transition-opacity pl-14">Contact</Link>
                  </motion.div>
                </nav>

                <div className="flex space-x-8 text-sm font-light">
                  <a href="#" className="text-white hover:opacity-70 transition-opacity">LinkedIn</a>
                  <a href="#" className="text-white hover:opacity-70 transition-opacity">Twitter</a>
                  <a href="#" className="text-white hover:opacity-70 transition-opacity">Instagram</a>
                  <a href="#" className="text-white hover:opacity-70 transition-opacity">Webflow</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingMenu;