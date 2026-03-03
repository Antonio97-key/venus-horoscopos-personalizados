export const PLANS = [
  {
    id: 'normal',
    name: 'VENUS Estándar',
    nameEn: 'VENUS Standard',
    price: 'Gratis',
    priceEn: 'Free',
    benefits: [
      { es: 'Horóscopo diario personalizado', en: 'Personalized daily horoscope' },
      { es: '3 situaciones simultáneas', en: '3 simultaneous situations' },
      { es: 'Historial de 7 días', en: '7-day history' }
    ]
  },
  {
    id: 'vip',
    name: 'VENUS VIP Estelar',
    nameEn: 'VENUS Stellar VIP',
    price: '$49.99/mes',
    priceEn: '$49.99/mo',
    benefits: [
      { es: 'Todo lo de Estándar', en: 'Everything in Standard' },
      { es: 'Historial ilimitado', en: 'Unlimited history' },
      { es: '30 consultas al Oráculo IA/mes', en: '30 AI Oracle consultations/mo' },
      { es: 'Lecturas profundas de tránsitos', en: 'Deep transit readings' }
    ]
  },
  {
    id: 'premium',
    name: 'VENUS Premium Galáctico',
    nameEn: 'VENUS Galactic Premium',
    price: '$99.99/mes',
    priceEn: '$99.99/mo',
    benefits: [
      { es: 'Todo lo de VIP', en: 'Everything in VIP' },
      { es: 'Consultas ilimitadas al Oráculo', en: 'Unlimited Oracle consultations' },
      { es: 'Análisis de compatibilidad estelar', en: 'Stellar compatibility analysis' },
      { es: 'Soporte prioritario 24/7', en: '24/7 priority support' }
    ]
  }
];
