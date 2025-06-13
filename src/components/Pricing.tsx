import React from 'react';
import { maintenancePlans } from '../data/businessData';
import { Check, Crown, Shield, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const generateWhatsAppMessage = (plan: any) => {
    const message = `Hola! Me interesa el plan de mantenimiento ${plan.name} de $${plan.price.toLocaleString()} mensuales. ¿Podrías darme más información?`;
    return `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
  };

  const getPlanIcon = (planId: string) => {
    switch (planId) {
      case 'basic':
        return <Shield className="w-6 h-6" />;
      case 'pro':
        return <Zap className="w-6 h-6" />;
      case 'premium':
        return <Crown className="w-6 h-6" />;
      default:
        return <Shield className="w-6 h-6" />;
    }
  };

  const getPlanColor = (planId: string) => {
    switch (planId) {
      case 'basic':
        return 'from-gray-600 to-gray-700';
      case 'pro':
        return 'from-blue-500 to-cyan-400';
      case 'premium':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-gray-600 to-gray-700';
    }
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Precios transparentes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Soluciones digitales con precios únicos y planes de mantenimiento flexibles
          </p>
          
          {/* Price highlights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-6">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
                Desde $280.000
              </div>
              <div className="text-white font-semibold mb-1">Soluciones completas</div>
              <div className="text-gray-300 text-sm">Pago único, sin mensualidades ocultas</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-2">
                100% ROI
              </div>
              <div className="text-white font-semibold mb-1">Retorno garantizado</div>
              <div className="text-gray-300 text-sm">O devolvemos tu dinero en 60 días</div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-6">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300 mb-2">
                7 días
              </div>
              <div className="text-white font-semibold mb-1">Tiempo de entrega</div>
              <div className="text-gray-300 text-sm">Tu negocio online en una semana</div>
            </div>
          </div>
        </div>

        {/* Maintenance Plans */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Planes de mantenimiento mensual
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Mantén tu solución digital siempre actualizada y funcionando perfectamente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {maintenancePlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl transform hover:scale-105 ${
                  plan.highlight
                    ? 'border-blue-500 shadow-xl shadow-blue-500/20 ring-2 ring-blue-500/20'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Más Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${getPlanColor(plan.id)} mb-4`}>
                    {getPlanIcon(plan.id)}
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                      ${plan.price.toLocaleString()}
                    </span>
                    <span className="text-gray-400 ml-2">/mes</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={generateWhatsAppMessage(plan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white shadow-blue-500/25'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  <span className="mr-2">💬</span>
                  Elegir plan {plan.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Value proposition */}
        <div className="text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Por qué elegir nuestros servicios?
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-white font-semibold mb-1">Entrega rápida</div>
              <div className="text-gray-400 text-sm">7 días promedio</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">💰</div>
              <div className="text-white font-semibold mb-1">Sin sorpresas</div>
              <div className="text-gray-400 text-sm">Precio fijo, sin extras</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">🔧</div>
              <div className="text-white font-semibold mb-1">Soporte incluido</div>
              <div className="text-gray-400 text-sm">Te ayudamos siempre</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">📈</div>
              <div className="text-white font-semibold mb-1">Resultados reales</div>
              <div className="text-gray-400 text-sm">Más ventas garantizadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;