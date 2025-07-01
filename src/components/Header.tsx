
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 font-corporate dark:bg-gray-900/95">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/f7002e93-627e-4490-a699-631e5d17e77a.png" 
              alt="CARVIL Logo" 
              className="h-8 w-auto"
            />
            <div className="text-xl font-bold text-carvil-navy-700 font-corporate dark:text-white">
              CARVIL <span className="text-carvil-steel-600 dark:text-carvil-steel-300">Technology Solutions</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <button onClick={() => scrollToSection('inicio')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors font-corporate dark:text-carvil-steel-300">
                {t.inicio}
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors font-corporate dark:text-carvil-steel-300">
                {t.servicios}
              </button>
              <button onClick={() => scrollToSection('proyectos')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors font-corporate dark:text-carvil-steel-300">
                {t.proyectos}
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors font-corporate dark:text-carvil-steel-300">
                {t.nosotros}
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors font-corporate dark:text-carvil-steel-300">
                {t.contacto}
              </button>
            </div>
            
            {/* Theme and Language Controls */}
            <div className="flex items-center space-x-3 border-l border-carvil-silver-300 pl-6 dark:border-carvil-steel-600">
              <ThemeToggle />
              <LanguageSelector />
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 border-l border-carvil-silver-300 pl-6 dark:border-carvil-steel-600">
              <a 
                href="https://www.facebook.com/profile.php?id=61577767590965" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-carvil-steel-600 hover:text-carvil-blue-600 transition-colors dark:text-carvil-steel-400"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://x.com/carvilsas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-carvil-steel-600 hover:text-carvil-blue-600 transition-colors dark:text-carvil-steel-400"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.instagram.com/carvilsas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-carvil-steel-600 hover:text-carvil-blue-600 transition-colors dark:text-carvil-steel-400"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/carvil-s-a-s-technology-solutions-585426372/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-carvil-steel-600 hover:text-carvil-blue-600 transition-colors dark:text-carvil-steel-400"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <Button onClick={() => scrollToSection('contacto')} className="hidden md:inline-flex bg-gradient-carvil text-white hover:shadow-lg font-corporate">
            {t.cotizarProyecto}
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-carvil-steel-700 dark:bg-carvil-steel-300 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-full h-0.5 bg-carvil-steel-700 dark:bg-carvil-steel-300 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-carvil-steel-700 dark:bg-carvil-steel-300 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-carvil-silver-200 dark:border-carvil-steel-700">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors text-left font-corporate dark:text-carvil-steel-300">
                {t.inicio}
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors text-left font-corporate dark:text-carvil-steel-300">
                {t.servicios}
              </button>
              <button onClick={() => scrollToSection('proyectos')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors text-left font-corporate dark:text-carvil-steel-300">
                {t.proyectos}
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors text-left font-corporate dark:text-carvil-steel-300">
                {t.nosotros}
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors text-left font-corporate dark:text-carvil-steel-300">
                {t.contacto}
              </button>
              
              {/* Mobile Theme and Language Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-carvil-silver-200 dark:border-carvil-steel-700">
                <ThemeToggle />
                <LanguageSelector />
              </div>
              
              {/* Mobile Social Media Icons */}
              <div className="flex space-x-4 pt-4 border-t border-carvil-silver-200 dark:border-carvil-steel-700">
                <a 
                  href="https://www.facebook.com/profile.php?id=61577767590965" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-carvil-steel-600 hover:text-carvil-blue-600 transition-colors dark:text-carvil-steel-400"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="https://x.com/carvilsas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-carvil-steel-600 hover:text-carvil-blue-600 transition-colors dark:text-carvil-steel-400"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="https://www.instagram.com/carvilsas/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-carvil-steel-600 hover:text-carvil-blue-600 transition-colors dark:text-carvil-steel-400"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/carvil-s-a-s-technology-solutions-585426372/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-carvil-steel-600 hover:text-carvil-blue-600 transition-colors dark:text-carvil-steel-400"
                >
                  <Linkedin size={18} />
                </a>
              </div>
              
              <Button onClick={() => scrollToSection('contacto')} className="bg-gradient-carvil text-white w-full mt-4 font-corporate">
                {t.cotizarProyecto}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
