export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FeatureCardProps {
  feature: Feature;
  index: number;
} 