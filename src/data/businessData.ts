import { BusinessType, ServiceCombo, MaintenancePlan } from '../types';

export const businessTypes: BusinessType[] = [
  {
    id: 'restaurant',
    name: 'Restaurante',
    icon: '🍽️',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
    hasDelivery: true
  },
  {
    id: 'bakery',
    name: 'Pastelería',
    icon: '🎂',
    image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400',
    hasDelivery: true
  },
  {
    id: 'barbershop',
    name: 'Barbería',
    icon: '💈',
    image: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=400',
    hasDelivery: false
  },
  {
    id: 'hardware',
    name: 'Ferretería',
    icon: '🛠️',
    image: 'https://images.pexels.com/photos/162568/tools-construct-craft-repair-162568.jpeg?auto=compress&cs=tinysrgb&w=400',
    hasDelivery: true
  },
  {
    id: 'stationery',
    name: 'Papelería',
    icon: '✏️',
    image: 'https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=400',
    hasDelivery: false
  },
  {
    id: 'clothing',
    name: 'Tienda de Ropa',
    icon: '👕',
    image: 'https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&w=400',
    hasDelivery: false
  }
];

export const serviceCombos: ServiceCombo[] = [
  {
    id: 'delivery-complete',
    name: 'Combo Delivery Completo',
    description: 'Solución integral para negocios con servicio a domicilio',
    features: [
      'Sitio web responsive con menú interactivo',
      'Bot de WhatsApp automático',
      'Sistema de pedidos online',
      'Integración con delivery',
      'Catálogo de productos',
      'Panel de administración',
      '1 mes de mantenimiento gratuito'
    ],
    price: 450000,
    businessTypes: ['restaurant', 'bakery', 'hardware'],
    forDelivery: true,
    mantenimiento: true,
  },
  {
    id: 'digital-showcase',
    name: 'Vitrina Digital Premium',
    description: 'Presencia online profesional para atraer más clientes',
    features: [
      'Sitio web profesional',
      'Catálogo de servicios/productos',
      'Formulario de contacto',
      'Google Maps integrado',
      'Galería de trabajos',
      'Optimización SEO local',
      '1 mes de mantenimiento gratuito',

     ],
    price: 280000,
    businessTypes: ['barbershop', 'stationery', 'clothing'],
    forDelivery: false,
    mantenimiento: true,

  },
  {
    id: 'business-control',
    name: 'Control Empresarial',
    description: 'Sistema de gestión para optimizar tu negocio',
    features: [
      'Sistema de facturación',
      'Control de inventario',
      'Reportes de ventas',
      'CRM básico de clientes',
      'Análisis de rentabilidad',
      'Backup automático',
      '1 mes de mantenimiento gratuito',
      
    ],
    price: 380000,
    businessTypes: ['restaurant', 'bakery', 'hardware', 'stationery', 'clothing'],
    forDelivery: true,
    mantenimiento: true,

  },
  {
    id: 'social-presence',
    name: 'Presencia Social',
    description: 'Gestión profesional de redes sociales',
    features: [
      'Diseño de redes sociales',
      'Creación de contenido',
      'Programación de posts',
      'Interacción con clientes',
      'Reportes de engagement',
      'Estrategia digital',
    ],
    price: 320000,
    businessTypes: ['barbershop', 'bakery', 'clothing'],
    forDelivery: false,
    mantenimiento: false,

  }
];

export const maintenancePlans: MaintenancePlan[] = [
  {
    id: 'basic',
    name: 'Básico',
    price: 30000,
    features: [
      'Soporte técnico',
      'Cambios menores',
      'Actualizaciones de seguridad',
      'Backup mensual'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 50000,
    features: [
      'Todo lo del plan Básico',
      'Hosting incluido',
      'Reportes de mejora',
      'Optimización mensual',
      'Soporte prioritario'    ],
    highlight: true
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 80000,
    features: [
      'Todo lo del plan Pro',
      'Rediseño anual',
      'Ajustes estratégicos',
      'Consultoría digital',
      'Análisis de competencia',
      'Soporte 24/7'    ]
  }
];