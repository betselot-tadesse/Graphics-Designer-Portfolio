import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-24 px-6 relative z-10 bg-slate-900/20" id="services">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-glow">
            Design <span className="text-cyan-glow">Solutions</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card-glass p-6 rounded-lg group relative overflow-hidden"
            >
              {/* Neon accent on top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center mb-6 text-cyan-glow group-hover:bg-cyan-glow group-hover:text-black transition-colors duration-300 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                <service.icon size={24} />
              </div>
              
              <h3 className="font-display text-xl font-bold mb-3 group-hover:text-cyan-glow transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                {service.description}
              </p>

              {/* Holographic shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
