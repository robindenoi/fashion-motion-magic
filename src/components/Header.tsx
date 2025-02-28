
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-10 transition-all duration-300",
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <span className="font-medium text-xl">motion</span>
            <span className="text-xl font-light opacity-60">fashion</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-sm animated-underline">Como Funciona</a>
            <a href="#examples" className="text-sm animated-underline">Exemplos</a>
            <a href="#upload" className="text-sm animated-underline">Experimente</a>
          </nav>
          
          <button className="px-4 py-2 text-sm text-primary-foreground bg-primary rounded-full transition-all duration-300 hover:opacity-90">
            Começar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
