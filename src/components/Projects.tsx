import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Sistema ERP Retail",
      category: "Solución Global",
      description: "Implementación completa de sistema ERP para cadena de tiendas con 15 sucursales, integrando inventarios, ventas, finanzas y RRHH.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    }, {
      title: "App Móvil Logística",
      category: "Aplicación Móvil",
      description: "Aplicación móvil para gestión de entregas en tiempo real con geolocalización y notificaciones push.",
      tech: ["React Native", "Firebase", "Google Maps API"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    }, {
      title: "Plataforma E-learning",
      category: "Desarrollo Web",
      description: "Portal educativo con sistema de videoconferencias, evaluaciones automáticas y seguimiento de progreso.",
      tech: ["Vue.js", "WebRTC", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
    }, {
      title: "Dashboard Analytics",
      category: "Inteligencia de Datos",
      description: "Sistema de análisis de datos con visualizaciones interactivas para toma de decisiones empresariales.",
      tech: ["D3.js", "Python", "FastAPI", "Redis"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    }, {
      title: "Infraestructura Cloud",
      category: "Solución de Infraestructura",
      description: "Migración completa a la nube con alta disponibilidad, escalabilidad automática y respaldo automatizado.",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
    }, {
      title: "Sistema de Seguridad",
      category: "Ciberseguridad",
      description: "Implementación de sistema de seguridad multicapa con autenticación biométrica y monitoreo 24/7.",
      tech: ["Blockchain", "Biometrics API", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section 
      id="proyectos" 
      className="py-20 font-corporate relative"
      style={{
        backgroundImage: `url('/lovable-uploads/badb450a-4b30-45ba-a43a-3a59109b054f.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-slate-950/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-corporate">Nuestros Proyectos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-corporate">
            Descubre algunos de los proyectos que hemos desarrollado para empresas de diferentes sectores, 
            transformando sus procesos y potenciando su crecimiento digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-in">
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-carvil-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium font-corporate">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-carvil-blue-600 transition-colors font-corporate text-zinc-50">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed font-corporate">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium font-corporate">
                      {tech}
                    </span>)}
                </div>
                
                <Button variant="outline" className="w-full border-carvil-blue-600 text-carvil-blue-600 hover:bg-carvil-blue-50 font-corporate">
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-carvil text-white px-8 py-3 font-corporate">
            Ver Todos los Proyectos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
