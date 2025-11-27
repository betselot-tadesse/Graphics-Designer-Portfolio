import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 relative z-10" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl font-bold text-center mb-16 text-glow">
          Client <span className="text-magenta-glow">Transmissions</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 rounded-lg bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800"
            >
              <Quote className="absolute top-4 right-4 text-slate-700 opacity-50" size={48} />
              
              <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-glow to-magenta-glow flex items-center justify-center text-xs font-bold text-black">
                   {t.name.charAt(0)}
                 </div>
                 <div>
                   <h4 className="font-display font-bold text-white">{t.name}</h4>
                   <p className="text-xs text-cyan-glow font-tech uppercase">{t.role} @ {t.company}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
