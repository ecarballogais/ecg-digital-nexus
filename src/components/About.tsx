import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
const About = () => {
  const values = [{
    title: "Innovación",
    description: "Implementamos las últimas tecnologías para mantener a nuestros clientes a la vanguardia.",
    icon: "💡"
  }, {
    title: "Calidad",
    description: "Desarrollamos soluciones robustas y confiables que superan las expectativas.",
    icon: "⭐"
  }, {
    title: "Adaptabilidad",
    description: "Nos ajustamos a las necesidades específicas de cada cliente y sector.",
    icon: "🔄"
  }, {
    title: "Soporte 24/7",
    description: "Brindamos acompañamiento continuo para garantizar el éxito de tu proyecto.",
    icon: "🛡️"
  }];
  const team = [{
    name: "Ana García",
    role: "CEO & Fundadora",
    experience: "10+ años en transformación digital",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  }, {
    name: "Carlos Mendoza",
    role: "CTO",
    experience: "Especialista en arquitectura de software",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }, {
    name: "María Rodríguez",
    role: "Directora de Proyectos",
    experience: "Experta en metodologías ágiles",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }, {
    name: "Diego Fernández",
    role: "Lead Developer",
    experience: "Desarrollador Full Stack Senior",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }];
  return <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre CARVIL Solutions Tecnolology</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Somos una empresa comprometida con la excelencia tecnológica, dedicada a transformar negocios a través de soluciones digitales innovadoras y personalizadas, guiadas por IA.</p>
        </div>

        {/* Historia y Misión */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900">Nuestra Historia</h3>
            <p className="text-gray-600 leading-relaxed text-base font-normal">Fundada con la visión de democratizar el acceso a tecnologías avanzadas, CARVIL S.A.S. Technology Solutions ha sido concebido con el fin de Impulsar cada decisión en tu industria con el poder de la IA automatizar agilmente en transformación digital empresarial.</p>
            <p className="text-gray-600 leading-relaxed">
              Durante más de 5 años, hemos ayudado a empresas de todos los tamaños a optimizar sus procesos, 
              mejorar su eficiencia y alcanzar sus objetivos de crecimiento a través de la tecnología.
            </p>
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900">Nuestra Misión</h3>
            <p className="text-gray-600 leading-relaxed">
              Empoderar a las empresas con soluciones tecnológicas integrales que impulsen su competitividad 
              y crecimiento sostenible en la era digital.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8">Nuestra Visión</h3>
            <p className="text-gray-600 leading-relaxed">Ser la empresa líder en soluciones tecnológicas innovadoras, reconocida por nuestra excelencia, confiabilidad y capacidad de adaptación a las necesidades cambiantes del mercado Latinoamericano </p>
          </div>
        </div>

        {/* Valores */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestros Valores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group animate-fade-in">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Equipo */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestro Equipo</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group animate-fade-in">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-ecg-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mt-20 bg-gradient-blue rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;