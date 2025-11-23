import React from 'react';
import { Instagram, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black pt-24 pb-6 border-t border-white/10 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-32">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-serif font-serif-display text-white mb-8 leading-[0.9]">
              Have an idea? <br />
              <span className="italic text-zinc-600">Let's build it.</span>
            </h2>
            <p className="text-zinc-400 max-w-md font-light">
              We are currently accepting new projects for Q2 2025. 
              Drop us a line to discuss your vision.
            </p>
          </div>
          
          <div className="mt-12 md:mt-0">
            <a 
              href="mailto:hello@lumina.design" 
              className="group inline-flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full font-mono text-sm font-bold tracking-widest hover:bg-accent-lime transition-colors"
            >
              START A PROJECT
              <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8">
          <div className="flex gap-4 mb-6 md:mb-0">
            {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
              <a key={i} href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-[10px] font-mono uppercase tracking-widest text-zinc-600">
            <span>© 2025 Lumina Portfolio</span>
            <span>Tokyo, Japan</span>
          </div>
        </div>
      </div>
      
      {/* Giant Watermark */}
      <div className="w-full text-center pointer-events-none select-none">
        <h1 className="text-[18vw] font-serif font-serif-display leading-[0.7] text-[#0a0a0a] translate-y-[10%]">
          LUMINA
        </h1>
      </div>
    </footer>
  );
};