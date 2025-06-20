/**
 * Constants and data for PricingSection components
 * Separates pricing data from presentation logic
 */

import type { PricingPlan } from './pricing.types';

// Pricing plans configuration
export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '0',
    currency: 'CAD',
    description: 'Perfect for getting started with voice AI.',
    period: '100 minutes/month included',
    features: [
      { text: 'Basic voice AI conversations', included: true },
      { text: 'Text-to-speech synthesis', included: true },
      { text: 'Speech recognition', included: true },
      { text: 'Custom voice models', included: false },
      { text: 'Advanced analytics', included: false },
      { text: 'Priority support', included: false }
    ],
    buttonText: 'Get started',
    highlighted: true,
    hasBlueIcon: false
  },
  {
    name: 'Professional',
    price: '20',
    currency: 'CAD',
    description: 'Ideal for growing businesses and teams.',
    period: '/month - Unlimited usage + advanced features',
    features: [
      { text: 'Everything in Starter', included: true },
      { text: 'Unlimited voice conversations', included: true },
      { text: 'Custom voice models', included: true },
      { text: 'Advanced analytics dashboard', included: true },
      { text: 'API integrations', included: true },
      { text: 'Email support', included: true }
    ],
    buttonText: 'Start free trial',
    highlighted: false,
    hasBlueIcon: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    currency: '',
    description: 'Tailored solutions for large organizations.',
    period: 'Contact us for pricing',
    features: [
      { text: 'Everything in Professional', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Custom model training', included: true },
      { text: 'On-premise deployment', included: true },
      { text: 'SLA guarantees', included: true },
      { text: '24/7 priority support', included: true },
      { text: 'Custom integrations', included: true }
    ],
    buttonText: 'Contact sales',
    highlighted: true,
    hasBlueIcon: false
  }
];

// Section title content
export const PRICING_TITLE = {
  highlight: 'Simple, transparent',
  normal: ' pricing'
};

export const PRICING_SUBTITLE = 'Choose the perfect plan for your voice AI needs. Start free and scale as you grow.'; 