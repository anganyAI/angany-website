/**
 * HeroContent Component
 * Displays the main hero title, subtitle, and call-to-action button
 * Reusable component with clean data separation
 */

import React from 'react';
import Link from '@docusaurus/Link';
import { HERO_CONTENT } from './hero.constants';
import styles from '../../../pages/index.module.css';

export const HeroContent: React.FC = () => {
  const { title, subtitle, ctaButton } = HERO_CONTENT;

  return (
    <div className={styles.heroContent}>
      <div className={styles.contentText}>
        <h1 className={styles.heroTitle}>
          {title.main}<br />
          <span style={{color: '#1CA1F2'}}>{title.highlight}</span>
          {title.end}
        </h1>
        <p className={styles.heroSubtitle}>
          {subtitle}
        </p>
      </div>
      
      <div className={styles.heroActions}>
        <Link className={styles.primaryButton} to={ctaButton.link}>
          {ctaButton.text}
          <img src={ctaButton.iconSrc} alt="" className={styles.buttonIcon} />
        </Link>
      </div>
    </div>
  );
}; 