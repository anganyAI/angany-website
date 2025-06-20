import React, { ReactNode } from 'react';
import Head from '@docusaurus/Head';
import Header from '@site/src/components/Header';
import Footer from '@site/src/components/Footer';
import styles from './DocLayout.module.css';

interface DocLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  sidebar?: ReactNode;
}

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
        zIndex: 1
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
        filter: 'blur(43.60px)'
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
        filter: 'blur(30px)'
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
        filter: 'blur(43.60px)'
      }}></div>
    </>
  );
}

export default function DocLayout({ children, title, description, sidebar }: DocLayoutProps): ReactNode {
  const pageTitle = `${title} | Angany.ai Documentation`;
  const pageDescription = description || "Angany.ai platform documentation and guides";

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
      </Head>
      
      <Header />
      
      {/* Hero Section with Background Effects */}
      <section className={styles.heroSection}>
        <BackgroundEffects />

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <h1 className={styles.pageHeader}>
            <span className={styles.highlightText}>Documentation</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Learn how to integrate and use the Angany.ai platform
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.docContainer}>
            {sidebar && (
              <aside className={styles.sidebar}>
                {sidebar}
              </aside>
            )}
            <div className={styles.contentArea}>
              <article className={styles.docContent}>
                {children}
              </article>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 