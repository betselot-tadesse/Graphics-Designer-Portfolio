
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, X, Plus, CheckCircle2, Target, Lightbulb, Image as ImageIcon } from 'lucide-react';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const initialVisibleCount = 6;
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, initialVisibleCount);

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

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
          <p className="text-slate-400 font-tech text-lg">Detailed case studies of my latest local and global designs.</p>
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
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (index % initialVisibleCount) * 0.05 }}
                layout
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-slate-800 group-hover:border-cyan-glow/50 transition-colors duration-500 shadow-xl bg-slate-900">
                  
                  {/* Shimmer/Skeleton Loader */}
                  {!loadedImages[project.id] && !imageErrors[project.id] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 animate-pulse flex items-center justify-center">
                      <ImageIcon className="text-slate-700 w-12 h-12" />
                    </div>
                  )}

                  {/* Error Fallback */}
                  {imageErrors[project.id] ? (
                    <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-slate-800">
                      <ImageIcon className="text-slate-600 mb-2" size={32} />
                      <p className="text-slate-500 font-tech text-xs uppercase tracking-widest">Image Data Missing</p>
                      <p className="text-slate-700 text-[10px] mt-2">ID: {project.id}</p>
                    </div>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      onLoad={() => handleImageLoad(project.id)}
                      onError={() => handleImageError(project.id)}
                      className={`w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-out ${loadedImages[project.id] ? 'opacity-100' : 'opacity-0'}`}
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-cosmic-900/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm">
                    <h3 className="font-display text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="text-cyan-glow font-tech uppercase tracking-widest text-sm mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {project.category}
                    </p>
                    <button className="px-6 py-2 border border-magenta-glow/50 text-magenta-glow font-tech hover:bg-magenta-glow hover:text-white transition-all duration-300 rounded-sm">
                      Detailed Case
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        {!showAll && PROJECTS.length > initialVisibleCount && (
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={() => setShowAll(true)}
              className="group relative px-12 py-4 bg-transparent border border-cyan-glow/30 text-cyan-glow font-tech uppercase tracking-[0.2em] rounded-sm hover:border-cyan-glow transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Plus size={18} className="group-hover:rotate-180 transition-transform duration-500" />
                Access Full Archive
              </span>
              <div className="absolute inset-0 bg-cyan-glow/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-glow/50 shadow-[0_0_10px_#00E5FF] group-hover:animate-scan" />
            </button>
          </motion.div>
        )}

        {/* Enhanced Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div 
                className="absolute inset-0 bg-cosmic-900/95 backdrop-blur-xl" 
                onClick={() => setSelectedProject(null)}
              />
              
              <motion.div 
                className="relative bg-cosmic-800 border border-cyan-glow/30 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg shadow-[0_0_80px_rgba(0,229,255,0.15)] overflow-x-hidden"
                initial={{ scale: 0.95, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 50 }}
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-30 bg-cosmic-900/80 p-3 rounded-full border border-slate-700 hover:border-magenta-glow"
                >
                  <X size={24} />
                </button>

                <div className="flex flex-col">
                  {/* Hero Image Section */}
                  <div className="h-64 md:h-[400px] relative w-full overflow-hidden bg-slate-900">
                     {imageErrors[selectedProject.id] ? (
                        <div className="w-full h-full flex items-center justify-center">
                           <ImageIcon size={64} className="text-slate-800" />
                        </div>
                     ) : (
                        <img 
                          src={selectedProject.image} 
                          alt={selectedProject.title} 
                          className="w-full h-full object-cover"
                        />
                     )}
                    <div className="absolute inset-0 bg-gradient-to-t from-cosmic-800 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8">
                       <span className="text-magenta-glow font-tech uppercase tracking-[0.2em] text-xs border border-magenta-glow/50 px-4 py-1.5 rounded-sm bg-magenta-glow/5 backdrop-blur-md mb-3 inline-block">
                        {selectedProject.category}
                      </span>
                      <h2 className="font-display text-3xl md:text-5xl font-bold text-white text-glow">
                        {selectedProject.title}
                      </h2>
                    </div>
                  </div>
                  
                  {/* Content Grid */}
                  <div className="p-8 md:p-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                      {/* Left Column: Details */}
                      <div className="lg:col-span-2 space-y-10">
                        {/* Summary */}
                        <div>
                          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
                            {selectedProject.description}
                          </p>
                        </div>

                        {/* Problem & Solution Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="card-glass p-6 rounded-lg border-l-2 border-magenta-glow/30">
                            <div className="flex items-center gap-2 mb-4 text-magenta-glow">
                              <Target size={20} />
                              <h4 className="font-display text-sm font-bold uppercase tracking-widest">The Problem</h4>
                            </div>
                            <p className="text-slate-400 font-light leading-relaxed text-sm">
                              {selectedProject.problem || "Information not specified."}
                            </p>
                          </div>
                          
                          <div className="card-glass p-6 rounded-lg border-l-2 border-cyan-glow/30">
                            <div className="flex items-center gap-2 mb-4 text-cyan-glow">
                              <Lightbulb size={20} />
                              <h4 className="font-display text-sm font-bold uppercase tracking-widest">Our Solution</h4>
                            </div>
                            <p className="text-slate-400 font-light leading-relaxed text-sm">
                              {selectedProject.solution || "Information not specified."}
                            </p>
                          </div>
                        </div>

                        {/* Outcomes Section */}
                        {selectedProject.visualOutcomes && (
                          <div className="space-y-4">
                            <h4 className="font-display text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                              <span className="w-8 h-[1px] bg-cyan-glow" />
                              Visual Outcomes
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {selectedProject.visualOutcomes.map((outcome, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-slate-300 group">
                                  <CheckCircle2 size={16} className="text-cyan-glow group-hover:text-magenta-glow transition-colors" />
                                  <span className="text-sm font-tech uppercase tracking-wider">{outcome}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right Column: Meta Info */}
                      <div className="space-y-8 lg:border-l lg:border-slate-800 lg:pl-12">
                        {/* Client Info */}
                        {selectedProject.client && (
                          <div className="space-y-2">
                            <h4 className="font-tech text-slate-500 text-xs uppercase tracking-[0.2em]">Client</h4>
                            <p className="text-white font-display text-lg">{selectedProject.client}</p>
                          </div>
                        )}

                        {/* Tools Used */}
                        <div className="space-y-4">
                          <h4 className="font-tech text-slate-500 text-xs uppercase tracking-[0.2em]">Tech Arsenal</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tools.map(tool => (
                              <span key={tool} className="text-xs text-cyan-glow border border-cyan-glow/20 bg-cyan-glow/5 px-3 py-1.5 rounded-sm font-tech uppercase">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Call to action */}
                        <div className="pt-6">
                           <button className="flex items-center justify-center gap-3 bg-white text-cosmic-900 px-8 py-4 rounded-sm font-display font-bold text-xs uppercase tracking-[0.1em] hover:bg-cyan-glow hover:text-cosmic-900 transition-all duration-300 w-full group shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            Launch Project <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
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
