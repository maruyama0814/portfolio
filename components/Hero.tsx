import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-dark-bg">
      
      {/* Marquee Background - Forward */}
      <div className="absolute top-1/4 left-0 w-full -translate-y-1/2 pointer-events-none select-none overflow-hidden whitespace-nowrap font-serif font-serif-display text-[15vh] leading-none opacity-30 z-0">
        <div className="animate-marquee inline-block text-outline">
          Visual Identity • Creative Direction • Digital Experience • Visual Identity • Creative Direction • Digital Experience •
        </div>
        <div className="animate-marquee inline-block absolute top-0 left-full text-outline">
          Visual Identity • Creative Direction • Digital Experience • Visual Identity • Creative Direction • Digital Experience •
        </div>
      </div>

      {/* Marquee Background - Reverse */}
      <div className="absolute bottom-1/4 left-0 w-full translate-y-1/2 pointer-events-none select-none overflow-hidden whitespace-nowrap font-serif font-serif-display text-[15vh] leading-none opacity-30 z-0">
        <div className="animate-marquee-reverse inline-block text-outline">
           Future Aesthetik • Digital Artisan • Modern Solutions • Future Aesthetik • Digital Artisan • Modern Solutions •
        </div>
        <div className="animate-marquee-reverse inline-block absolute top-0 left-full text-outline">
           Future Aesthetik • Digital Artisan • Modern Solutions • Future Aesthetik • Digital Artisan • Modern Solutions •
        </div>
      </div>

      {/* Gradient Blobs */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] -z-10 animate-blob mix-blend-screen"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime-900/10 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000 mix-blend-screen"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-8 overflow-hidden">
             <span className="inline-flex items-center gap-2 font-mono text-[10px] text-accent-lime border border-accent-lime/30 bg-accent-lime/5 px-4 py-2 rounded-full backdrop-blur-sm animate-slide-up">
               <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse"></span>
               AVAILABLE FOR NEW PROJECTS
             </span>
          </div>

          <h1 className="text-7xl md:text-9xl font-serif font-serif-display leading-[0.85] mb-8 tracking-tight mix-blend-lighten animate-slide-up text-white" style={{ animationDelay: '0.1s' }}>
            LUMINA <br />
            <span className="italic font-light text-zinc-500 block transform translate-x-4 md:translate-x-12">Studio</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-lg mx-auto leading-relaxed animate-slide-up font-light" style={{ animationDelay: '0.2s' }}>
            Crafting <span className="text-white border-b border-white/20 pb-0.5">immersive</span> digital experiences from Tokyo to the world.
          </p>
        </div>
      </div>

      {/* Rotating Text Scroll Indicator */}
      <div className="absolute bottom-12 right-6 md:right-12 animate-slide-up" style={{ animationDelay: '0.5s' }}>
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 100 100" width="100%" height="100%">
              <defs>
                <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text fontSize="11" fill="currentColor" className="text-zinc-500 font-mono uppercase tracking-widest">
                <textPath xlinkHref="#circle">
                  Scroll Down • Explore Work • Scroll Down •
                </textPath>
              </text>
            </svg>
          </div>
          <ArrowDown className="text-white" size={24} />
        </div>
      </div>
    </section>
  );
};