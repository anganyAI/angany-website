/**
 * Constants and data for HowItWorksSection components
 * Separates data from presentation logic
 */

import type { HowItWorksStep } from './how-it-works.types';

// Shared gradient style for step numbers
export const STEP_NUMBER_GRADIENT = 'linear-gradient(135deg, #4CBBFF 0%, #417AF5 62.5%, #3F71EF 80.29%, #4977E9 96.63%)';

// Shared step number styling
export const STEP_NUMBER_BASE_STYLE: React.CSSProperties = {
  background: STEP_NUMBER_GRADIENT,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '120px',
  fontFamily: 'Inter',
  fontWeight: 900,
  lineHeight: '221.49px',
  letterSpacing: '-2.4px',
  opacity: 0.25,
  width: '71px',
  height: '173.06px',
  position: 'absolute',
  top: '0px'
};

// Steps data configuration
export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    stepNumber: 1,
    title: 'what you want in plain language',
    highlightText: 'Describe',
    imageUrl: '/img/step1-code-container.png',
    imageAlt: 'Step 1 code container',
    containerStyle: {
      position: 'absolute',
      left: '0px',
      top: '112px',
      width: '481px',
      height: '418.92px'
    },
    numberStyle: {
      ...STEP_NUMBER_BASE_STYLE,
      left: '45px'
    },
    titleStyle: {
      position: 'absolute',
      left: '83px',
      top: '87px',
      width: '326px',
      height: '56px',
      color: '#F3F4F3',
      fontSize: '22px',
      fontFamily: 'Inter',
      fontWeight: 600,
      lineHeight: '28px',
      letterSpacing: '0.22px'
    },
    imageContainerStyle: {
      position: 'absolute',
      left: '0px',
      top: '170px',
      width: '481px',
      height: '248.92px'
    }
  },
  {
    stepNumber: 2,
    title: 'your voice system',
    highlightText: 'AI configures',
    imageUrl: '/img/step2-code-container.png',
    imageAlt: 'Step 2 code container',
    containerStyle: {
      position: 'absolute',
      left: '547px',
      top: '208px',
      width: '684px',
      height: '462.29px'
    },
    numberStyle: {
      ...STEP_NUMBER_BASE_STYLE,
      left: '79px'
    },
    titleStyle: {
      position: 'absolute',
      left: '130px',
      top: '87px',
      width: '326px',
      height: '56px',
      color: '#F3F4F3',
      fontSize: '22px',
      fontFamily: 'Inter',
      fontWeight: 600,
      lineHeight: '28px',
      letterSpacing: '0.22px'
    },
    imageContainerStyle: {
      position: 'absolute',
      left: '0px',
      top: '174.71px',
      width: '684px',
      height: '287.58px'
    }
  },
  {
    stepNumber: 3,
    title: 'with simple APIs',
    highlightText: 'Deploy and scale',
    imageUrl: '/img/step3-code-container.png',
    imageAlt: 'Step 3 code container',
    containerStyle: {
      position: 'absolute',
      left: '0px',
      top: '612px',
      width: '934px',
      height: '503.85px'
    },
    numberStyle: {
      ...STEP_NUMBER_BASE_STYLE,
      left: '40px'
    },
    titleStyle: {
      position: 'absolute',
      left: '86px',
      top: '93px',
      width: '325px',
      height: '56px',
      color: '#F3F4F3',
      fontSize: '22px',
      fontFamily: 'Inter',
      fontWeight: 600,
      lineHeight: '28px',
      letterSpacing: '0.22px'
    },
    imageContainerStyle: {
      position: 'absolute',
      left: '0px',
      top: '172px',
      width: '934px',
      height: '331.85px'
    }
  }
]; 