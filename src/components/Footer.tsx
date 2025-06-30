import React from 'react';
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-carvil-navy-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la Empresa */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/f7002e93-627e-4490-a699-631e5d17e77a.png" alt="CARVIL Logo" className="h-8 w-auto filter brightness-0 invert" />
              <div className="text-xl font-bold text-carvil-blue-400">
                CARVIL <span className="text-gray-300">Technology</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformamos negocios con soluciones tecnológicas innovadoras y personalizadas 
              para impulsar tu crecimiento digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-carvil-navy-800 rounded-full flex items-center justify-center hover:bg-carvil-blue-600 transition-colors">
                <span className="text-sm">📘</span>
              </a>
              <a href="#" className="w-8 h-8 bg-carvil-navy-800 rounded-full flex items-center justify-center hover:bg-carvil-blue-600 transition-colors">
                <span className="text-sm">💼</span>
              </a>
              <a href="#" className="w-8 h-8 bg-carvil-navy-800 rounded-full flex items-center justify-center hover:bg-carvil-blue-600 transition-colors">
                <span className="text-sm">📸</span>
              </a>
              <a href="#" className="w-8 h-8 bg-carvil-navy-800 rounded-full flex items-center justify-center hover:bg-carvil-blue-600 transition-colors">
                <span className="text-sm">🐦</span>
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Navegación</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="hover:text-white transition-colors">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicios')} className="hover:text-white transition-colors">
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('proyectos')} className="hover:text-white transition-colors">
                  Proyectos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('nosotros')} className="hover:text-white transition-colors">
                  Nosotros
                </button>
              </li>
              <li>
                
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Servicios Principales</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Sistemas ERP</li>
              <li className="hover:text-white transition-colors cursor-pointer">Desarrollo Web</li>
              <li className="hover:text-white transition-colors cursor-pointer">Apps Móviles</li>
              <li className="hover:text-white transition-colors cursor-pointer">Automatización</li>
              <li className="hover:text-white transition-colors cursor-pointer">Ciberseguridad</li>
              <li className="hover:text-white transition-colors cursor-pointer">Cloud Computing</li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                
                
              </div>
              <div className="flex items-center space-x-2">
                
                
              </div>
              <div className="flex items-center space-x-2">
                
                
              </div>
              <div className="flex items-center space-x-2">
                
                
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-carvil-navy-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© 2025 CARVIL S.A.S. Technology Solutions. Todos los derechos reservados.</div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;