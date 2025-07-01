import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cog, Palette, Zap, Users, Globe, Smartphone, Bot, MessageSquare, Shield, BarChart3, Cloud, Brain, Link, Blocks, FileText, Lightbulb } from 'lucide-react';
const Services = () => {
  const globalSolutions = [{
    title: "Sistemas ERP",
    description: "Integración de procesos empresariales (finanzas, RRHH, cadena de suministro, etc.) en una sola plataforma.",
    icon: <Zap className="w-8 h-8 text-carvil-blue-600" />
  }, {
    title: "Sistemas CRM",
    description: "Mejoran la relación con el cliente y optimizan el proceso de ventas.",
    icon: <Users className="w-8 h-8 text-carvil-blue-600" />
  }, {
    title: "Gestión de Contenidos Web",
    description: "Publicación y control de contenido en sitios y portales corporativos.",
    icon: <Globe className="w-8 h-8 text-carvil-blue-600" />
  }, {
    title: "Soluciones Multicanal",
    description: "Servicios digitales integrados para web, aplicaciones móviles y múltiples dispositivos.",
    icon: <Smartphone className="w-8 h-8 text-carvil-blue-600" />
  }, {
    title: "Infraestructura Tecnológica",
    description: "Mejora y optimización de redes, servidores y sistemas de almacenamiento.",
    icon: <Code className="w-8 h-8 text-carvil-blue-600" />
  }];
  const partialSolutions = [{
    title: "Aplicaciones Móviles y Web",
    description: "Desarrollo de aplicaciones funcionales, intuitivas y adaptadas a múltiples dispositivos.",
    icon: <Smartphone className="w-8 h-8 text-carvil-blue-600" />
  }, {
    title: "Herramientas de Automatización",
    description: "Optimización de procesos mediante automatización inteligente de tareas repetitivas.",
    icon: <Bot className="w-8 h-8 text-carvil-blue-600" />
  }, {
    title: "Plataformas de Comunicación",
    description: "Sistemas integrados de e-mail, mensajería y videollamadas corporativas.",
    icon: <MessageSquare className="w-8 h-8 text-carvil-blue-600" />
  }, {
    title: "Seguridad Informática",
    description: "Protección avanzada contra amenazas y ataques cibernéticos para tu empresa.",
    icon: <Shield className="w-8 h-8 text-carvil-blue-600" />
  }, {
    title: "Sistemas de Análisis de Datos",
    description: "Visualización e inteligencia de datos para la toma de decisiones estratégicas.",
    icon: <BarChart3 className="w-8 h-8 text-carvil-blue-600" />
  }, {
    title: "Aplicaciones Móviles",
    description: "Servicios personalizados accesibles desde cualquier dispositivo móvil.",
    icon: <Smartphone className="w-8 h-8 text-carvil-blue-600" />
  }, {
    title: "Análisis de Datos",
    description: "Herramientas para tomar decisiones basadas en información real.",
    icon: <BarChart3 className="w-8 h-8 text-carvil-blue-600" />
  }, {
    title: "Ciberseguridad",
    description: "Protección integral frente a amenazas digitales y ciberataques.",
    icon: <Shield className="w-8 h-8 text-carvil-blue-600" />
  }, {
    title: "Servicios en la Nube",
    description: "Infraestructura escalable y remota para tu negocio.",
    icon: <Cloud className="w-8 h-8 text-carvil-blue-600" />
  }];
  const emergingTech = [{
    name: "Inteligencia Artificial (IA)",
    icon: <Brain className="w-6 h-6 text-purple-600" />
  }, {
    name: "Internet de las Cosas (IoT)",
    icon: <Link className="w-6 h-6 text-purple-600" />
  }, {
    name: "Blockchain",
    icon: <Blocks className="w-6 h-6 text-purple-600" />
  }, {
    name: "Computación en la Nube",
    icon: <Cloud className="w-6 h-6 text-purple-600" />
  }, {
    name: "Firma Electrónica",
    icon: <FileText className="w-6 h-6 text-purple-600" />
  }];
  return <section id="servicios" className="py-20 bg-white font-corporate">
      <div className="container mx-auto px-4" style={{
      backgroundImage: `url('/lovable-uploads/297899a0-1fd9-4e0d-8c2a-39da1a74f8aa.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
        {/* Overlay para mejorar legibilidad */}
        <div className="relative z-10 backdrop-blur-sm rounded-2xl p-8 bg-transparent">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-corporate">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-corporate">
              Ofrecemos soluciones tecnológicas integrales, desde sistemas empresariales completos hasta 
              herramientas específicas que impulsan la transformación digital de tu negocio.
            </p>
          </div>

          {/* Soluciones Globales */}
          <div className="mb-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-carvil-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Lightbulb className="w-6 h-6 text-carvil-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 font-corporate">Soluciones Globales</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {globalSolutions.map((service, index) => <Card key={index} className="hover:shadow-lg transition-all duration-300 group animate-fade-in">
                  <CardHeader>
                    <div className="mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-corporate text-zinc-50">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 font-corporate">{service.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Soluciones Parciales */}
          <div className="mb-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <Cog className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 font-corporate">Soluciones Parciales</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partialSolutions.map((service, index) => <Card key={index} className="hover:shadow-lg transition-all duration-300 group animate-fade-in">
                  <CardHeader>
                    <div className="mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-corporate text-gray-50">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 font-corporate">{service.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Tecnologías Emergentes */}
          <div className="mb-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 font-corporate">Tecnologías Emergentes</h3>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {emergingTech.map((tech, index) => <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg text-center hover:scale-105 transition-transform animate-fade-in bg-inherit">
                  <div className="mb-3 flex justify-center">{tech.icon}</div>
                  <h4 className="font-semibold text-gray-900 text-sm font-corporate">{tech.name}</h4>
                </div>)}
            </div>
          </div>

          {/* Diseño y Animación */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                <Palette className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 font-corporate">Diseño y Marketing Digital</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <div className="mb-4">
                    <Globe className="w-8 h-8 text-pink-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 font-corporate">Páginas Web Profesionales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-corporate">
                    Diseño y desarrollo de sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <div className="mb-4">
                    <Smartphone className="w-8 h-8 text-pink-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 font-corporate">Contenido Visual y Animaciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-corporate">
                    Creación de anuncios visuales y animaciones para redes sociales enfocadas en aumentar ventas y presencia digital.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;