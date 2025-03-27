
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 py-3 md:py-4 px-4 md:px-10 transition-all duration-300",
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Link to="/" className="flex items-center">
              <span className="font-medium text-lg md:text-xl">motion</span>
              <span className="text-lg md:text-xl font-light opacity-60">fashion</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/planos" className="text-sm animated-underline">Planos</Link>
            <a href="#how-it-works" className="text-sm animated-underline">Como Funciona</a>
            <a href="#examples" className="text-sm animated-underline">Exemplos</a>
            <a href="#upload" className="text-sm animated-underline">Experimente</a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-primary p-1"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <button className="hidden md:block px-4 py-2 text-sm text-primary-foreground bg-primary rounded-full transition-all duration-300 hover:opacity-90">
            Começar
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-md py-4 px-6 flex flex-col space-y-4 border-t">
          <Link 
            to="/planos" 
            className="text-sm py-2" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Planos
          </Link>
          <a 
            href="#how-it-works" 
            className="text-sm py-2" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Como Funciona
          </a>
          <a 
            href="#examples" 
            className="text-sm py-2" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Exemplos
          </a>
          <a 
            href="#upload" 
            className="text-sm py-2" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Experimente
          </a>
          <button className="w-full px-4 py-2 text-sm text-primary-foreground bg-primary rounded-full transition-all duration-300 hover:opacity-90 mt-2">
            Começar
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
