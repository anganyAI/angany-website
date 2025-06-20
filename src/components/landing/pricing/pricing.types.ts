/**
 * TypeScript interfaces for PricingSection components
 * Defines the structure for pricing plans, features, and interaction state
 */

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  currency: string;
  description: string;
  period: string;
  features: PricingFeature[];
  buttonText: string;
  highlighted: boolean;
  hasBlueIcon: boolean;
}

export interface PricingCardProps {
  plan: PricingPlan;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onMouseMove: (e: React.MouseEvent) => void;
}

export interface PricingFeatureProps {
  feature: PricingFeature;
}

export interface PricingButtonProps {
  buttonText: string;
  isHighlighted: boolean;
  isHovered: boolean;
}

export interface MousePosition {
  x: number;
  y: number;
} 