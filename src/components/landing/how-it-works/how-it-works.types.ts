/**
 * TypeScript interfaces for HowItWorksSection components
 * Defines the structure for step data and component props
 */

export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  highlightText: string;
  imageUrl: string;
  imageAlt: string;
  containerStyle: React.CSSProperties;
  numberStyle: React.CSSProperties;
  titleStyle: React.CSSProperties;
  imageContainerStyle: React.CSSProperties;
}

export interface HowItWorksStepProps {
  step: HowItWorksStep;
} 