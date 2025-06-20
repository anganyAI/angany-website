/**
 * HeroSection Component
 * Main orchestrator for the Hero section
 * Combines background, content, and visual components for a clean, maintainable structure
 */

import React from 'react';
import Header from '../../Header';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';
import styles from '../../../pages/index.module.css';

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection} style={{ backgroundColor: '#0D0E11' }}>
      {/* Background gradients */}
      <HeroBackground />
      
      {/* Reusable Header Component */}
      <Header />

      {/* Hero container with content and visual */}
      <div className={styles.heroContainer}>
        {/* Main content section */}
        <HeroContent />

        {/* Visual elements */}
        <HeroVisual />
      </div>
    </section>
  );
}; 