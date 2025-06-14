export interface BusinessType {
  id: string;
  name: string;
  icon: string;
  image: string;
  hasDelivery?: boolean;
}

export interface ServiceCombo {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: number;
  businessTypes: string[];
  forDelivery?: boolean;
  mantenimiento?: boolean,

}

export interface MaintenancePlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  highlight?: boolean;
}

export interface ContactForm {
  businessName: string;
  businessType: string;
  interestedCombo: string;
  whatsappNumber: string;
  comments: string;
}