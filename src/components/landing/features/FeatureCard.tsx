import React from 'react';
import { FeatureCardProps } from './features.types';

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <div 
      key={index} 
      style={{
        width: '100%',
        minHeight: '300px',
        position: 'relative',
        borderRadius: '30px',
        padding: '1.19px',
        background: 'linear-gradient(180deg, #388AEA 0%, #0E1A24 100%)'
      }}
    >
      {/* Content container with subtle background */}
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '28.81px',
        background: 'rgba(20, 22, 25, 0.8)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Content with responsive spacing */}
        <div style={{
          padding: 'clamp(24px, 4vw, 48px)',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            padding: '0',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '25px',
            display: 'flex'
          }}>
            <div style={{
              alignSelf: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '22px',
              display: 'flex'
            }}>
              {/* Icon */}
              <div style={{
                width: '66px',
                height: '66px',
                background: 'rgba(28, 161, 242, 0.05)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <img 
                  src={feature.icon}
                  alt={feature.title}
                  style={{
                    width: '45px',
                    height: '39px',
                    objectFit: 'contain'
                  }}
                />
              </div>
              
              {/* Text content */}
                              <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '15px',
                  display: 'flex'
                }}>
                  <div style={{
                    alignSelf: 'stretch',
                    color: '#F3F4F3',
                    fontSize: '18px',
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    lineHeight: '1.35em',
                    letterSpacing: '0.18px',
                    wordWrap: 'break-word'
                  }}>
                    {feature.title}
                  </div>
                  <div style={{
                    alignSelf: 'stretch',
                    color: '#C8D2D9',
                    fontSize: '14px',
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    lineHeight: '1.43em',
                    letterSpacing: '-0.28px',
                    wordWrap: 'break-word'
                  }}>
                    {feature.description}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 