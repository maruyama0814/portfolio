import React, { useEffect, useState } from 'react';
import { X, Sparkles, Loader2, ExternalLink, Copy } from 'lucide-react';
import { Project } from '../types';
import { generateProjectInsight } from '../services/geminiService';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setInsight(null);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  const handleGenerateInsight = async () => {
    setLoading(true);
    const text = await generateProjectInsight(project.title, project.tags);
    setInsight(text);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-zinc-950 w-full max-w-6xl h-full md:h-[90vh] md:rounded-lg shadow-2xl flex flex-col md:flex-row overflow-hidden animate-slide-up border border-white/5">
        
        {/* Close Button Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 backdrop-blur-md rounded-full text-white md:hidden"
        >
          <X size={20} />
        </button>

        {/* Left: Image Area */}
        <div className="w-full md:w-3/5 h-[40vh] md:h-full relative bg-zinc-900">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent md:hidden"></div>
        </div>

        {/* Right: Content Area */}
        <div className="w-full md:w-2/5 h-full overflow-y-auto bg-zinc-950 relative">
           {/* Close Button Desktop */}
           <button 
            onClick={onClose}
            className="hidden md:block absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-400 hover:text-white"
          >
            <X size={24} />
          </button>

          <div className="p-8 md:p-12 flex flex-col min-h-full">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6 font-mono text-xs text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-4">
                 <span>{project.category}</span>
                 <span>/</span>
                 <span>{project.year}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-serif-display mb-6 text-white leading-[0.9]">{project.title}</h2>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono text-zinc-400 border border-white/10 px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Insight Section */}
            <div className="flex-grow">
              <div className="bg-zinc-900/50 border border-white/5 p-6 md:p-8 relative overflow-hidden group transition-colors hover:border-accent-lime/30">
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-mono font-bold text-accent-lime flex items-center gap-2">
                    <Sparkles size={14} />
                    AI CASE STUDY
                  </h3>
                </div>

                {!insight && !loading && (
                  <div className="text-center py-10">
                    <p className="text-zinc-500 font-serif text-lg italic mb-6 opacity-70">
                      "Discover the design philosophy behind this project."
                    </p>
                    <button 
                      onClick={handleGenerateInsight}
                      className="group relative px-6 py-3 bg-white text-black font-mono text-xs font-bold tracking-widest overflow-hidden transition-all hover:bg-accent-lime"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        GENERATE INSIGHT <Sparkles size={12} />
                      </span>
                    </button>
                  </div>
                )}

                {loading && (
                  <div className="flex flex-col items-center justify-center py-12 space-y-3">
                    <Loader2 size={24} className="animate-spin text-accent-lime" />
                    <span className="font-mono text-[10px] text-zinc-500 animate-pulse">ANALYZING VISUAL DATA...</span>
                  </div>
                )}

                {insight && (
                  <div className="animate-fade-in prose prose-invert prose-sm max-w-none">
                    <p className="text-zinc-300 leading-relaxed font-light text-sm md:text-base">
                      {insight}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
               <a href="#" className="inline-flex items-center gap-2 font-mono text-xs text-white hover:text-accent-lime transition-colors uppercase tracking-widest group">
                 Visit Live Site 
                 <ExternalLink size={12} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};