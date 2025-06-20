/**
 * TypeScript interfaces for HeroSection components
 * Defines the structure for hero content and component props
 */

export interface HeroContent {
  title: {
    main: string;
    highlight: string;
    end: string;
  };
  subtitle: string;
  ctaButton: {
    text: string;
    link: string;
    iconSrc: string;
  };
}

export interface HeroVisual {
  mainImage: {
    src: string;
    alt: string;
  };
  floatingIcons: {
    voiceSquare: {
      src: string;
      alt: string;
    };
    microphone: {
      src: string;
      alt: string;
    };
  };
} 