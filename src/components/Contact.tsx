
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle, MapPin, Clock, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envío del formulario
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto."
    });
    
    // Limpiar formulario
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <section id="contacto" className="py-20 bg-gray-50 font-corporate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-corporate">Contacto</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-corporate">
            ¿Listo para transformar tu negocio? Contáctanos y descubre cómo podemos 
            ayudarte a alcanzar tus objetivos digitales.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 font-corporate">Solicita tu Cotización</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="font-corporate">Nombre Completo *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="mt-1 font-corporate" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-corporate">Email *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="mt-1 font-corporate" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="font-corporate">Empresa</Label>
                    <Input 
                      id="company" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      className="mt-1 font-corporate" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-corporate">Teléfono</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="mt-1 font-corporate" 
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service" className="font-corporate">Servicio de Interés</Label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service} 
                    onChange={handleChange} 
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-carvil-blue-500 font-corporate"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="erp">Sistema ERP</option>
                    <option value="web">Desarrollo Web</option>
                    <option value="mobile">Aplicación Móvil</option>
                    <option value="automation">Automatización</option>
                    <option value="security">Seguridad Informática</option>
                    <option value="cloud">Infraestructura Cloud</option>
                    <option value="analytics">Análisis de Datos</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="font-corporate">Mensaje *</Label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows={4} 
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-carvil-blue-500 resize-none font-corporate" 
                    placeholder="Cuéntanos sobre tu proyecto o necesidades..." 
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-carvil text-white font-corporate">
                  Enviar Solicitud
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Información de Contacto */}
          <div className="space-y-8 animate-fade-in">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-carvil-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-carvil-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-corporate">Email</h3>
                    <p className="text-gray-600 font-corporate">edu@ecarballogais.es</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-corporate">WhatsApp</h3>
                    <p className="text-gray-600 font-corporate">+54 260 400 6416</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-corporate">Oficina</h3>
                    <p className="text-gray-600 font-corporate">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-corporate">Horarios</h3>
                    <p className="text-gray-600 font-corporate">Lun - Vie: 9:00 - 18:00</p>
                    <p className="text-gray-600 text-sm font-corporate">Soporte 24/7 disponible</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Redes Sociales */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4 font-corporate">Síguenos</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61577767590965" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-blue-600" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/carvil-s-a-s-technology-solutions-585426372/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </a>
                  <a 
                    href="https://www.instagram.com/carvilsas/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-blue-600" />
                  </a>
                  <a 
                    href="https://x.com/carvilsas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-blue-600" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
