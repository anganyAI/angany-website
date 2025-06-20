/**
 * HeroBackground Component
 * Displays the background gradient elements for the hero section
 * Reusable component for background styling
 */

import React from 'react';
import styles from '../../../pages/index.module.css';

export const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Background gradients matching Figma */}
      <div className={styles.backgroundGradient1}></div>
      <div className={styles.backgroundGradient2}></div>
      <div className={styles.backgroundGradient3}></div>
    </>
  );
}; 