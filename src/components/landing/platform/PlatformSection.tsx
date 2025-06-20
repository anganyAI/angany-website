import React from 'react';
import PlatformTitle from './PlatformTitle';
import PlatformDemo from './PlatformDemo';
import PlatformButton from './PlatformButton';
import { PLATFORM_CONTENT } from './platform.constants';

export default function PlatformSection() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '1000px',
      backgroundColor: '#0D0E11',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: 'clamp(60px, 8vw, 120px) 20px'
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1440px',
        minHeight: 'auto'
      }}>
        {/* Title section */}
        <PlatformTitle content={PLATFORM_CONTENT} />

        {/* Demo container */}
        <PlatformDemo content={PLATFORM_CONTENT} />

        {/* Call-to-action button */}
        <PlatformButton content={PLATFORM_CONTENT} />
      </div>
    </section>
  );
} 