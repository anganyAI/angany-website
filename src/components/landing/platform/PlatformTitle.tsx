import React from 'react';
import { PlatformContent } from './platform.types';

interface PlatformTitleProps {
  content: PlatformContent;
}

export default function PlatformTitle({ content }: PlatformTitleProps) {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '1044px',
      margin: '0 auto 40px auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      zIndex: 10,
      textAlign: 'center'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'stretch',
        gap: '9.54px'
      }}>
        <h2 style={{
          color: '#FFFFFF',
          fontSize: 'clamp(32px, 5vw, 42px)',
          fontFamily: 'Inter',
          fontWeight: 500,
          lineHeight: '1.2em',
          letterSpacing: '-2.1px',
          textAlign: 'center',
          margin: 0,
          width: '100%'
        }}>
          {content.title} <span style={{color: '#1CA1F2'}}>{content.highlightedText}</span> 
        </h2>
      </div>
      <p style={{
        color: '#C8D2D9',
        fontSize: 'clamp(16px, 2.5vw, 18px)',
        fontFamily: 'Inter',
        fontWeight: 400,
        lineHeight: '1.67em',
        letterSpacing: '-0.36px',
        textAlign: 'center',
        margin: 0,
        width: '100%',
        maxWidth: '600px'
      }}>
        {content.description}
      </p>
    </div>
  );
} 