import React, { useState } from 'react';
import { businessTypes, serviceCombos } from '../data/businessData';
import { BusinessType, ServiceCombo } from '../types';
import { ArrowRight, Check, Star } from 'lucide-react';

interface BusinessTypesProps {
  onBusinessSelect: (businessId: string) => void;
  selectedBusiness: string | null;
}

const BusinessTypes: React.FC<BusinessTypesProps> = ({ onBusinessSelect, selectedBusiness }) => {
  const [selectedCombos, setSelectedCombos] = useState<ServiceCombo[]>([]);

  const handleBusinessClick = (businessId: string) => {
    onBusinessSelect(businessId);
    const business = businessTypes.find(b => b.id === businessId);
    if (business) {
      const relevantCombos = serviceCombos.filter(combo => 
        combo.businessTypes.includes(businessId)
      );
      setSelectedCombos(relevantCombos);
    }
  };

  const generateWhatsAppMessage = (combo: ServiceCombo) => {
    const businessName = businessTypes.find(b => b.id === selectedBusiness)?.name || 'mi negocio';
    const message = `Hola! Me interesa el ${combo.name} para ${businessName}. ¿Podrías darme más información sobre este combo de $${combo.price.toLocaleString()}?`;
    return `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Qué tipo de negocio tienes?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Selecciona tu tipo de negocio y descubre las soluciones digitales diseñadas específicamente para ti
          </p>
        </div>

        {/* Business Type Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {businessTypes.map((business) => (
            <button
              key={business.id}
              onClick={() => handleBusinessClick(business.id)}
              className={`group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 transform hover:scale-105 ${
                selectedBusiness === business.id
                  ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-400 shadow-2xl shadow-blue-500/25'
                  : 'bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700'
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundImage: `url(${business.image})` }}
              ></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-3">{business.icon}</div>
                <h3 className="text-white font-semibold text-sm lg:text-base">
                  {business.name}
                </h3>
                
                {selectedBusiness === business.id && (
                  <div className="mt-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mx-auto animate-pulse"></div>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Service Combos Display */}
        {selectedCombos.length > 0 && (
          <div className="animate-fadeIn">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Soluciones perfectas para tu {businessTypes.find(b => b.id === selectedBusiness)?.name}
              </h3>
              <p className="text-gray-300">
                Combos diseñados específicamente para maximizar el potencial de tu negocio
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {selectedCombos.map((combo) => (
                <div
                  key={combo.id}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">{combo.name}</h4>
                      <p className="text-gray-300 mb-4">{combo.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                        ${combo.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">Pago único</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h5 className="text-white font-semibold mb-4 flex items-center">
                      <Star className="w-4 h-4 mr-2 text-blue-400" />
                      Incluye:
                    </h5>
                    <ul className="space-y-2">
                      {combo.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <Check className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={generateWhatsAppMessage(combo)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 flex items-center justify-center"
                  >
                    <span className="mr-2">💬</span>
                    Solicitar este combo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BusinessTypes;