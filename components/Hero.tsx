import React from 'react';
import { motion } from 'framer-motion';
import { OWNER } from '../constants';
import { ChevronDown, Download, Eye } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Decorative nebula glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-magenta-glow/10 rounded-full blur-[100px] animate-pulse delay-1000" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl"
      >
        <motion.p 
          className="text-cyan-glow font-tech tracking-[0.2em] mb-4 text-lg md:text-xl uppercase"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          System Online / Welcome I'm
        </motion.p>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            {OWNER.name}
          </span>
          <span className="block text-2xl md:text-4xl text-cyan-glow mt-2 font-light tracking-wide text-glow">
            {OWNER.title}
          </span>
        </h1>

        <motion.p 
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Crafting futuristic visual experiences through branding, retouching, and UI design with cosmic precision.
        </motion.p>

        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#portfolio" className="group relative px-8 py-3 bg-cyan-glow/10 border border-cyan-glow/50 text-cyan-glow rounded-sm overflow-hidden font-tech uppercase tracking-wider hover:bg-cyan-glow/20 transition-all duration-300">
             <span className="relative z-10 flex items-center gap-2">
               <Eye size={18} /> View My Work
             </span>
             <div className="absolute inset-0 bg-cyan-glow/20 transform -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </a>
          
          <button className="group relative px-8 py-3 bg-transparent border border-slate-700 text-slate-300 rounded-sm font-tech uppercase tracking-wider hover:border-magenta-glow hover:text-magenta-glow transition-all duration-300">
            <span className="flex items-center gap-2">
              <Download size={18} /> Download Resume
            </span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
