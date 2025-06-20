import React from 'react';
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { HeroSection } from '../components/landing/hero';
import { FeaturesSection } from '../components/landing/features';
import { PlatformSection } from '../components/landing/platform';
import { HowItWorksSection } from '../components/landing/how-it-works';
import { PricingSection } from '../components/landing/pricing';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const pageTitle = "Angany.ai | Programmable Voice AI for Developers";
  const pageDescription = "Build, deploy, and scale complex voice applications with natural language. Reimagining telecommunications with AI at its core.";

  return (
    <div className={styles.modernLayout}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="/img/og-image.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=PT+Mono&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>
      
      <main className={styles.mainContent}>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PlatformSection />
        <PricingSection />
        <Footer />
      </main>
    </div>
  );
}
