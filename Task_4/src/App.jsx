import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import HoverButton from './components/HandHover';
import RecentWork from './components/RecentWorks';
import ImageSlider from './components/ImageSlider';
import TestimonialSection from './components/TestimonialSection';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingMenu from './components/FloatingMenu';

const App = () => {
  return (
    <Router>
      <div className="font-sans bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutSection />
              <RecentWork />
              <ImageSlider />
              <TestimonialSection />
              {/* <FloatingMenu /> */}
      {/* Rest of your existing code... */}
              <Footer />
            </>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;