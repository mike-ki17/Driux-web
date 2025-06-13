import React, { useState } from 'react';
import { ExternalLink, Monitor, Smartphone, Tablet } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  businessType: string;
  description: string;
  image: string;
  category: 'restaurant' | 'barbershop' | 'store' | 'bakery';
  features: string[];
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDevice, setSelectedDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'La Parrilla Gourmet',
      businessType: 'Restaurante',
      description: 'Menú digital con sistema de pedidos integrado',
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'restaurant',
      features: ['Menú interactivo', 'Pedidos WhatsApp', 'Promociones automáticas']
    },
    {
      id: '2',
      title: 'Dulce Tentación',
      businessType: 'Pastelería',
      description: 'Catálogo de productos con sistema de reservas',
      image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'bakery',
      features: ['Galería de productos', 'Reservas online', 'Catálogo digital']
    },
    {
      id: '3',
      title: 'Estilo & Corte',
      businessType: 'Barbería',
      description: 'Sitio web con sistema de citas y galería de trabajos',
      image: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'barbershop',
      features: ['Reserva de citas', 'Galería de trabajos', 'Información de servicios']
    },
    {
      id: '4',
      title: 'Moda Urbana',
      businessType: 'Tienda de Ropa',
      description: 'E-commerce con catálogo de productos',
      image: 'https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'store',
      features: ['Catálogo online', 'WhatsApp Business', 'Promociones']
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos', icon: '🏪' },
    { id: 'restaurant', name: 'Restaurantes', icon: '🍽️' },
    { id: 'bakery', name: 'Pastelerías', icon: '🎂' },
    { id: 'barbershop', name: 'Barberías', icon: '💈' },
    { id: 'store', name: 'Tiendas', icon: '🛍️' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const deviceIcons = {
    desktop: <Monitor className="w-4 h-4" />,
    tablet: <Tablet className="w-4 h-4" />,
    mobile: <Smartphone className="w-4 h-4" />
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Galería de proyectos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conoce algunos de los negocios que ya han digitalizado su presencia y aumentado sus ventas
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Device Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 p-1 rounded-xl border border-gray-700">
            {Object.entries(deviceIcons).map(([device, icon]) => (
              <button
                key={device}
                onClick={() => setSelectedDevice(device as any)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                  selectedDevice === device
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {icon}
                <span className="ml-2 capitalize">{device}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Device Frame */}
              <div className="p-6">
                <div className={`relative mx-auto transition-all duration-300 ${
                  selectedDevice === 'desktop' ? 'max-w-full' :
                  selectedDevice === 'tablet' ? 'max-w-md' : 'max-w-xs'
                }`}>
                  {/* Device Bezel */}
                  <div className={`bg-gray-900 rounded-lg p-2 ${
                    selectedDevice === 'mobile' ? 'rounded-3xl' : 'rounded-lg'
                  }`}>
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full rounded object-cover transition-transform duration-300 group-hover:scale-105 ${
                          selectedDevice === 'desktop' ? 'h-48' :
                          selectedDevice === 'tablet' ? 'h-56' : 'h-64'
                        }`}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <button className="w-full bg-white/20 backdrop-blur-sm text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/30 flex items-center justify-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Ver proyecto
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="px-6 pb-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-blue-400 text-sm font-medium mb-2">{item.businessType}</p>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/573001234567?text=${encodeURIComponent(`Hola! Me gustó el proyecto de ${item.title}. ¿Podrías crear algo similar para mi negocio?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                >
                  <span className="mr-2">💬</span>
                  Solicitar proyecto similar
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
              50+
            </div>
            <div className="text-gray-300 text-sm">Proyectos completados</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-2">
              98%
            </div>
            <div className="text-gray-300 text-sm">Clientes satisfechos</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300 mb-2">
              150%
            </div>
            <div className="text-gray-300 text-sm">Aumento promedio en ventas</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-2">
              7
            </div>
            <div className="text-gray-300 text-sm">Días promedio de entrega</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;