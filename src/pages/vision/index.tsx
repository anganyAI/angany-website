import React from 'react';
import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import Header from '@site/src/components/Header';
import Footer from '@site/src/components/Footer';
import styles from './styles.module.css';

function BackgroundEffects() {
  return (
    <>
      {/* Hero Background Vector */}
      <div style={{
        position: 'absolute',
        left: '-433px',
        top: '159px',
        width: '1693.33px',
        height: '1590.89px',
        backgroundImage: 'url("/img/landing/hero-background-vector.svg")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: 1,
        pointerEvents: 'none'
      }}></div>

      {/* Background Gradients */}
      <div style={{
        width: '164.44px',
        height: '844.51px',
        left: '82.86px',
        top: '-19.64px',
        position: 'absolute',
        transform: 'rotate(-46deg)',
        transformOrigin: 'top left',
        background: 'linear-gradient(180deg, rgba(43.17, 187.92, 255, 0.24) 0%, rgba(43, 188, 255, 0) 100%)',
        boxShadow: '87.19558715820312px 87.19558715820312px 87.19558715820312px',
        filter: 'blur(43.60px)',
        pointerEvents: 'none'
      }}></div>

      <div style={{
        width: '54.71px',
        height: '918.33px',
        left: '-14.94px',
        top: '22.67px',
        position: 'absolute',
        transform: 'rotate(-46deg)',
        transformOrigin: 'top left',
        background: 'linear-gradient(180deg, rgba(43, 188, 255, 0.28) 0%, rgba(43, 188, 255, 0) 100%)',
        boxShadow: '60px 60px 60px',
        filter: 'blur(30px)',
        pointerEvents: 'none'
      }}></div>

      <div style={{
        width: '159.78px',
        height: '918.33px',
        left: '-156.31px',
        top: '184.86px',
        position: 'absolute',
        transform: 'rotate(-46deg)',
        transformOrigin: 'top left',
        background: 'linear-gradient(180deg, rgba(43.17, 187.92, 255, 0.24) 0%, rgba(43, 188, 255, 0) 100%)',
        boxShadow: '87.19558715820312px 87.19558715820312px 87.19558715820312px',
        filter: 'blur(43.60px)',
        pointerEvents: 'none'
      }}></div>
    </>
  );
}

export default function Vision(): ReactNode {
  const pageTitle = "Our Vision | Angany.ai";
  const pageDescription = "Reimagining Telecommunications from the Ground Up";

  return (
    <div className={styles.pageContainer}>
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
      
      <Header />
      
      {/* Hero Section with Background Effects */}
      <section className={styles.heroSection}>
        <BackgroundEffects />

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <h1 className={styles.pageHeader}>
            Reimagining <span className={styles.highlightText}>Telecommunications</span> from the Ground Up
          </h1>
          <p className={styles.pageSubtitle}>
            At Angany.ai, we're not just improving existing telecommunications systems—we're fundamentally 
            reimagining them for the AI era.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {/* Vision & Mission Section */}
          <section className={styles.section}>
            <div className={styles.visionMissionGrid}>
              {/* Vision Statement */}
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Vision Statement</h2>
                <p className={styles.cardText}>
                  We envision a world where telecommunications systems adapt to humans, not the other way around. 
                  Where adding new capabilities is as simple as explaining what you want in natural language. 
                  Where your communication infrastructure becomes an intelligent partner in your business operations.
                </p>
              </div>

              {/* Mission Statement */}
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Mission Statement</h2>
                <p className={styles.cardText}>
                  Angany.ai's mission is to provide enterprises with a telecommunications solution that adapts 
                  precisely to their needs through AI and natural language. We're building a future where 
                  communication systems are infinitely flexible, immediately responsive, and genuinely intelligent.
                </p>
              </div>
            </div>
          </section>

          {/* Revolutionary Approach Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              The <span className={styles.highlightText}>Revolutionary</span> Approach
            </h2>

            <div className={styles.approachGrid}>
              {/* Traditional Approach */}
              <div className={styles.traditionalCard}>
                <h3 className={styles.approachTitle}>Traditional Approach</h3>
                <ul className={styles.approachList}>
                  <li>Predetermined functionality defined by developers</li>
                  <li>Complex configuration interfaces requiring technical expertise</li>
                  <li>Siloed features with limited integration capabilities</li>
                  <li>Rigid call flows that don't adapt to real-world scenarios</li>
                </ul>
              </div>

              {/* Angany.ai Approach */}
              <div className={styles.anganyCard}>
                <h3 className={styles.approachTitle}>Angany.ai Approach</h3>
                <ul className={styles.approachList}>
                  <li>AI-driven functionality that evolves with your needs</li>
                  <li>Natural language configuration accessible to everyone</li>
                  <li>Seamless integration across all business systems</li>
                  <li>Intelligent adaptation to any communication scenario</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Objectives Timeline Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Objectives Timeline</h2>
            
            <div className={styles.timelineGrid}>
              <div className={styles.card}>
                <h3 className={styles.timelineTitle}>Alpha Phase (Next 6 Months)</h3>
                <p className={styles.cardText}>
                  Develop core AI-driven conversation engine with basic natural language configuration capabilities. 
                  Begin integration with essential business systems.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.timelineTitle}>Beta Expansion (12-18 Months)</h3>
                <p className={styles.cardText}>
                  Expand to comprehensive workflow automation, advanced AI capabilities, and extensive third-party 
                  integrations. Begin pilot programs with select enterprise customers.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.timelineTitle}>Market Release (18-24 Months)</h3>
                <p className={styles.cardText}>
                  Launch full commercial platform with complete AI-powered telecommunications suite, 
                  enterprise-grade security, and global scalability.
                </p>
              </div>
            </div>
          </section>

          {/* Founder's Note Section */}
          <section className={styles.section}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>A Note from Our Founder</h2>
              <p className={styles.cardText}>
                "Having worked extensively in telecommunications, I've witnessed firsthand the frustration of 
                businesses trying to adapt rigid systems to their unique needs. Angany.ai represents our 
                commitment to flipping this paradigm—creating systems that adapt to you, not the other way around.
              </p>
              <p className={styles.cardText}>
                We're not just building another telecommunications platform; we're reimagining what's possible 
                when AI becomes the foundation rather than an afterthought."
              </p>
              <div className={styles.founderSignature}>
                <strong>— Sylvain Boily, Founder & CEO, Angany.ai</strong>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 