
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle, MapPin, Clock, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';

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
  const t = useTranslations();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crear enlace de mailto con los datos del formulario
    const subject = `Consulta de ${formData.name} - ${formData.service || 'Servicio General'}`;
    const body = `
Nombre: ${formData.name}
Email: ${formData.email}
Empresa: ${formData.company}
Teléfono: ${formData.phone}
Servicio de interés: ${formData.service}

Mensaje:
${formData.message}
    `;
    
    const mailtoLink = `mailto:edu@ecarballogais.es?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
    
    toast({
      title: t.mensajeEnviado,
      description: t.mensajeEnviadoDesc
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
    <section id="contacto" className="py-20 bg-gray-50 font-corporate dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-corporate dark:text-white">{t.contactoTitle}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-corporate dark:text-gray-300">
            {t.contactoSubtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <Card className="animate-fade-in dark:bg-gray-700 dark:border-gray-600">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 font-corporate dark:text-white">{t.solicitudCotizacion}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="font-corporate dark:text-gray-200">{t.nombreCompleto} *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="mt-1 font-corporate dark:bg-gray-600 dark:border-gray-500 dark:text-white" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-corporate dark:text-gray-200">{t.email} *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="mt-1 font-corporate dark:bg-gray-600 dark:border-gray-500 dark:text-white" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="font-corporate dark:text-gray-200">{t.empresa}</Label>
                    <Input 
                      id="company" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      className="mt-1 font-corporate dark:bg-gray-600 dark:border-gray-500 dark:text-white" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-corporate dark:text-gray-200">{t.telefono}</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="mt-1 font-corporate dark:bg-gray-600 dark:border-gray-500 dark:text-white" 
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service" className="font-corporate dark:text-gray-200">{t.servicioInteres}</Label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service} 
                    onChange={handleChange} 
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-carvil-blue-500 font-corporate dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  >
                    <option value="">{t.seleccionaServicio}</option>
                    <option value="erp">{t.sistemaERP}</option>
                    <option value="web">{t.desarrolloWeb}</option>
                    <option value="mobile">{t.aplicacionMovil}</option>
                    <option value="automation">{t.automatizacion}</option>
                    <option value="security">{t.seguridadInformatica}</option>
                    <option value="cloud">{t.infraestructuraCloud}</option>
                    <option value="analytics">{t.analisisDatos}</option>
                    <option value="other">{t.otro}</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="font-corporate dark:text-gray-200">{t.mensaje} *</Label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows={4} 
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-carvil-blue-500 resize-none font-corporate dark:bg-gray-600 dark:border-gray-500 dark:text-white" 
                    placeholder={t.mensajePlaceholder} 
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-carvil text-white font-corporate">
                  {t.enviarSolicitud}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Información de Contacto */}
          <div className="space-y-8 animate-fade-in">
            <Card className="dark:bg-gray-700 dark:border-gray-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-carvil-blue-100 rounded-lg flex items-center justify-center mr-4 dark:bg-carvil-blue-800">
                    <Mail className="w-6 h-6 text-carvil-blue-600 dark:text-carvil-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-corporate dark:text-white">{t.email}</h3>
                    <p className="text-gray-600 font-corporate dark:text-gray-300">edu@ecarballogais.es</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-700 dark:border-gray-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 dark:bg-green-800">
                    <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-corporate dark:text-white">WhatsApp</h3>
                    <p className="text-gray-600 font-corporate dark:text-gray-300">+54 260 400 6416</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-700 dark:border-gray-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 dark:bg-purple-800">
                    <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-corporate dark:text-white">{t.oficina}</h3>
                    <p className="text-gray-600 font-corporate dark:text-gray-300">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-700 dark:border-gray-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 dark:bg-orange-800">
                    <Clock className="w-6 h-6 text-orange-600 dark:text-orange-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-corporate dark:text-white">{t.horarios}</h3>
                    <p className="text-gray-600 font-corporate dark:text-gray-300">{t.horariosInfo}</p>
                    <p className="text-gray-600 text-sm font-corporate dark:text-gray-300">{t.soporteInfo}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Redes Sociales */}
            <Card className="dark:bg-gray-700 dark:border-gray-600">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4 font-corporate dark:text-white">{t.siguenos}</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61577767590965" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors dark:bg-blue-800 dark:hover:bg-blue-700"
                  >
                    <Facebook className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/carvil-s-a-s-technology-solutions-585426372/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors dark:bg-blue-800 dark:hover:bg-blue-700"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                  </a>
                  <a 
                    href="https://www.instagram.com/carvilsas/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors dark:bg-blue-800 dark:hover:bg-blue-700"
                  >
                    <Instagram className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                  </a>
                  <a 
                    href="https://x.com/carvilsas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors dark:bg-blue-800 dark:hover:bg-blue-700"
                  >
                    <Twitter className="w-5 h-5 text-blue-600 dark:text-blue-300" />
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
