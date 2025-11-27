import React from 'react';
import StarBackground from './components/StarBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { OWNER } from './constants';

function App() {
  return (
    <div className="min-h-screen text-slate-200 selection:bg-cyan-glow selection:text-black">
      <StarBackground />
      <CustomCursor />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      <footer className="py-8 bg-cosmic-800 border-t border-slate-800 relative z-10 text-center">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-tech text-slate-500 text-sm">
            © {new Date().getFullYear()} {OWNER.name}. All systems operational.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-500 hover:text-cyan-glow transition-colors text-sm font-tech">Privacy Protocol</a>
            <a href="#" className="text-slate-500 hover:text-cyan-glow transition-colors text-sm font-tech">Terms of Signal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;