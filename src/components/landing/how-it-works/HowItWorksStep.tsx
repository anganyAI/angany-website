/**
 * HowItWorksStep Component
 * Reusable component for rendering individual steps in the How It Works section
 * Handles step number, title, and image display with custom positioning
 */

import React from 'react';
import type { HowItWorksStepProps } from './how-it-works.types';

export const HowItWorksStep: React.FC<HowItWorksStepProps> = ({ step }) => {
  const { stepNumber, title, highlightText, imageUrl, imageAlt } = step;

  // Desktop positioning based on step number
  const getDesktopStyle = () => {
    const baseStyle = {
      position: 'absolute' as const,
      zIndex: 5
    };
    
    switch (stepNumber) {
      case 1:
        return {
          ...baseStyle,
          left: '0px',
          top: '112px',
          width: '481px',
          height: 'auto'
        };
      case 2:
        return {
          ...baseStyle,
          right: '0px',
          top: '208px',
          width: '684px',
          height: 'auto'
        };
      case 3:
        return {
          ...baseStyle,
          left: '0px',
          top: '612px',
          width: '100%',
          maxWidth: '934px',
          height: 'auto'
        };
      default:
        return baseStyle;
    }
  };

  // Mobile/tablet style
  const getMobileStyle = () => ({
    position: 'relative' as const,
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto 60px auto',
    padding: '40px 20px',
    background: 'rgba(255, 255, 255, 0.02)',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    zIndex: 5
  });

  return (
    <>
      {/* Desktop layout */}
      <div 
        style={{
          ...getDesktopStyle(),
          display: 'none'
        }}
        className="desktop-step"
      >
        {/* Large gradient number - Desktop positioning */}
        <div style={{
          position: 'absolute',
          background: 'linear-gradient(135deg, #4CBBFF 0%, #417AF5 62.5%, #3F71EF 80.29%, #4977E9 96.63%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '120px',
          fontFamily: 'Inter',
          fontWeight: 900,
          lineHeight: '221.49px',
          letterSpacing: '-2.4px',
          opacity: 0.25,
          width: '71px',
          height: '173.06px',
          top: '0px',
          left: stepNumber === 1 ? '45px' : stepNumber === 2 ? '79px' : '40px'
        }}>
          {stepNumber}
        </div>
        
        {/* Step title - Desktop positioning */}
        <div style={{
          position: 'absolute',
          left: stepNumber === 1 ? '83px' : stepNumber === 3 ? '86px' : '130px',
          top: stepNumber === 3 ? '93px' : '87px',
          width: stepNumber === 3 ? '325px' : '326px',
          height: '56px',
          color: '#F3F4F3',
          fontSize: '22px',
          fontFamily: 'Inter',
          fontWeight: 600,
          lineHeight: '28px',
          letterSpacing: '0.22px'
        }}>
          <span style={{color: '#1CA1F2'}}>{highlightText}</span> {title}
        </div>
        
        {/* Code container - Desktop positioning */}
        <div style={{
          position: 'absolute',
          left: '0px',
          top: stepNumber === 1 ? '170px' : stepNumber === 2 ? '174.71px' : '172px',
          width: '100%',
          height: stepNumber === 1 ? '248.92px' : stepNumber === 2 ? '287.58px' : '331.85px'
        }}>
          <img 
            src={imageUrl} 
            alt={imageAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

      {/* Mobile/Tablet layout */}
      <div 
        style={{
          ...getMobileStyle(),
          display: 'block'
        }}
        className="mobile-step"
      >
        {/* Step header with number and title */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '20px',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          {/* Large gradient number */}
          <div style={{
            background: 'linear-gradient(135deg, #4CBBFF 0%, #417AF5 62.5%, #3F71EF 80.29%, #4977E9 96.63%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: 'clamp(60px, 8vw, 80px)',
            fontFamily: 'Inter',
            fontWeight: 900,
            lineHeight: '1em',
            letterSpacing: '-2px',
            opacity: 0.8,
            flexShrink: 0
          }}>
            {stepNumber}
          </div>
          
          {/* Step title with highlighting */}
          <div style={{
            flex: 1,
            minWidth: '250px',
            paddingTop: '10px'
          }}>
            <h3 style={{
              color: '#F3F4F3',
              fontSize: 'clamp(18px, 3vw, 22px)',
              fontFamily: 'Inter',
              fontWeight: 600,
              lineHeight: '1.3em',
              letterSpacing: '0.22px',
              margin: 0
            }}>
              <span style={{color: '#1CA1F2'}}>{highlightText}</span> {title}
            </h3>
          </div>
        </div>
        
        {/* Code container with image */}
        <div style={{
          width: '100%',
          borderRadius: '12px',
          overflow: 'hidden',
          background: 'rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <img 
            src={imageUrl} 
            alt={imageAlt}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>
    </>
  );
}; 