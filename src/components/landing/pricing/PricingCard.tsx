/**
 * PricingCard Component
 * Complex component handling individual pricing plan cards with original sophisticated styling
 * Preserves all original CSS styling, hover effects, and layout complexity
 */

import React from 'react';
import type { PricingCardProps } from './pricing.types';

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onMouseMove
}) => {
  const {
    name,
    price,
    currency,
    description,
    period,
    features,
    buttonText,
    highlighted,
    hasBlueIcon
  } = plan;

  return (
    <div 
      style={{
        width: '100%',
        maxWidth: '324px',
        minWidth: '280px',
        height: '625px',
        background: isHovered 
          ? 'rgba(255, 255, 255, 0.08)' 
          : highlighted 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(255, 255, 255, 0.02)',
        backgroundImage: isHovered
          ? 'linear-gradient(180deg, rgba(96, 106, 203, 0.2) 0%, rgba(79, 90, 190, 0.08) 50%, rgba(96, 106, 203, 0.15) 100%)'
          : highlighted 
            ? 'linear-gradient(180deg, rgba(96, 106, 203, 0.25) 0%, rgba(79, 90, 190, 0.08) 100%)'
            : 'linear-gradient(180deg, rgba(96, 106, 203, 0.15) 0%, rgba(79, 90, 190, 0.05) 50%, rgba(96, 106, 203, 0.12) 100%)',
        overflow: 'hidden',
        borderRadius: '30px',
        border: isHovered 
          ? '2px solid #1CA1F2'
          : '1.19px solid rgba(56, 138, 234, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: isHovered 
          ? '0 0 30px rgba(28, 161, 242, 0.3)'
          : highlighted
            ? '0 0 20px rgba(56, 138, 234, 0.2)'
            : 'none'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      {/* Bottom fade effect */}
      <div style={{
        position: 'absolute',
        left: '0px',
        top: '50%',
        width: '100%',
        height: '50%',
        background: 'linear-gradient(180deg, rgba(13, 14, 17, 0) 0%, rgba(13, 14, 17, 0.3) 40%, rgba(13, 14, 17, 0.7) 70%, rgba(13, 14, 17, 0.95) 90%, #0D0E11 100%)',
        borderRadius: '0 0 30px 30px',
        pointerEvents: 'none',
        zIndex: 2
      }} />
      
      {/* Header Section - Fixed Height */}
      <div style={{
        padding: '33px 36px 0px 36px',
        height: '180px',
        display: 'flex',
        flexDirection: 'column',
        gap: '21.43px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          width: '35.71px',
          height: '35.71px',
          position: 'relative',
          background: hasBlueIcon ? '#1CA1F2' : 'rgba(255, 255, 255, 0.12)',
          borderRadius: '50%',
          border: hasBlueIcon ? 'none' : '0.89px solid rgba(255, 255, 255, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <div style={{
            width: '17.86px',
            height: '17.86px',
            background: hasBlueIcon ? 'white' : 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
            flexShrink: 0
          }} />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '7.14px',
          flex: 1
        }}>
          <div style={{
            color: 'white',
            fontSize: '21.43px',
            fontFamily: 'Inter',
            fontWeight: 600,
            wordWrap: 'break-word',
            lineHeight: '1.2'
          }}>
            {name}
          </div>
          <div style={{
            color: '#C8D2D9',
            fontSize: '14.29px',
            fontFamily: 'Inter',
            fontWeight: 400,
            lineHeight: '1.4',
            wordWrap: 'break-word'
          }}>
            {description}
          </div>
        </div>
      </div>

      {/* Pricing Section - Fixed Height */}
      <div style={{
        padding: '0px 36px',
        height: '90px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '7.14px'
        }}>
          <div style={{
            color: 'white',
            fontSize: '35.71px',
            fontFamily: 'Inter',
            fontWeight: 600,
            wordWrap: 'break-word',
            lineHeight: '1'
          }}>
            {price === 'Custom' ? 'Custom' : `$${price}`}
          </div>
          {currency && (
            <div style={{
              color: '#C8D2D9',
              fontSize: '14.29px',
              fontFamily: 'Inter',
              fontWeight: 400,
              wordWrap: 'break-word',
              lineHeight: '1',
              paddingBottom: '4px'
            }}>
              {currency}
            </div>
          )}
        </div>
        <div style={{
          color: '#C8D2D9',
          fontSize: '14.29px',
          fontFamily: 'Inter',
          fontWeight: 400,
          wordWrap: 'break-word',
          lineHeight: '1.3'
        }}>
          {period}
        </div>
      </div>

      {/* Button Section - Fixed Height and Position */}
      <div style={{
        padding: '20px 36px',
        height: '85px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        {(buttonText === 'Get started' || buttonText === 'Start free trial') ? (
          <a 
            href="https://beta.angany.ai/sign-up" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              width: '100%',
              height: '42.86px',
              paddingLeft: '21.43px',
              paddingRight: '21.43px',
              paddingTop: '10.71px',
              paddingBottom: '10.71px',
              background: highlighted || isHovered 
                ? 'linear-gradient(135deg, #1CA1F2 0%, #4CBBFF 100%)' 
                : 'rgba(255, 255, 255, 0.1)',
              borderRadius: '21.43px',
              border: highlighted || isHovered 
                ? 'none' 
                : '1px solid rgba(255, 255, 255, 0.2)',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              boxSizing: 'border-box'
            }}
          >
            <div style={{
              color: highlighted || isHovered ? 'white' : 'rgba(255, 255, 255, 0.8)',
              fontSize: '14.29px',
              fontFamily: 'Inter',
              fontWeight: 600,
              wordWrap: 'break-word'
            }}>
              {buttonText}
            </div>
          </a>
        ) : (
          <div style={{
            width: '100%',
            height: '42.86px',
            paddingLeft: '21.43px',
            paddingRight: '21.43px',
            paddingTop: '10.71px',
            paddingBottom: '10.71px',
            background: highlighted || isHovered 
              ? 'linear-gradient(135deg, #1CA1F2 0%, #4CBBFF 100%)' 
              : 'rgba(255, 255, 255, 0.1)',
            borderRadius: '21.43px',
            border: highlighted || isHovered 
              ? 'none' 
              : '1px solid rgba(255, 255, 255, 0.2)',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              color: highlighted || isHovered ? 'white' : 'rgba(255, 255, 255, 0.8)',
              fontSize: '14.29px',
              fontFamily: 'Inter',
              fontWeight: 600,
              wordWrap: 'break-word'
            }}>
              {buttonText}
            </div>
          </div>
        )}
      </div>

      {/* Features Section - Remaining Space */}
      <div style={{
        padding: '0px 36px 33px 36px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        position: 'relative',
        zIndex: 2
      }}>
        {features.map((feature, featureIndex) => (
          <div key={featureIndex} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10.71px'
          }}>
            <div style={{
              width: '17.86px',
              height: '17.86px',
              position: 'relative',
              flexShrink: 0
            }}>
              {feature.included ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="#1CA1F2"/>
                  <path d="M5.5 9.5L7.5 11.5L12.5 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="8.5" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1"/>
                  <path d="M6 6L12 12M12 6L6 12" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              )}
            </div>
            <div style={{
              color: feature.included ? 'white' : 'rgba(255, 255, 255, 0.5)',
              fontSize: '14.29px',
              fontFamily: 'Inter',
              fontWeight: 400,
              wordWrap: 'break-word',
              lineHeight: '1.3'
            }}>
              {feature.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 