import React from 'react';
import { PlatformContent } from './platform.types';

interface PlatformButtonProps {
  content: PlatformContent;
}

export default function PlatformButton({ content }: PlatformButtonProps) {
  return (
    <a 
      href={content.buttonUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        position: 'relative',
        width: 'auto',
        maxWidth: '300px',
        height: '53px',
        margin: '0 auto',
        background: 'linear-gradient(135deg, #4CBBFF 0%, #417AF5 62%, #3F71EF 80%, #4977E9 97%)',
        borderRadius: '100px',
        padding: '16px 32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
        boxSizing: 'border-box',
        textDecoration: 'none',
        zIndex: 10,
        whiteSpace: 'nowrap'
      }}>
      <span style={{
        color: '#FFFFFF',
        fontSize: '16px',
        fontFamily: 'Inter',
        fontWeight: 600,
        lineHeight: '16.69px',
        letterSpacing: '-0.32px',
        textAlign: 'center',
        textTransform: 'uppercase'
      }}>
        {content.buttonText}
      </span>
      <div style={{
        width: '15px',
        height: '15px',
        position: 'relative'
      }}>
        <svg 
          width="15" 
          height="15" 
          viewBox="0 0 15 15" 
          fill="none" 
          style={{
            position: 'absolute',
            left: '3.95px',
            top: '1.32px'
          }}
        >
          <path 
            d="M3.95 1.32L11.06 8.5L3.95 15.69" 
            stroke="#FFFFFF" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </a>
  );
} 