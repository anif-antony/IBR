import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <Header />
      <main>
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
             <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Services />
        </AnimatedSection>
   
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;