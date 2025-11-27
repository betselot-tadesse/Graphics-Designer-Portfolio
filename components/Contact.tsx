import React from 'react';
import { motion } from 'framer-motion';
import { OWNER } from '../constants';
import { Mail, MapPin, Phone, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden" id="contact">
      {/* Background Decor */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-cyan-glow/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Let's Create <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow to-magenta-glow">Something Cosmic</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-md font-light">
            Ready to elevate your visual identity? Transmit your signal, and let's discuss your next mission.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-300 group">
              <div className="w-12 h-12 rounded-sm bg-slate-800/50 flex items-center justify-center border border-slate-700 group-hover:border-cyan-glow transition-colors">
                <Mail className="text-cyan-glow" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-tech uppercase">Email</p>
                <p className="text-lg font-medium">{OWNER.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300 group">
              <div className="w-12 h-12 rounded-sm bg-slate-800/50 flex items-center justify-center border border-slate-700 group-hover:border-cyan-glow transition-colors">
                <Phone className="text-cyan-glow" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-tech uppercase">Phone</p>
                <p className="text-lg font-medium">{OWNER.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300 group">
              <div className="w-12 h-12 rounded-sm bg-slate-800/50 flex items-center justify-center border border-slate-700 group-hover:border-cyan-glow transition-colors">
                <MapPin className="text-cyan-glow" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-tech uppercase">Base</p>
                <p className="text-lg font-medium">{OWNER.location}</p>
              </div>
            </div>
            
             <div className="flex items-center gap-4 text-slate-300 group">
              <div className="w-12 h-12 rounded-sm bg-slate-800/50 flex items-center justify-center border border-slate-700 group-hover:border-cyan-glow transition-colors">
                <Linkedin className="text-cyan-glow" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-tech uppercase">Social</p>
                <a href={OWNER.linkedin} target="_blank" rel="noreferrer" className="text-lg font-medium hover:text-cyan-glow transition-colors">LinkedIn Profile</a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="card-glass p-8 md:p-10 rounded-lg relative"
        >
            {/* Hologram Corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-glow rounded-tl-lg" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-magenta-glow rounded-br-lg" />

            <form className="space-y-6">
                <div>
                    <label className="block text-slate-400 font-tech text-sm uppercase mb-2">Name</label>
                    <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-sm p-3 text-white focus:outline-none focus:border-cyan-glow focus:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all" />
                </div>
                <div>
                    <label className="block text-slate-400 font-tech text-sm uppercase mb-2">Email</label>
                    <input type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-sm p-3 text-white focus:outline-none focus:border-cyan-glow focus:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all" />
                </div>
                <div>
                    <label className="block text-slate-400 font-tech text-sm uppercase mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-slate-900/50 border border-slate-700 rounded-sm p-3 text-white focus:outline-none focus:border-cyan-glow focus:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all"></textarea>
                </div>
                
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold tracking-wider uppercase rounded-sm hover:shadow-[0_0_20px_#00E5FF] transition-all duration-300 flex items-center justify-center gap-2">
                    <Send size={18} /> Initialize Contact
                </button>
            </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
