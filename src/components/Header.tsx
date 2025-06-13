import React from 'react';
import { Zap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative container mx-auto px-6 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center mb-8">
            {/* <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-3 rounded-2xl mr-4">
              <Globe className="w-8 h-8 text-white" />
            </div> */}
            {/* <h1 className="text-4xl lg:text-5xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-5xl">Driux</span>
            </h1> */}
            <img src="../../../public/logotipo.png" alt="Driux" />
          </div>
          
          {/* Main Hook */}
          <h2 className="text-3xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Digitaliza tu negocio local y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse">
              vende más
            </span>{' '}
            desde hoy
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Soluciones digitales completas diseñadas específicamente para pequeños y medianos negocios. 
            Aumenta tus ventas con tecnología que realmente funciona.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Ver Soluciones
              </div>
            </button>
            
            <a 
              href="https://wa.me/573001234567?text=Hola! Me interesa digitalizar mi negocio con Web Local Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
            >
              <div className="flex items-center">
                <span className="mr-2">📱</span>
                Consulta Gratis
              </div>
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              +50 negocios digitalizados
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              Soporte 24/7
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
              Resultados garantizados
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;