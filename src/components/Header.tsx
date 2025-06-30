
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 font-corporate">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/f7002e93-627e-4490-a699-631e5d17e77a.png" 
              alt="CARVIL Logo" 
              className="h-8 w-auto"
            />
            <div className="text-xl font-bold text-carvil-navy-700 font-corporate">
              CARVIL <span className="text-carvil-steel-600">Technology Solutions</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <button onClick={() => scrollToSection('inicio')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors font-corporate">
                Inicio
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors font-corporate">
                Servicios
              </button>
              <button onClick={() => scrollToSection('proyectos')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors font-corporate">
                Proyectos
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors font-corporate">
                Nosotros
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors font-corporate">
                Contacto
              </button>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 border-l border-carvil-silver-300 pl-6">
              <a 
                href="https://www.facebook.com/profile.php?id=61577767590965" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-carvil-steel-600 hover:text-carvil-blue-600 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://x.com/carvilsas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-carvil-steel-600 hover:text-carvil-blue-600 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.instagram.com/carvilsas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-carvil-steel-600 hover:text-carvil-blue-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/carvil-s-a-s-technology-solutions-585426372/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-carvil-steel-600 hover:text-carvil-blue-600 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <Button onClick={() => scrollToSection('contacto')} className="hidden md:inline-flex bg-gradient-carvil text-white hover:shadow-lg font-corporate">
            Cotizar Proyecto
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-carvil-steel-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-full h-0.5 bg-carvil-steel-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-carvil-steel-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-carvil-silver-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors text-left font-corporate">
                Inicio
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors text-left font-corporate">
                Servicios
              </button>
              <button onClick={() => scrollToSection('proyectos')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors text-left font-corporate">
                Proyectos
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors text-left font-corporate">
                Nosotros
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors text-left font-corporate">
                Contacto
              </button>
              
              {/* Mobile Social Media Icons */}
              <div className="flex space-x-4 pt-4 border-t border-carvil-silver-200">
                <a 
                  href="https://www.facebook.com/profile.php?id=61577767590965" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-carvil-steel-600 hover:text-carvil-blue-600 transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="https://x.com/carvilsas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-carvil-steel-600 hover:text-carvil-blue-600 transition-colors"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="https://www.instagram.com/carvilsas/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-carvil-steel-600 hover:text-carvil-blue-600 transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/carvil-s-a-s-technology-solutions-585426372/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-carvil-steel-600 hover:text-carvil-blue-600 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              </div>
              
              <Button onClick={() => scrollToSection('contacto')} className="bg-gradient-carvil text-white w-full mt-4 font-corporate">
                Cotizar Proyecto
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
