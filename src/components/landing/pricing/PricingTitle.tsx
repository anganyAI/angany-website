/**
 * PricingTitle Component
 * Displays the title and subtitle for the Pricing section
 * Reusable component with clean data separation
 */

import React from 'react';
import { PRICING_TITLE, PRICING_SUBTITLE } from './pricing.constants';

export const PricingTitle: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      maxWidth: '1044px',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '12px',
      display: 'flex',
      marginBottom: '60px',
      textAlign: 'center'
    }}>
      <div style={{
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '9.54px',
        display: 'flex'
      }}>
        <div style={{
          alignSelf: 'stretch',
          textAlign: 'center'
        }}>
          <span style={{
            color: '#1CA1F2',
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontFamily: 'Inter',
            fontWeight: 500,
            lineHeight: '1.2em',
            letterSpacing: '-2.1px',
            wordWrap: 'break-word'
          }}>
            {PRICING_TITLE.highlight}
          </span>
          <span style={{
            color: 'white',
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontFamily: 'Inter',
            fontWeight: 500,
            lineHeight: '1.2em',
            letterSpacing: '-2.1px',
            wordWrap: 'break-word'
          }}>
            {PRICING_TITLE.normal}
          </span>
        </div>
      </div>
      <div style={{
        alignSelf: 'stretch',
        textAlign: 'center',
        color: '#C8D2D9',
        fontSize: 'clamp(16px, 2.5vw, 18px)',
        fontFamily: 'Inter',
        fontWeight: 400,
        lineHeight: '1.67em',
        letterSpacing: '-0.36px',
        wordWrap: 'break-word',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        {PRICING_SUBTITLE}
      </div>
    </div>
  );
}; 