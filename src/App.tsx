import { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CarsSection from './components/CarsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const carsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    let ref;
    switch (section) {
      case 'home':
        ref = homeRef;
        break;
      case 'cars':
        ref = carsRef;
        break;
      case 'about':
        ref = aboutRef;
        break;
      case 'contact':
        ref = contactRef;
        break;
      default:
        return;
    }

    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} />
      <div ref={homeRef}>
        <Hero onNavigate={handleNavigate} />
      </div>
      <Features />
      <div ref={carsRef}>
        <CarsSection />
      </div>
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
