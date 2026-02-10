
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { OWNER } from '../constants';
import { ChevronDown, Download, Eye, Triangle, Square, Circle, Zap, Target } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out mouse movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  // Tilt effect values
  const rotateX = useTransform(springY, [-500, 500], [5, -5]);
  const rotateY = useTransform(springX, [-500, 500], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const nameLetters = Array.from(OWNER.name);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 overflow-hidden perspective-1000"
    >
      {/* Dynamic Background Elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-magenta-glow/10 rounded-full blur-[120px]"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 60, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating HUD Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-glow/20 pointer-events-none"
          initial={{ 
            x: Math.random() * 1000 - 500, 
            y: Math.random() * 800 - 400,
            rotate: 0,
            opacity: 0
          }}
          animate={{ 
            y: [0, -100, 0],
            rotate: 360,
            opacity: [0, 0.4, 0],
            x: [0, (i % 2 === 0 ? 50 : -50), 0]
          }}
          transition={{ 
            duration: 10 + i * 2, 
            repeat: Infinity, 
            delay: i * 1.5,
            ease: "linear" 
          }}
          style={{
            x: useTransform(springX, (v) => v * (0.02 * (i + 1))),
            y: useTransform(springY, (v) => v * (0.02 * (i + 1))),
          }}
        >
          {i % 3 === 0 ? <Triangle size={12} /> : i % 3 === 1 ? <Square size={8} /> : <Circle size={6} />}
        </motion.div>
      ))}

      {/* Main Content with Tilt */}
      <motion.div 
        style={{ rotateX, rotateY }}
        className="text-center z-10 max-w-5xl relative"
      >
        {/* HUD Elements around content */}
        <motion.div 
          className="absolute -top-20 -left-20 w-40 h-40 border border-cyan-glow/10 rounded-full flex items-center justify-center opacity-40 hidden lg:flex"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-[1px] bg-cyan-glow/20" />
          <Target size={16} className="absolute top-0 left-1/2 -translate-x-1/2 text-cyan-glow/40" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-4 py-1 border border-cyan-glow/20 rounded-full bg-cyan-glow/5 backdrop-blur-md mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Zap size={14} className="text-cyan-glow animate-pulse" />
            <span className="text-cyan-glow font-tech tracking-[0.3em] text-xs uppercase">
              System Core: Online
            </span>
          </motion.div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-6 leading-none tracking-tight">
            <div className="flex justify-center">
              {nameLetters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + (i * 0.05),
                    type: "spring",
                    stiffness: 100
                  }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-300 to-slate-500"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
            <motion.span 
              className="block text-2xl md:text-4xl text-magenta-glow mt-4 font-light tracking-[0.2em] text-glow-magenta uppercase font-tech"
              initial={{ opacity: 0, letterSpacing: "0em" }}
              animate={{ opacity: 1, letterSpacing: "0.2em" }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              {OWNER.title}
            </motion.span>
          </h1>

          <motion.p 
            className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-tech tracking-wider font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Sculpting digital experiences where <span className="text-white font-bold">high-end aesthetics</span> meet <span className="text-cyan-glow">cosmic precision</span>. Based in Dubai, delivering globally.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            <a href="#portfolio" className="group relative px-10 py-4 bg-cyan-glow/10 border border-cyan-glow/50 text-cyan-glow rounded-sm overflow-hidden font-tech uppercase tracking-[0.2em] hover:bg-cyan-glow/20 transition-all duration-300 w-full sm:w-auto text-center">
               <span className="relative z-10 flex items-center justify-center gap-2">
                 <Eye size={18} /> Initiate Scan
               </span>
               <div className="absolute inset-0 bg-cyan-glow/20 transform -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </a>
            
            <a 
  href="/resume/Betselot-Tadesse-Resume.pdf"
  download
  className="group relative px-10 py-4 bg-transparent border border-slate-700 text-slate-300 rounded-sm font-tech uppercase tracking-[0.2em] hover:border-magenta-glow hover:text-magenta-glow transition-all duration-300 w-full sm:w-auto text-center"
>
  <span className="flex items-center justify-center gap-2">
    <Download size={18} /> Download Resume
  </span>
  <div className="absolute inset-0 bg-magenta-glow/5 opacity-0 group-hover:opacity-100 transition-opacity" />
</a>

          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Scrolling Indicator */}
      <motion.div 
        className="absolute bottom-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-glow to-transparent opacity-50 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-cyan-glow"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <span className="text-[10px] font-tech text-slate-500 uppercase tracking-[0.5em] -rotate-90 origin-center mb-10 translate-y-6">
          Scroll to explore
        </span>
      </motion.div>

      {/* Side Decorative HUD */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 opacity-20">
        <div className="w-1 h-20 bg-slate-800 rounded-full relative overflow-hidden">
          <motion.div className="absolute top-0 left-0 w-full h-1/2 bg-cyan-glow" animate={{ y: [0, 20, 0] }} transition={{ duration: 2, repeat: Infinity }} />
        </div>
        <div className="font-tech text-[10px] text-cyan-glow rotate-90 origin-left">COORD_X: {springX.get().toFixed(0)}</div>
        <div className="font-tech text-[10px] text-magenta-glow rotate-90 origin-left">COORD_Y: {springY.get().toFixed(0)}</div>
      </div>
    </section>
  );
};

export default Hero;
