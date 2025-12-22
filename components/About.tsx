
import React from 'react';
import { motion } from 'framer-motion';
import { OWNER, ASSETS } from '../constants';
import { User, Award, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group mx-auto md:mx-0 max-w-md w-full"
        >
            {/* Image Container with Holographic Border */}
            <div className="relative z-10 rounded-lg overflow-hidden border-2 border-cyan-glow/30 p-2 bg-cosmic-900/50 backdrop-blur-sm shadow-[0_0_30px_rgba(0,229,255,0.15)]">
                <div className="relative rounded overflow-hidden aspect-[3/4]">
                     <img
                        src={ASSETS.profile_photo}
                        alt={OWNER.name}
                        className="w-full h-full object-cover filter contrast-110 grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                    
                    {/* Scanning Line Animation */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-cyan-glow shadow-[0_0_20px_#00E5FF] opacity-70 animate-scan pointer-events-none" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-cyan-glow/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Tech Deco Elements */}
                <div className="absolute bottom-4 right-4 text-xs font-tech text-cyan-glow opacity-80 bg-black/50 px-2 py-1 rounded">
                    IMG_REF: 0042 // PRO_HEADSHOT
                </div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-cyan-glow rounded-tl-xl opacity-60" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-magenta-glow rounded-br-xl opacity-60" />
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-cyan-glow/20 blur-[80px] -z-10 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
        </motion.div>

        {/* Content Column */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
            <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-1 bg-cyan-glow shadow-[0_0_10px_#00E5FF]" />
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                    Architect of <span className="text-cyan-glow">Reality</span>
                </h2>
            </div>

            <div className="card-glass p-8 rounded-lg border-l-4 border-l-cyan-glow relative">
                <p className="text-slate-300 leading-relaxed mb-6 font-light text-lg">
                    Hello, I'm <strong className="text-white font-medium">{OWNER.name}</strong>.
                    As a <span className="text-cyan-glow">futurist graphic designer</span> based in {OWNER.location},
                    I specialize in merging artistic creativity with digital precision. My work isn't just about visuals;
                    it's about creating immersive experiences that transport brands into the next dimension.
                </p>

                <p className="text-slate-400 leading-relaxed mb-8 font-light">
                    From high-end retouching to cyberpunk-inspired branding, I utilize cutting-edge tools to
                    sculpt light and shadow, delivering designs that pulse with energy and professionalism.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 group">
                        <div className="p-2 bg-cyan-glow/10 rounded text-cyan-glow group-hover:text-white group-hover:bg-cyan-glow transition-colors">
                             <Award size={20} />
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-xl text-white">10+</h4>
                            <p className="text-xs text-slate-500 font-tech uppercase tracking-wider">Years Exp.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 group">
                         <div className="p-2 bg-magenta-glow/10 rounded text-magenta-glow group-hover:text-white group-hover:bg-magenta-glow transition-colors">
                             <Zap size={20} />
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-xl text-white">100+</h4>
                            <p className="text-xs text-slate-500 font-tech uppercase tracking-wider">Projects</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-3 group">
                         <div className="p-2 bg-cyan-glow/10 rounded text-cyan-glow group-hover:text-white group-hover:bg-cyan-glow transition-colors">
                             <Globe size={20} />
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-xl text-white">Global</h4>
                            <p className="text-xs text-slate-500 font-tech uppercase tracking-wider">Clients</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-3 group">
                         <div className="p-2 bg-magenta-glow/10 rounded text-magenta-glow group-hover:text-white group-hover:bg-magenta-glow transition-colors">
                             <User size={20} />
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-xl text-white">24/7</h4>
                            <p className="text-xs text-slate-500 font-tech uppercase tracking-wider">Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
