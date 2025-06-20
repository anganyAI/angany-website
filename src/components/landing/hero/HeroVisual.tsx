/**
 * HeroVisual Component
 * Displays the visual elements including code mockup and floating icons
 * Reusable component with clean asset management
 */

import React from 'react';
import { HERO_VISUAL } from './hero.constants';
import styles from '../../../pages/index.module.css';

export const HeroVisual: React.FC = () => {
  const { mainImage, floatingIcons } = HERO_VISUAL;

  return (
    <div className={styles.visualContainer}>
      {/* Code mockup elements */}
      <div className={styles.glowBar}></div>
      <div className={styles.visualImage}>
        <img src={mainImage.src} alt={mainImage.alt} />
      </div>
      <div className={styles.fadeOut}></div>

      {/* Floating icons - now positioned relative to visual container */}
      <div className={styles.voiceSquare}>
        <img 
          src={floatingIcons.voiceSquare.src} 
          alt={floatingIcons.voiceSquare.alt} 
          className={styles.voiceSquareIcon} 
        />
      </div>
      
      <div className={styles.microphoneIcon}>
        <img 
          src={floatingIcons.microphone.src} 
          alt={floatingIcons.microphone.alt} 
          className={styles.microphoneIconImg} 
        />
      </div>
    </div>
  );
}; 