import React, { useState } from 'react';
import { businessTypes, serviceCombos } from '../data/businessData';
import { Send, CheckCircle } from 'lucide-react';
import { ContactForm as ContactFormType } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormType>({
    businessName: '',
    businessType: '',
    interestedCombo: '',
    whatsappNumber: '',
    comments: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateWhatsAppMessage = () => {
    const selectedBusiness = businessTypes.find(b => b.id === formData.businessType);
    const selectedCombo = serviceCombos.find(c => c.id === formData.interestedCombo);
    
    let message = `Hola! Soy ${formData.businessName || '[Nombre del negocio]'}.`;
    
    if (selectedBusiness) {
      message += ` Tengo un negocio de tipo: ${selectedBusiness.name}.`;
    }
    
    if (selectedCombo) {
      message += ` Me interesa el combo: ${selectedCombo.name} (${selectedCombo.price.toLocaleString()}).`;
    }
    
    if (formData.whatsappNumber) {
      message += ` Mi número de WhatsApp es: ${formData.whatsappNumber}.`;
    }
    
    if (formData.comments) {
      message += ` Comentarios adicionales: ${formData.comments}`;
    }
    
    message += ' ¿Podrías darme más información?';
    
    return message;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        businessName: '',
        businessType: '',
        interestedCombo: '',
        whatsappNumber: '',
        comments: ''
      });
    }, 3000);
  };

  const availableCombos = formData.businessType 
    ? serviceCombos.filter(combo => combo.businessTypes.includes(formData.businessType))
    : serviceCombos;

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-12">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">
                ¡Mensaje enviado!
              </h3>
              <p className="text-gray-300 text-lg">
                Te redirigimos a WhatsApp con tu consulta lista. 
                Te responderemos en menos de 2 horas.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Comienza tu transformación digital
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Completa este formulario y te enviaremos una propuesta personalizada para tu negocio
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Business Name */}
                <div>
                  <label htmlFor="businessName" className="block text-white font-semibold mb-3">
                    Nombre de tu negocio *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
                    placeholder="Ej: La Parrilla del Chef"
                  />
                </div>

                {/* Business Type */}
                <div>
                  <label htmlFor="businessType" className="block text-white font-semibold mb-3">
                    Tipo de negocio *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
                  >
                    <option value="">Selecciona tu tipo de negocio</option>
                    {businessTypes.map((business) => (
                      <option key={business.id} value={business.id}>
                        {business.icon} {business.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Interested Combo */}
                <div>
                  <label htmlFor="interestedCombo" className="block text-white font-semibold mb-3">
                    Combo de interés
                  </label>
                  <select
                    id="interestedCombo"
                    name="interestedCombo"
                    value={formData.interestedCombo}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
                  >
                    <option value="">Selecciona un combo (opcional)</option>
                    {availableCombos.map((combo) => (
                      <option key={combo.id} value={combo.id}>
                        {combo.name} - ${combo.price.toLocaleString()}
                      </option>
                    ))}
                  </select>
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label htmlFor="whatsappNumber" className="block text-white font-semibold mb-3">
                    Número de WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsappNumber"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
                    placeholder="Ej: 3001234567"
                  />
                </div>
              </div>

              {/* Comments */}
              <div>
                <label htmlFor="comments" className="block text-white font-semibold mb-3">
                  Comentarios adicionales
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200 resize-none"
                  placeholder="Cuéntanos más sobre tu negocio o qué necesidades específicas tienes..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center mx-auto"
                >
                  <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                  Enviar consulta por WhatsApp
                </button>
                
                <p className="text-gray-400 text-sm mt-4">
                  Al enviar, se abrirá WhatsApp con tu mensaje pre-generado
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-white font-semibold mb-2">Respuesta rápida</h4>
              <p className="text-gray-400 text-sm">Te respondemos en menos de 2 horas</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="text-white font-semibold mb-2">Consulta gratuita</h4>
              <p className="text-gray-400 text-sm">Sin compromiso, solo charlamos</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-white font-semibold mb-2">Propuesta personalizada</h4>
              <p className="text-gray-400 text-sm">Adaptada a tu negocio específico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;