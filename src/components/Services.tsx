import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cog, Image } from 'lucide-react';

const Services = () => {
  const globalSolutions = [
    {
      title: "Sistemas ERP",
      description: "Integración de procesos empresariales (finanzas, RRHH, cadena de suministro, etc.) en una sola plataforma.",
      icon: "⚡"
    },
    {
      title: "Sistemas CRM",
      description: "Mejoran la relación con el cliente y optimizan el proceso de ventas.",
      icon: "👥"
    },
    {
      title: "Gestión de Contenidos Web",
      description: "Publicación y control de contenido en sitios y portales corporativos.",
      icon: "🌐"
    },
    {
      title: "Soluciones Multicanal",
      description: "Servicios digitales integrados para web, aplicaciones móviles y múltiples dispositivos.",
      icon: "📱"
    },
    {
      title: "Infraestructura Tecnológica",
      description: "Mejora y optimización de redes, servidores y sistemas de almacenamiento.",
      icon: "🏗️"
    }
  ];

  const partialSolutions = [
    {
      title: "Aplicaciones Móviles y Web",
      description: "Desarrollo de aplicaciones funcionales, intuitivas y adaptadas a múltiples dispositivos.",
      icon: "📲"
    },
    {
      title: "Herramientas de Automatización",
      description: "Optimización de procesos mediante automatización inteligente de tareas repetitivas.",
      icon: "🤖"
    },
    {
      title: "Plataformas de Comunicación",
      description: "Sistemas integrados de e-mail, mensajería y videollamadas corporativas.",
      icon: "💬"
    },
    {
      title: "Seguridad Informática",
      description: "Protección avanzada contra amenazas y ataques cibernéticos para tu empresa.",
      icon: "🔒"
    },
    {
      title: "Sistemas de Análisis de Datos",
      description: "Visualización e inteligencia de datos para la toma de decisiones estratégicas.",
      icon: "📊"
    },
    {
      title: "Aplicaciones Móviles",
      description: "Servicios personalizados accesibles desde cualquier dispositivo móvil.",
      icon: "📱"
    },
    {
      title: "Análisis de Datos",
      description: "Herramientas para tomar decisiones basadas en información real.",
      icon: "📈"
    },
    {
      title: "Ciberseguridad",
      description: "Protección integral frente a amenazas digitales y ciberataques.",
      icon: "🛡️"
    },
    {
      title: "Servicios en la Nube",
      description: "Infraestructura escalable y remota para tu negocio.",
      icon: "☁️"
    }
  ];

  const emergingTech = [
    { name: "Inteligencia Artificial (IA)", icon: "🧠" },
    { name: "Internet de las Cosas (IoT)", icon: "🔗" },
    { name: "Blockchain", icon: "⛓️" },
    { name: "Computación en la Nube", icon: "☁️" },
    { name: "Firma Electrónica", icon: "✍️" }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4" style={{
        backgroundImage: `url('/lovable-uploads/297899a0-1fd9-4e0d-8c2a-39da1a74f8aa.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        {/* Overlay para mejorar legibilidad */}
        <div className="relative z-10 bg-white/70 backdrop-blur-sm rounded-2xl p-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones tecnológicas integrales, desde sistemas empresariales completos hasta 
              herramientas específicas que impulsan la transformación digital de tu negocio.
            </p>
          </div>

          {/* Soluciones Globales */}
          <div className="mb-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-ecg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🧩</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Soluciones Globales</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {globalSolutions.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group animate-fade-in">
                  <CardHeader>
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Soluciones Parciales */}
          <div className="mb-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <Cog className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Soluciones Parciales</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partialSolutions.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group animate-fade-in">
                  <CardHeader>
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tecnologías Emergentes */}
          <div className="mb-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Tecnologías Emergentes</h3>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {emergingTech.map((tech, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg text-center hover:scale-105 transition-transform animate-fade-in">
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <h4 className="font-semibold text-gray-900 text-sm">{tech.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Diseño y Animación */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                <Image className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Diseño y Marketing Digital</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <div className="text-4xl mb-4">🎨</div>
                  <CardTitle className="text-xl text-gray-900">Páginas Web Profesionales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Diseño y desarrollo de sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <div className="text-4xl mb-4">📱</div>
                  <CardTitle className="text-xl text-gray-900">Contenido Visual y Animaciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Creación de anuncios visuales y animaciones para redes sociales enfocadas en aumentar ventas y presencia digital.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
