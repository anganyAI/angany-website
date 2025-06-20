/**
 * HowItWorksBackground Component
 * Handles all background elements for the How It Works section
 * Including vectors and blur effects
 */

import React from 'react';

export const HowItWorksBackground: React.FC = () => {
  return (
    <>
      {/* Background vectors */}
      <div style={{
        position: 'absolute',
        left: '-366px',
        top: '344px',
        width: '1110px',
        height: '908px',
        backgroundImage: 'url(/img/how-it-works-vector-1.svg)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute',
        left: '677px',
        top: '-11px',
        width: '979px',
        height: '813px',
        backgroundImage: 'url(/img/how-it-works-vector-2.svg)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        zIndex: 1
      }} />
      
      {/* Background ellipse with blur */}
      <div style={{
        position: 'absolute',
        left: '349px',
        top: '450px',
        width: '304px',
        height: '279px',
        background: '#1CA1F2',
        borderRadius: '50%',
        filter: 'blur(480px)',
        zIndex: 2
      }} />
    </>
  );
}; 