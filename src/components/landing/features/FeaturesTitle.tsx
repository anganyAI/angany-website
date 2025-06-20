import React from 'react';

export default function FeaturesTitle() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '729px',
      margin: '0 auto',
      position: 'relative',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '12px',
      display: 'flex',
      zIndex: 10,
      textAlign: 'center'
    }}>
      <div style={{
        alignSelf: 'stretch',
        textAlign: 'center'
      }}>
        <span style={{
          color: 'white',
          fontSize: 'clamp(28px, 5vw, 38px)',
          fontFamily: 'Inter',
          fontWeight: 600,
          lineHeight: '1.2em',
          wordWrap: 'break-word'
        }}>
          Key Features That{' '}
        </span>
        <span style={{
          color: '#1CA1F2',
          fontSize: 'clamp(28px, 5vw, 38px)',
          fontFamily: 'Inter',
          fontWeight: 600,
          lineHeight: '1.2em',
          wordWrap: 'break-word'
        }}>
          Set Us Apart
        </span>
      </div>
      <div style={{
        alignSelf: 'stretch',
        textAlign: 'center',
        color: '#C8D2D9',
        fontSize: 'clamp(16px, 2.5vw, 18px)',
        fontFamily: 'Inter',
        fontWeight: 400,
        lineHeight: '1.67em',
        wordWrap: 'break-word',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        Build intelligent voice experiences with our AI-powered SaaS platform designed specifically for developers.
      </div>
    </div>
  );
} 