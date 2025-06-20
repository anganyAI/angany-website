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

export default function Contact(): ReactNode {
  const pageTitle = "Contact Us | Angany.ai";
  const pageDescription = "Get in touch with the Angany.ai team";

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
            <span className={styles.highlightText}>Contact</span> Us
          </h1>
          <p className={styles.pageSubtitle}>
            Get in touch with the Angany.ai team
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.contactSection}>
            <div className={styles.contactBox}>
              <h2 className={styles.sectionTitle}>Join Our Journey</h2>
              <p className={styles.contactIntro}>
                Be among the first to experience Angany.ai. Join our exclusive list to receive development 
                updates, early access opportunities, and insights into the future of AI-powered telecommunications.
              </p>
              
              <form className={styles.contactForm} onSubmit={(e) => {
                e.preventDefault();
                const email = document.getElementById('email') as HTMLInputElement;
                const name = document.getElementById('name') as HTMLInputElement;
                const company = document.getElementById('company') as HTMLInputElement;
                const interest = document.getElementById('interest') as HTMLSelectElement;
                const message = document.getElementById('message') as HTMLTextAreaElement;
                
                if (email && email.value) {
                  const subject = encodeURIComponent('Contact from Angany.ai Website');
                  const body = encodeURIComponent(
                    `Name: ${name ? name.value : 'Not provided'}\n` +
                    `Email: ${email.value}\n` +
                    `Company: ${company ? company.value : 'Not provided'}\n` +
                    `Interest: ${interest ? interest.options[interest.selectedIndex].text : 'Not provided'}\n\n` +
                    `Message:\n${message ? message.value : 'No message provided'}`
                  );
                  window.location.href = `mailto:sylvainboilydroid@gmail.com?subject=${subject}&body=${body}`;
                }
              }}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Your Name</label>
                  <input type="text" id="name" className={styles.formControl} placeholder="Enter your name" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email Address*</label>
                  <input type="email" id="email" className={styles.formControl} placeholder="Enter your email address" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="company" className={styles.formLabel}>Company</label>
                  <input type="text" id="company" className={styles.formControl} placeholder="Enter your company name" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="interest" className={styles.formLabel}>Your Interest</label>
                  <select id="interest" className={styles.formControl}>
                    <option value="">Select your interest</option>
                    <option value="user">Potential User</option>
                    <option value="investor">Investor</option>
                    <option value="partner">Integration Partner</option>
                    <option value="advisor">Industry Advisor</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Message (Optional)</label>
                  <textarea id="message" className={styles.formControl} rows={4} placeholder="How can we help you?"></textarea>
                </div>
                
                <div className={styles.formGroup}>
                  <div className={styles.checkboxGroup}>
                    <input type="checkbox" id="consent" className={styles.checkbox} required />
                    <label htmlFor="consent" className={styles.checkboxLabel}>I agree to receive updates about Angany.ai*</label>
                  </div>
                </div>
                
                <button type="submit" className={styles.submitButton}>JOIN THE WAITLIST</button>
                
                <p className={styles.privacyNote}>
                  We respect your privacy. Your information will never be shared with third parties.
                  <br />
                  *Required field
                </p>
              </form>
            </div>

            <div className={styles.contactInfo}>
              <h2 className={styles.sectionTitle}>Other Ways to Connect</h2>
              
              <div className={styles.contactMethod}>
                <h3 className={styles.methodTitle}>Email</h3>
                <p className={styles.methodText}>For general inquiries: <a href="mailto:sylvainboilydroid@gmail.com" className={styles.link}>sylvainboilydroid@gmail.com</a></p>
              </div>
              
              <div className={styles.contactMethod}>
                <h3 className={styles.methodTitle}>Location</h3>
                <p className={styles.methodText}>Angany.ai is based in Quebec, Canada.</p>
              </div>
              
              <div className={styles.contactMethod}>
                <h3 className={styles.methodTitle}>Follow Us</h3>
                <div className={styles.socialLinks}>
                  <a href="https://github.com/anganyAI" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 
