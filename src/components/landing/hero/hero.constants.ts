/**
 * Constants and data for HeroSection components
 * Separates content data from presentation logic
 */

import type { HeroContent, HeroVisual } from './hero.types';

// Hero content configuration
export const HERO_CONTENT: HeroContent = {
  title: {
    main: 'Programmable',
    highlight: 'Voice AI platform ',
    end: 'for developers'
  },
  subtitle: 'Reimagining telecommunications with AI at its core — speak your vision, let AI build it.',
  ctaButton: {
    text: 'Try demo for free',
    link: 'https://beta.angany.ai/sign-up',
    iconSrc: '/img/landing/button-arrow-icon.svg'
  }
};

// Hero visual assets configuration
export const HERO_VISUAL: HeroVisual = {
  mainImage: {
    src: '/img/landing/hero-code-mockup.png',
    alt: 'Code editor mockup'
  },
  floatingIcons: {
    voiceSquare: {
      src: '/img/landing/voice-square-icon.svg',
      alt: 'Voice square'
    },
    microphone: {
      src: '/img/landing/microphone-icon.svg',
      alt: 'Microphone'
    }
  }
}; 