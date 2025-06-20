/**
 * HowItWorksSection Component
 * Main orchestrator for the How It Works section
 * Combines background, title, and step components for a clean, maintainable structure
 */

import React from 'react';
import { HowItWorksBackground } from './HowItWorksBackground';
import { HowItWorksTitle } from './HowItWorksTitle';
import { HowItWorksStep } from './HowItWorksStep';
import { HOW_IT_WORKS_STEPS } from './how-it-works.constants';

export const HowItWorksSection: React.FC = () => {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: 'auto',
      backgroundColor: '#0D0E11',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: 'clamp(60px, 8vw, 120px) 20px'
    }}>
      {/* Background elements (vectors and blur effects) */}
      <HowItWorksBackground />

      {/* Main content container */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1231px',
          minHeight: '1200px', // Fixed height for desktop absolute positioning
          zIndex: 10
        }}
        className="how-it-works-container"
      >
        {/* Title section */}
        <HowItWorksTitle />

        {/* Render all steps */}
        {HOW_IT_WORKS_STEPS.map((step) => (
          <HowItWorksStep key={step.stepNumber} step={step} />
        ))}
      </div>
    </section>
  );
}; 