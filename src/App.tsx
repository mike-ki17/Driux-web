import React, { useState } from 'react';
import Header from './components/Header';
import BusinessTypes from './components/BusinessTypes';
import ServiceComparison from './components/ServiceComparison';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  const [selectedBusiness, setSelectedBusiness] = useState<string | null>(null);

  const handleBusinessSelect = (businessId: string) => {
    setSelectedBusiness(businessId);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      <Header />
      <BusinessTypes 
        onBusinessSelect={handleBusinessSelect}
        selectedBusiness={selectedBusiness}
      />
      <ServiceComparison />
      <Pricing />
      <Gallery />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;