import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface BentoGridProps {
  onSelectProject: (project: Project) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ onSelectProject }) => {
  const getSpanClasses = (size: Project['size']) => {
    switch (size) {
      case 'large': return 'md:col-span-2 md:row-span-2';
      case 'tall': return 'md:col-span-1 md:row-span-2';
      case 'medium': return 'md:col-span-2 md:row-span-1';
      case 'small': default: return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <section id="work" className="container mx-auto px-6 md:px-12 py-32">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 border-b border-white/10 pb-8">
        <div>
          <h3 className="text-6xl md:text-8xl font-serif font-serif-display text-white mb-4 tracking-tighter">Selected <br/><span className="italic text-zinc-600">Works</span></h3>
        </div>
        <div className="flex flex-col items-end mt-8 md:mt-0">
          <p className="text-zinc-500 font-mono text-xs tracking-widest text-right mb-2">CURATED PORTFOLIO</p>
          <p className="text-zinc-500 font-mono text-xs tracking-widest text-right">2023 — 2025</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
        {PROJECTS.map((project, index) => (
          <div 
            key={project.id} 
            className={`group relative bg-card-bg overflow-hidden cursor-pointer ${getSpanClasses(project.size)}`}
            onClick={() => onSelectProject(project)}
          >
            {/* Project Index Number */}
            <div className="absolute top-6 left-6 z-20 mix-blend-difference">
              <span className="font-serif font-serif-display italic text-4xl text-white/50 group-hover:text-white transition-colors duration-500">
                {(index + 1).toString().padStart(2, '0')}
              </span>
            </div>

            {/* Image */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center justify-between mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <div className="flex gap-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="font-mono text-[9px] border border-white/20 text-zinc-300 px-2 py-1 rounded-full backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight size={16} className="text-accent-lime" />
                </div>
                
                <h4 className="text-3xl font-serif font-serif-display text-white leading-[0.9] group-hover:text-accent-lime transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="font-mono text-[10px] text-zinc-400 mt-2 tracking-widest uppercase">
                  {project.category} — {project.year}
                </p>
              </div>
            </div>
            
            {/* Hover Border Effect */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-accent-lime/30 transition-colors duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};