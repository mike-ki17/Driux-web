import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Truck, Store, BarChart3, Users } from 'lucide-react';

interface ComparisonSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  services: {
    name: string;
    description: string;
    features: string[];
    price: string;
  }[];
}

const ServiceComparison: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>('delivery');

  const sections: ComparisonSection[] = [
    {
      id: 'delivery',
      title: '¿Tu negocio hace domicilios?',
      icon: <Truck className="w-6 h-6" />,
      description: 'Soluciones optimizadas para negocios con servicio a domicilio',
      services: [
        {
          name: 'WhatsApp Business Automatizado',
          description: 'Bot inteligente que gestiona pedidos automáticamente',
          features: ['Catálogo automático', 'Confirmación de pedidos', 'Seguimiento de entrega', 'Recordatorios'],
          price: 'Desde $180.000'
        },
        {
          name: 'Menú Digital Interactivo',
          description: 'Carta digital moderna con sistema de pedidos',
          features: ['Diseño responsive', 'Categorización inteligente', 'Promociones automáticas', 'Integración con WhatsApp'],
          price: 'Desde $220.000'
        },
        {
          name: 'Sistema de Delivery Completo',
          description: 'Plataforma integral para gestionar todo tu servicio a domicilio',
          features: ['Panel de administración', 'Gestión de repartidores', 'Reportes de ventas', 'App móvil'],
          price: 'Desde $450.000'
        }
      ]
    },
    {
      id: 'physical',
      title: '¿Solo atiendes en local físico?',
      icon: <Store className="w-6 h-6" />,
      description: 'Herramientas para atraer más clientes a tu establecimiento',
      services: [
        {
          name: 'Vitrina Digital Profesional',
          description: 'Sitio web que muestra tus servicios y atrae clientes',
          features: ['Galería de trabajos', 'Información de contacto', 'Google Maps integrado', 'Horarios de atención'],
          price: 'Desde $280.000'
        },
        {
          name: 'Catálogo de Servicios',
          description: 'Muestra todos tus productos o servicios de forma atractiva',
          features: ['Categorización por tipo', 'Precios actualizables', 'Descripciomes detalladas', 'Imágenes HD'],
          price: 'Desde $320.000'
        },
        {
          name: 'Reservas Online',
          description: 'Sistema para que tus clientes reserven citas o servicios',
          features: ['Calendario integrado', 'Confirmación automática', 'Recordatorios SMS', 'Panel de gestión'],
          price: 'Desde $380.000'
        }
      ]
    },
    {
      id: 'control',
      title: '¿Necesitas control y reportes?',
      icon: <BarChart3 className="w-6 h-6" />,
      description: 'Sistemas de gestión para optimizar tu negocio',
      services: [
        {
          name: 'Sistema de Facturación',
          description: 'Genera facturas profesionales y lleva control tributario',
          features: ['Facturación electrónica', 'Control de impuestos', 'Historial de ventas', 'Reportes DIAN'],
          price: 'Desde $250.000'
        },
        {
          name: 'Control de Inventario',
          description: 'Gestiona tu stock y evita quedarte sin productos',
          features: ['Alertas de stock bajo', 'Rotación de productos', 'Proveedores', 'Códigos de barra'],
          price: 'Desde $300.000'
        },
        {
          name: 'CRM + Reportes',
          description: 'Gestiona clientes y analiza el rendimiento de tu negocio',
          features: ['Base de datos de clientes', 'Análisis de ventas', 'Productos más vendidos', 'Proyecciones'],
          price: 'Desde $380.000'
        }
      ]
    },
    {
      id: 'marketing',
      title: '¿Quieres más clientes?',
      icon: <Users className="w-6 h-6" />,
      description: 'Estrategias digitales para hacer crecer tu negocio',
      services: [
        {
          name: 'Redes Sociales Profesionales',
          description: 'Gestión completa de tus redes sociales',
          features: ['Diseño de perfiles', 'Contenido programado', 'Interacción con clientes', 'Reportes de engagement'],
          price: 'Desde $320.000'
        },
        {
          name: 'Google My Business Optimizado',
          description: 'Aparece primero en búsquedas locales de Google',
          features: ['Optimización SEO local', 'Gestión de reseñas', 'Posts regulares', 'Estadísticas detalladas'],
          price: 'Desde $180.000'
        },
        {
          name: 'Publicidad Digital',
          description: 'Campañas en Facebook e Instagram para atraer clientes',
          features: ['Segmentación precisa', 'Creativos profesionales', 'Optimización diaria', 'Reportes de ROI'],
          price: 'Desde $400.000'
        }
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Encuentra la solución perfecta
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Responde estas preguntas y descubre qué servicios digitales necesita tu negocio
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-blue-500/50"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/70 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-3 rounded-xl mr-4">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{section.title}</h3>
                    <p className="text-gray-400">{section.description}</p>
                  </div>
                </div>
                {activeSection === section.id ? (
                  <ChevronUp className="w-6 h-6 text-blue-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>

              {activeSection === section.id && (
                <div className="px-6 pb-6 animate-fadeIn">
                  <div className="grid md:grid-cols-3 gap-6">
                    {section.services.map((service, index) => (
                      <div
                        key={index}
                        className="bg-gray-900/50 rounded-xl p-6 border border-gray-600 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg"
                      >
                        <div className="mb-4">
                          <h4 className="text-lg font-bold text-white mb-2">{service.name}</h4>
                          <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                            {service.price}
                          </div>
                        </div>

                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <a
                          href={`https://wa.me/573001234567?text=${encodeURIComponent(`Hola! Me interesa el servicio de ${service.name}. ¿Podrías darme más información?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                        >
                          <span className="mr-1">💬</span>
                          Consultar
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;