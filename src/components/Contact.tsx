import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const {
    toast
  } = useToast();
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
  return <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para transformar tu negocio? Contáctanos y descubre cómo podemos 
            ayudarte a alcanzar tus objetivos digitales.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Solicita tu Cotización</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nombre Completo *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-1" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Servicio de Interés</Label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ecg-blue-500">
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
                  <Label htmlFor="message">Mensaje *</Label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ecg-blue-500 resize-none" placeholder="Cuéntanos sobre tu proyecto o necesidades..." />
                </div>

                <Button type="submit" className="w-full bg-gradient-blue text-white">
                  Enviar Solicitud
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Información de Contacto */}
          <div className="space-y-8 animate-fade-in">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4 bg-slate-50">
                  <div className="w-12 h-12 bg-ecg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-ecg-blue-600 text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-950">Email  
edu@ecarballogais.es</h3>
                    <p className="text-gray-600"></p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-green-600 text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">+1 (555) 636-2655</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-purple-600 text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Oficina</h3>
                    <p className="text-gray-600">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-orange-600 text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Horarios</h3>
                    <p className="text-gray-600">Lun - Vie: 9:00 - 18:00</p>
                    <p className="text-gray-600 text-sm">Soporte 24/7 disponible</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Redes Sociales */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600">📘</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600">💼</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600">📸</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600">🐦</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;