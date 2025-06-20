import React from 'react';
import { PlatformContent } from './platform.types';

interface PlatformDemoProps {
  content: PlatformContent;
}

export default function PlatformDemo({ content }: PlatformDemoProps) {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '1123px',
      margin: '0 auto 40px auto',
      background: '#02021B',
      borderRadius: '19px',
      backdropFilter: 'blur(40px)',
      padding: '13px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      boxSizing: 'border-box',
      zIndex: 5
    }}>
      {/* Abstract Design - Blue glow effects */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '13px',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '33px',
        pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '100%',
          height: '100%',
          background: '#1CA1F2',
          filter: 'blur(240px)',
          opacity: 0.6
        }}></div>
        <div style={{
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '100%',
          height: '100%',
          background: '#1CA1F2',
          filter: 'blur(70px)',
          opacity: 0.8
        }}></div>
      </div>

      {/* Main Platform Image */}
      <img 
        src={content.imageUrl} 
        alt={content.imageAlt}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '17px',
          objectFit: 'cover',
          display: 'block'
        }}
      />

      {/* Fade Out Effect */}
      <div style={{
        position: 'absolute',
        left: '0px',
        bottom: '0px',
        width: '100%',
        height: '101px',
        background: 'linear-gradient(180deg, rgba(13, 14, 17, 0) 0%, #0D0E11 81%)',
        borderRadius: '0 0 17px 17px',
        pointerEvents: 'none'
      }}></div>
    </div>
  );
} 