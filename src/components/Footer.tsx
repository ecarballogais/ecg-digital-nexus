
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-carvil-navy-900 text-white py-16 font-corporate">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la Empresa */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/f7002e93-627e-4490-a699-631e5d17e77a.png" 
                alt="CARVIL Logo" 
                className="h-8 w-auto filter brightness-0 invert" 
              />
              <div className="text-xl font-bold text-carvil-blue-400 font-corporate">
                CARVIL <span className="text-gray-300">Technology</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed font-corporate">
              Transformamos negocios con soluciones tecnológicas innovadoras y personalizadas 
              para impulsar tu crecimiento digital.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61577767590965" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-carvil-navy-800 rounded-full flex items-center justify-center hover:bg-carvil-blue-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/carvil-s-a-s-technology-solutions-585426372/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-carvil-navy-800 rounded-full flex items-center justify-center hover:bg-carvil-blue-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/carvilsas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-carvil-navy-800 rounded-full flex items-center justify-center hover:bg-carvil-blue-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com/carvilsas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-carvil-navy-800 rounded-full flex items-center justify-center hover:bg-carvil-blue-600 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-corporate">Navegación</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')} 
                  className="hover:text-white transition-colors font-corporate"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')} 
                  className="hover:text-white transition-colors font-corporate"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('proyectos')} 
                  className="hover:text-white transition-colors font-corporate"
                >
                  Proyectos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('nosotros')} 
                  className="hover:text-white transition-colors font-corporate"
                >
                  Nosotros
                </button>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-corporate">Servicios Principales</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer font-corporate">Sistemas ERP</li>
              <li className="hover:text-white transition-colors cursor-pointer font-corporate">Desarrollo Web</li>
              <li className="hover:text-white transition-colors cursor-pointer font-corporate">Apps Móviles</li>
              <li className="hover:text-white transition-colors cursor-pointer font-corporate">Automatización</li>
              <li className="hover:text-white transition-colors cursor-pointer font-corporate">Ciberseguridad</li>
              <li className="hover:text-white transition-colors cursor-pointer font-corporate">Cloud Computing</li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-corporate">Contacto</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="font-corporate">Email: edu@ecarballogais.es</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-corporate">WhatsApp: +54 260 400 6416</span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-carvil-navy-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm font-corporate">
              © 2025 CARVIL S.A.S. Technology Solutions. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors font-corporate">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors font-corporate">Términos de Servicio</a>
              <a href="#" className="hover:text-white transition-colors font-corporate">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
