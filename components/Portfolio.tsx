import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, X } from 'lucide-react';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-24 px-6 relative z-10" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-glow">
            Selected <span className="text-magenta-glow">Works</span>
          </h2>
          <p className="text-slate-400 font-tech text-lg">A collection of cosmic creations.</p>
        </motion.div>

        {/* Portfolio Stats */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
            <div className="card-glass px-10 py-6 rounded-lg text-center min-w-[200px] border border-cyan-glow/20 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-glow shadow-[0_0_15px_#00E5FF]"></div>
                <div className="absolute inset-0 bg-cyan-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-4xl font-display font-bold text-white mb-2 text-glow">150+</h3>
                <p className="text-slate-400 font-tech text-sm uppercase tracking-widest group-hover:text-cyan-glow transition-colors">Projects Completed</p>
            </div>
            
            <div className="card-glass px-10 py-6 rounded-lg text-center min-w-[200px] border border-magenta-glow/20 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                 <div className="absolute top-0 left-0 w-full h-1 bg-magenta-glow shadow-[0_0_15px_#FF3EF0]"></div>
                 <div className="absolute inset-0 bg-magenta-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-4xl font-display font-bold text-white mb-2 text-glow-magenta">50+</h3>
                <p className="text-slate-400 font-tech text-sm uppercase tracking-widest group-hover:text-magenta-glow transition-colors">Clients Served</p>
            </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-slate-800 group-hover:border-cyan-glow/50 transition-colors duration-500">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-cosmic-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm">
                  <h3 className="font-display text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-cyan-glow font-tech uppercase tracking-widest text-sm mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {project.category}
                  </p>
                  <button className="px-6 py-2 border border-magenta-glow/50 text-magenta-glow font-tech hover:bg-magenta-glow hover:text-white transition-all duration-300 rounded-sm">
                    View Case
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div 
                className="absolute inset-0 bg-cosmic-900/90 backdrop-blur-md" 
                onClick={() => setSelectedProject(null)}
              />
              
              <motion.div 
                className="relative bg-cosmic-800 border border-cyan-glow/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-[0_0_50px_rgba(0,229,255,0.1)]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-20 bg-cosmic-900/50 p-2 rounded-full"
                >
                  <X size={24} />
                </button>

                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-auto relative">
                     <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cosmic-800 to-transparent md:hidden" />
                  </div>
                  
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="mb-6">
                      <span className="text-magenta-glow font-tech uppercase tracking-wider text-sm border border-magenta-glow/30 px-3 py-1 rounded-full">
                        {selectedProject.category}
                      </span>
                    </div>
                    
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                      {selectedProject.title}
                    </h2>
                    
                    <p className="text-slate-300 leading-relaxed mb-6 font-light">
                      {selectedProject.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="font-tech text-slate-400 uppercase tracking-wide text-sm mb-3">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tools.map(tool => (
                          <span key={tool} className="text-sm text-cyan-glow bg-cyan-glow/10 px-3 py-1 rounded-sm">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="flex items-center gap-2 bg-slate-100 text-cosmic-900 px-6 py-3 rounded-sm font-bold hover:bg-cyan-glow transition-colors w-max">
                      <ExternalLink size={18} /> View Live Project
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;