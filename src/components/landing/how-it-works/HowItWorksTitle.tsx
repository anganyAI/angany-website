/**
 * HowItWorksTitle Component
 * Displays the title and description for the How It Works section
 * Reusable component with clean separation of concerns
 */

import React from 'react';

export const HowItWorksTitle: React.FC = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '729px',
      margin: '0 auto 80px auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      zIndex: 10
    }}>
      <h2 style={{
        fontSize: 'clamp(28px, 5vw, 38px)',
        fontFamily: 'Inter',
        fontWeight: 600,
        lineHeight: '1.2em',
        textAlign: 'center',
        margin: 0
      }}>
        <span style={{color: '#FFFFFF'}}>How the platform </span>
        <span style={{color: '#1CA1F2'}}>works</span>
      </h2>
      <p style={{
        color: '#C8D2D9',
        fontSize: 'clamp(16px, 2.5vw, 18px)',
        fontFamily: 'Inter',
        fontWeight: 400,
        lineHeight: '1.67em',
        letterSpacing: '-0.36px',
        textAlign: 'center',
        margin: 0,
        maxWidth: '600px'
      }}>
        From concept to production in minutes. Our AI-powered platform transforms your voice application ideas into fully functional systems with just a few simple steps.
      </p>
    </div>
  );
}; 