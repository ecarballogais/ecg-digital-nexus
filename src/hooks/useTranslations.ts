
import { useTheme } from '@/contexts/ThemeContext';

const translations = {
  es: {
    // Header
    inicio: 'Inicio',
    servicios: 'Servicios',
    proyectos: 'Proyectos',
    nosotros: 'Nosotros',
    contacto: 'Contacto',
    cotizarProyecto: 'Cotizar Proyecto',
    
    // Contact Form
    contactoTitle: 'Contacto',
    contactoSubtitle: '¿Listo para transformar tu negocio? Contáctanos y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.',
    solicitudCotizacion: 'Solicita tu Cotización',
    nombreCompleto: 'Nombre Completo',
    email: 'Email',
    empresa: 'Empresa',
    telefono: 'Teléfono',
    servicioInteres: 'Servicio de Interés',
    mensaje: 'Mensaje',
    mensajePlaceholder: 'Cuéntanos sobre tu proyecto o necesidades...',
    enviarSolicitud: 'Enviar Solicitud a edu@ecarballogais.es',
    
    // Contact Info
    horarios: 'Horarios',
    horariosInfo: 'Lun - Vie: 9:00 - 18:00',
    soporteInfo: 'Soporte 24/7 disponible',
    oficina: 'Oficina',
    siguenos: 'Síguenos',
    
    // Services Options
    seleccionaServicio: 'Selecciona un servicio',
    sistemaERP: 'Sistema ERP',
    desarrolloWeb: 'Desarrollo Web',
    aplicacionMovil: 'Aplicación Móvil',
    automatizacion: 'Automatización',
    seguridadInformatica: 'Seguridad Informática',
    infraestructuraCloud: 'Infraestructura Cloud',
    analisisDatos: 'Análisis de Datos',
    otro: 'Otro',
    
    // Toast Messages
    mensajeEnviado: '¡Mensaje enviado!',
    mensajeEnviadoDesc: 'Se ha abierto tu cliente de correo para enviar la consulta.',
    
    // Theme & Language
    temaClaro: 'Whiteness',
    temaOscuro: 'Darkness'
  },
  en: {
    // Header
    inicio: 'Home',
    servicios: 'Services',
    proyectos: 'Projects',
    nosotros: 'About Us',
    contacto: 'Contact',
    cotizarProyecto: 'Quote Project',
    
    // Contact Form
    contactoTitle: 'Contact',
    contactoSubtitle: 'Ready to transform your business? Contact us and discover how we can help you achieve your digital goals.',
    solicitudCotizacion: 'Request Your Quote',
    nombreCompleto: 'Full Name',
    email: 'Email',
    empresa: 'Company',
    telefono: 'Phone',
    servicioInteres: 'Service of Interest',
    mensaje: 'Message',
    mensajePlaceholder: 'Tell us about your project or needs...',
    enviarSolicitud: 'Send Request to edu@ecarballogais.es',
    
    // Contact Info
    horarios: 'Hours',
    horariosInfo: 'Mon - Fri: 9:00 - 18:00',
    soporteInfo: '24/7 Support available',
    oficina: 'Office',
    siguenos: 'Follow Us',
    
    // Services Options
    seleccionaServicio: 'Select a service',
    sistemaERP: 'ERP System',
    desarrolloWeb: 'Web Development',
    aplicacionMovil: 'Mobile Application',
    automatizacion: 'Automation',
    seguridadInformatica: 'IT Security',
    infraestructuraCloud: 'Cloud Infrastructure',
    analisisDatos: 'Data Analytics',
    otro: 'Other',
    
    // Toast Messages
    mensajeEnviado: 'Message sent!',
    mensajeEnviadoDesc: 'Your email client has been opened to send the inquiry.',
    
    // Theme & Language
    temaClaro: 'Whiteness',
    temaOscuro: 'Darkness'
  }
};

export const useTranslations = () => {
  const { language } = useTheme();
  return translations[language];
};
