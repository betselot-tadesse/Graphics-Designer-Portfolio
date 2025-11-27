import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const coreSkills = SKILLS.filter(s => s.category === 'core');
  const softwareSkills = SKILLS.filter(s => s.category === 'software');

  return (
    <section className="py-24 px-6 relative z-10" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-glow">
            Technical <span className="text-cyan-glow">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-glow to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Core Skills */}
          <div>
            <h3 className="font-tech text-2xl text-slate-300 mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-magenta-glow rounded-full shadow-[0_0_8px_#FF3EF0]"></span>
              Core Capabilities
            </h3>
            <div className="space-y-6">
              {coreSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-tech text-lg text-slate-200">{skill.name}</span>
                    <span className="font-mono text-cyan-glow/80">{skill.level}%</span>
                  </div>
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-cyan-glow shadow-[0_0_10px_#00E5FF]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Software Skills - Grid Cards */}
          <div>
            <h3 className="font-tech text-2xl text-slate-300 mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-glow rounded-full shadow-[0_0_8px_#00E5FF]"></span>
              Software Proficiency
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softwareSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="card-glass p-4 rounded-sm border-l-2 border-l-transparent hover:border-l-cyan-glow transition-all group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="font-tech text-lg text-slate-200 group-hover:text-cyan-glow transition-colors">
                    {skill.name}
                  </h4>
                  <div className="mt-2 h-1 w-full bg-slate-800 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-glow to-magenta-glow" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
