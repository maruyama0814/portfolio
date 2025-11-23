import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen text-zinc-100 selection:bg-accent-lime selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section with Grid Background */}
        <div className="relative bg-zinc-950 border-t border-white/5 overflow-hidden">
           {/* CSS Grid Pattern */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
           
           <div id="about" className="relative container mx-auto px-6 md:px-12 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative">
                <div className="absolute -left-4 -top-4 w-12 h-12 border-t border-l border-accent-lime/50"></div>
                <h3 className="font-mono text-accent-lime text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-accent-lime"></span> About Me
                </h3>
                <p className="text-3xl md:text-5xl font-serif font-serif-display leading-tight text-zinc-200 mb-8">
                  Blurring the lines between <span className="italic text-zinc-500">digital</span> and <span className="italic text-zinc-500">physical</span> design.
                </p>
                <p className="text-zinc-400 font-light leading-relaxed max-w-md">
                  東京を拠点に活動するデジタルアーティザン。ミニマリズムの哲学と最新のAIテクノロジーを融合させ、単なる視覚表現を超えた「体験」としてのデザインを構築します。
                </p>
             </div>
             
             <div className="flex flex-col gap-8 lg:pl-20">
               <div className="flex flex-col gap-2">
                 <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Services</span>
                 <ul className="space-y-2 text-lg font-light">
                   <li className="border-b border-white/10 pb-2">Art Direction</li>
                   <li className="border-b border-white/10 pb-2">Brand Identity</li>
                   <li className="border-b border-white/10 pb-2">UI/UX Design</li>
                   <li className="border-b border-white/10 pb-2">Motion Graphics</li>
                 </ul>
               </div>
               
               <div className="flex gap-4 mt-4">
                 <div className="px-4 py-4 bg-zinc-900 rounded-full border border-white/5">
                    <span className="font-mono text-xs text-zinc-400">Loc: Tokyo, JP</span>
                 </div>
                 <div className="px-4 py-4 bg-zinc-900 rounded-full border border-white/5">
                    <span className="font-mono text-xs text-accent-lime">● Open for Work</span>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <BentoGrid onSelectProject={setSelectedProject} />
      </main>
      
      <Footer />

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default App;