/**
 * PricingSection Component
 * Main orchestrator for the Pricing section with complex state management
 * Handles mouse interactions and coordinates all pricing components
 */

import React from 'react';
import { PricingTitle } from './PricingTitle';
import { PricingCard } from './PricingCard';
import { PRICING_PLANS } from './pricing.constants';
import type { MousePosition } from './pricing.types';

export const PricingSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);
  const [mousePosition, setMousePosition] = React.useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section 
      id="pricing"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#0D0E11',
        paddingTop: '40px',
        paddingBottom: '80px',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1044px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Title section */}
        <PricingTitle />

        {/* Pricing cards */}
        <div 
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '21px',
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%'
          }}
          className="pricing-cards-container"
        >
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              index={index}
              isHovered={hoveredCard === index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={(e) => handleMouseMove(e, index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 