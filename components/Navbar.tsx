import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-dark-bg/60 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl tracking-tight group cursor-pointer">
          <span className="font-serif font-serif-display italic text-3xl pr-1">L</span>
          <span className="font-mono text-sm tracking-widest group-hover:text-accent-lime transition-colors">UMINA</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-accent-lime transition-colors relative group"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent-lime transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white hover:text-accent-lime transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-zinc-950 flex flex-col justify-center items-center space-y-8 animate-fade-in">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-serif font-serif-display text-4xl text-zinc-300 hover:text-accent-lime hover:italic transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};