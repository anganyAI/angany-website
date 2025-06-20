import React, { useState } from 'react';
import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import Header from '@site/src/components/Header';
import Footer from '@site/src/components/Footer';
import styles from './styles.module.css';

interface FAQItem {
  question: string;
  answer: ReactNode;
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

export default function FAQ(): ReactNode {
  const pageTitle = "FAQ | Angany.ai";
  const pageDescription = "Frequently Asked Questions about Angany.ai";
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "What exactly is Angany.ai?",
      answer: (
        <>
          <p>
            Angany.ai is an AI-powered telecommunications platform that places artificial intelligence 
            at the core of the system, rather than as a peripheral feature. Unlike traditional telecommunications 
            systems that rely on predefined features, Angany.ai enables virtually unlimited functionality 
            through natural language configuration.
          </p>
        </>
      ),
    },
    {
      question: "How is Angany.ai different from other AI-powered telecommunications systems?",
      answer: (
        <>
          <p>
            While many systems incorporate AI as an add-on feature, Angany.ai is built with AI as the 
            foundation. This means that instead of selecting from predefined features, you can simply 
            explain what you want in natural language, and the AI will implement it. This creates a 
            level of flexibility and adaptability that traditional systems can't match.
          </p>
        </>
      ),
    },
    {
      question: "What kinds of businesses can benefit from Angany.ai?",
      answer: (
        <>
          <p>
            Angany.ai is designed for businesses of all sizes that rely on telecommunications for 
            customer service, appointment scheduling, internal communications, or any other voice-based 
            interaction. It's particularly valuable for businesses looking to automate routine calls 
            while maintaining a natural, human-like interaction.
          </p>
        </>
      ),
    },
    {
      question: "Do I need technical expertise to configure Angany.ai?",
      answer: (
        <>
          <p>
            No technical expertise is required. Unlike traditional telecommunications systems that often 
            require specialized knowledge to configure, Angany.ai allows you to set up complex workflows 
            through natural conversation with the AI. Simply explain what you want in plain language, and 
            the system will handle the technical implementation.
          </p>
        </>
      ),
    },
    {
      question: "Can Angany.ai integrate with my existing systems?",
      answer: (
        <>
          <p>
            Yes, Angany.ai is designed for seamless integration with your existing business systems 
            through APIs, webhooks, and WebSockets. This allows the AI to access and manipulate data 
            across your organization, providing contextually appropriate responses during calls.
          </p>
        </>
      ),
    },
    {
      question: "What about data privacy and security?",
      answer: (
        <>
          <p>
            Security is foundational to Angany.ai. We offer:
          </p>
          <ul>
            <li>Data storage choice: You control where your data is stored</li>
            <li>Encrypted communications using technologies like WebRTC with SRTP or SIP TLS</li>
            <li>On-premises options with the ability to host the engine on-site if required</li>
            <li>AI selection freedom, allowing you to choose which AI models to utilize</li>
            <li>Regulatory compliance with applicable standards and regulations</li>
          </ul>
        </>
      ),
    },
    {
      question: "When will Angany.ai be available?",
      answer: (
        <>
          <p>
            Angany.ai is currently in the prototype phase. We are working toward an alpha release in the 
            coming months, followed by a beta expansion phase over the next 12-18 months. A full market 
            release is expected within 18-24 months.
          </p>
          <p>
            You can <a href="https://beta.angany.ai/sign-up" target="_blank" rel="noopener noreferrer" className={styles.link}>join our waitlist</a> to be among the first to experience Angany.ai 
            and receive updates on our development progress.
          </p>
        </>
      ),
    },
    {
      question: "How can I get involved with Angany.ai?",
      answer: (
        <>
          <p>
            We're actively seeking early testers, integration partners, and industry advisors to help shape 
            the future of Angany.ai. If you're interested in being part of our journey, please 
            <a href="/contact" className={styles.link}> contact us</a> to discuss possibilities for collaboration.
          </p>
        </>
      ),
    },
  ];

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
            Frequently Asked <span className={styles.highlightText}>Questions</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Everything you need to know about Angany.ai
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.faqContainer}>
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  {item.question}
                  <span className={styles.faqIcon}>
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div 
                  className={styles.faqAnswer} 
                  style={{ 
                    maxHeight: activeIndex === index ? '1000px' : '0',
                    opacity: activeIndex === index ? 1 : 0 
                  }}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.ctaSection}>
            <div className={styles.ctaCard}>
              <h2 className={styles.ctaTitle}>Still have questions?</h2>
              <p className={styles.ctaDescription}>
                We're here to help! If you don't see your question answered above, 
                please reach out to us directly.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.ctaButton}>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 