import React from 'react';
import { Button } from "@/components/ui/button";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="inicio" className="min-h-screen flex items-center justify-center relative pt-20 font-corporate" style={{
    backgroundImage: `url('/lovable-uploads/eb7debac-83a1-41c0-9cfa-f5f559e86f8c.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Overlay with transparency */}
      <div className="absolute inset-0 bg-gradient-to-br from-carvil-silver-50 to-carvil-navy-50 opacity-30"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-carvil-navy-800 leading-tight font-corporate">
              Transformamos tu negocio con 
              <span className="text-carvil-blue-500 block">soluciones tecnológicas guiadas por IA</span>
            </h1>
            <p className="text-xl text-carvil-steel-700 leading-relaxed text-zinc-950 font-corporate">We are CARVIL Technology Solutions, your strategic partner in business digital transformation. We offer innovative and adaptable technology to drive your growth.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollToSection('servicios')} className="bg-gradient-carvil text-white px-8 py-3 text-lg hover:shadow-lg transition-all hover:shadow-carvil-navy-200 font-corporate">
                Explorar Servicios
              </Button>
              <Button onClick={() => scrollToSection('contacto')} variant="outline" className="border-carvil-blue-500 text-carvil-blue-500 hover:bg-carvil-blue-50 px-8 py-3 text-lg font-corporate">
                Contactar Ahora
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-carvil-navy-600 font-corporate">100+</div>
                <div className="text-carvil-steel-600 font-corporate bg-blue-100">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-carvil-navy-600 font-corporate">5+</div>
                <div className="text-carvil-steel-600 font-corporate bg-sky-100">Años</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-carvil-navy-600 font-corporate">24/7</div>
                <div className="text-carvil-steel-600 font-corporate bg-sky-100">Soporte</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="w-full h-96 rounded-2xl shadow-2xl overflow-hidden">
              <img src="/lovable-uploads/05e85ba8-b0db-4c2b-898b-732a4a84b203.png" alt="Ciberseguridad - CARVIL Technology Solutions" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-carvil-blue-100 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-carvil-steel-200 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;