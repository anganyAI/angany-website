import React from 'react';
import FeaturesTitle from './FeaturesTitle';
import FeatureCard from './FeatureCard';
import { FEATURES_DATA } from './features.constants';
import styles from '../../../pages/index.module.css';

export default function FeaturesSection() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      backgroundColor: '#0D0E11',
      padding: 'clamp(60px, 8vw, 120px) 20px',
    }}>
      <div className="container" style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1233px',
        margin: '0 auto',
      }}>
        {/* Title section */}
        <FeaturesTitle />

        {/* Feature boxes container */}
        <div className={styles.featuresGrid}>
          {FEATURES_DATA.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
} 