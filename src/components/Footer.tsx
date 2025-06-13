import React from 'react';
import { Mail, Phone, MapPin, Clock, Star } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              
              <img src="../../../public/logotipoFooter.png" alt="" />
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Digitalizamos pequeños y medianos negocios locales con soluciones que realmente generan resultados. 
              Tu éxito es nuestro compromiso.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">5.0 de 50+ clientes</span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {[
                'Sitios Web Profesionales',
                'Menús Digitales',
                'Sistemas de Pedidos',
                'WhatsApp Business',
                'Control de Inventario',
                'Facturación Electrónica',
                'Redes Sociales',
                'Google My Business'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Types Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Tipos de Negocio</h4>
            <ul className="space-y-3">
              {[
                '🍽️ Restaurantes',
                '🎂 Pastelerías',
                '💈 Barberías',
                '🛠️ Ferreterías',
                '✏️ Papelerías',
                '👕 Tiendas de Ropa',
                '🏪 Comercios Locales',
                '🏥 Consultorios'
              ].map((business, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {business}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3 text-green-400" />
                <a href="https://wa.me/573001234567" className="hover:text-green-400 transition-colors duration-200">
                  +57 300 123 4567
                </a>
              </li>
              
              <li className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <a href="mailto:info@weblocalpro.com" className="hover:text-blue-400 transition-colors duration-200">
                  info@weblocalpro.com
                </a>
              </li>
              
              <li className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-3 text-red-400 mt-0.5" />
                <span className="text-sm">
                  Colombia<br />
                  Servicio en todo el país
                </span>
              </li>
              
              <li className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-3 text-yellow-400" />
                <span className="text-sm">
                  Lun - Vie: 8:00 AM - 6:00 PM<br />
                  Sáb: 9:00 AM - 2:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-1">
                50+
              </div>
              <div className="text-gray-400 text-sm">Proyectos completados</div>
            </div>
            
            <div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-1">
                150%
              </div>
              <div className="text-gray-400 text-sm">Aumento en ventas</div>
            </div>
            
            <div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300 mb-1">
                7 días
              </div>
              <div className="text-gray-400 text-sm">Tiempo de entrega</div>
            </div>
            
            <div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-1">
                24/7
              </div>
              <div className="text-gray-400 text-sm">Soporte disponible</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 mb-8 text-center">
          <h4 className="text-2xl font-bold text-white mb-4">
            ¿Listo para digitalizar tu negocio?
          </h4>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Únete a los más de 50 negocios que ya aumentaron sus ventas con nuestras soluciones digitales
          </p>
          <a
            href="https://wa.me/573001234567?text=Hola! Quiero digitalizar mi negocio con Web Local Pro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <span className="mr-2">💬</span>
            Comenzar ahora - Gratis
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Driux. Todos los derechos reservados.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Términos de Servicio
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Soporte
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;