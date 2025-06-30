
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

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
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/f7002e93-627e-4490-a699-631e5d17e77a.png" 
              alt="CARVIL Logo" 
              className="h-8 w-auto"
            />
            <div className="text-xl font-bold text-carvil-navy-700">
              CARVIL <span className="text-carvil-steel-600">Technology Solutions</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('proyectos')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors">
              Proyectos
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors">
              Contacto
            </button>
          </div>

          <Button onClick={() => scrollToSection('contacto')} className="hidden md:inline-flex bg-gradient-carvil text-white hover:shadow-lg">
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
              <button onClick={() => scrollToSection('inicio')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors text-left">
                Inicio
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors text-left">
                Servicios
              </button>
              <button onClick={() => scrollToSection('proyectos')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors text-left">
                Proyectos
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors text-left">
                Nosotros
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-carvil-steel-700 hover:text-carvil-blue-600 transition-colors text-left">
                Contacto
              </button>
              <Button onClick={() => scrollToSection('contacto')} className="bg-gradient-carvil text-white w-full mt-4">
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
