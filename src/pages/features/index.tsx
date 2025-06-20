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

export default function Features(): ReactNode {
  const pageTitle = "Features | Angany.ai";
  const pageDescription = "How Angany.ai Works - AI at the Core of Telecommunications";

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
            How <span className={styles.highlightText}>Angany.ai</span> Works
          </h1>
          <p className={styles.pageSubtitle}>
            AI at the Core of Telecommunications
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.introSection}>
            <p className={styles.intro}>
              Angany.ai represents a fundamental shift in telecommunications architecture. By placing 
              AI at the core rather than as a peripheral feature, we've created a system with unprecedented 
              flexibility and intelligence.
            </p>
          </div>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technical Architecture</h2>
            <div className={styles.architectureCard}>
              <p className={styles.cardText}>
                At the heart of Angany.ai is an agent based on Vocode technology. When a voice call arrives:
              </p>
              <ol className={styles.processList}>
                <li>The system creates a conversation session</li>
                <li>A transcriber converts voice to text</li>
                <li>AI processes the text and determines appropriate actions</li>
                <li>A synthesizer converts the AI's response back to voice</li>
                <li>The process continues fluidly, creating natural conversation</li>
              </ol>
              <p className={styles.cardText}>
                Beyond this core, the system connects to n8n for workflow intelligence and integrates with 
                business systems through APIs, webhooks, and direct connections.
              </p>
              <p className={styles.cardText}>
                All components operate independently yet communicate through a centralized catalog, allowing 
                for tremendous flexibility and scalability.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Key Capabilities</h2>
            
            <div className={styles.capabilityCard}>
              <h3 className={styles.capabilityTitle}>Natural Language Configuration</h3>
              <div className={styles.capabilityContent}>
                <h4 className={styles.capabilitySubtitle}>How it works</h4>
                <p className={styles.capabilityText}>
                  Instead of navigating complex menus and settings, administrators simply have a conversation 
                  with the AI, explaining what they want the system to do. The AI handles the technical 
                  implementation automatically.
                </p>
                <h4 className={styles.capabilitySubtitle}>Example</h4>
                <div className={styles.exampleBox}>
                  "I want to set up a system where calls about technical support go to the IT team during business 
                  hours, but after hours, they should receive information about our online knowledge base and an 
                  option to leave a message."
                </div>
              </div>
            </div>

            <div className={styles.capabilityCard}>
              <h3 className={styles.capabilityTitle}>Intelligent Call Handling</h3>
              <div className={styles.capabilityContent}>
                <h4 className={styles.capabilitySubtitle}>How it works</h4>
                <p className={styles.capabilityText}>
                  The system understands caller intent through natural conversation rather than forcing callers 
                  through rigid menu trees. It can handle complex scenarios, gather information, and route 
                  appropriately—all while maintaining a natural conversational flow.
                </p>
                <h4 className={styles.capabilitySubtitle}>Example</h4>
                <div className={styles.exampleBox}>
                  A caller can simply say, "I need to reschedule my appointment from Tuesday to Thursday," and 
                  the AI understands the intent, accesses the appropriate systems, and handles the change.
                </div>
              </div>
            </div>

            <div className={styles.capabilityCard}>
              <h3 className={styles.capabilityTitle}>Seamless System Integration</h3>
              <div className={styles.capabilityContent}>
                <h4 className={styles.capabilitySubtitle}>How it works</h4>
                <p className={styles.capabilityText}>
                  Angany.ai connects to your existing business systems through various protocols (APIs, webhooks, 
                  WebSockets), allowing the AI to access and manipulate data across your organization.
                </p>
                <h4 className={styles.capabilitySubtitle}>Example</h4>
                <div className={styles.exampleBox}>
                  When a customer calls, the AI can instantly access their purchase history from your CRM, appointment 
                  information from your scheduling system, and account status from your billing system—providing 
                  contextually appropriate responses.
                </div>
              </div>
            </div>

            <div className={styles.capabilityCard}>
              <h3 className={styles.capabilityTitle}>Scalable Architecture</h3>
              <div className={styles.capabilityContent}>
                <h4 className={styles.capabilitySubtitle}>How it works</h4>
                <p className={styles.capabilityText}>
                  Built on cloud-native principles, the system can scale from handling a few calls to thousands 
                  simultaneously. Components are modular and independent, allowing for limitless growth.
                </p>
                <h4 className={styles.capabilitySubtitle}>Example</h4>
                <div className={styles.exampleBox}>
                  A business can start with basic call handling and gradually expand to complex telecommunications 
                  workflows across multiple departments and locations without changing platforms.
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technology Stack</h2>
            <div className={styles.techStackCard}>
              <p className={styles.cardText}>Angany.ai leverages proven technologies including:</p>
              <ul className={styles.techList}>
                <li><strong>Kamailio:</strong> For robust SIP routing</li>
                <li><strong>Asterisk:</strong> For telecommunication functionality</li>
                <li><strong>n8n:</strong> For workflow automation</li>
                <li><strong>Vocode:</strong> For voice-to-text and text-to-voice processing</li>
                <li><strong>Custom Components:</strong> Developed specifically to integrate these technologies seamlessly</li>
              </ul>
              <p className={styles.cardText}>
                Additionally, users can choose between cloud-based or on-premises AI models depending on their 
                computing resources and data confidentiality requirements.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Security and Privacy</h2>
            <div className={styles.securityCard}>
              <p className={styles.cardText}>Security is foundational to Angany.ai:</p>
              <ul className={styles.securityList}>
                <li><strong>Data Storage Choice:</strong> Businesses control where their data is stored</li>
                <li><strong>Encrypted Communications:</strong> Using technologies like WebRTC with SRTP or SIP TLS</li>
                <li><strong>On-Premises Options:</strong> Ability to host the engine on-site if required</li>
                <li><strong>AI Selection:</strong> Freedom to choose which AI models to utilize</li>
                <li><strong>Regulatory Compliance:</strong> Adherence to applicable standards and regulations</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 