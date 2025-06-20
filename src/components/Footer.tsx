import React from 'react';
import Link from '@docusaurus/Link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Top gradient line */}
        <div className={styles.topGradientLine}></div>

        {/* Middle separator line */}
        <div className={styles.middleSeparatorLine}></div>

        {/* Logo and brand section */}
        <div className={styles.brandSection}>
          <div className={styles.brandContent}>
            <div className={styles.logoSection}>
              <img 
                src="/img/landing/favicon-logo.png" 
                alt="Angany.ai logo"
                className={styles.logoImage}
              />
              <div className={styles.logoText}>
                <span className={styles.logoBlue}>Angany</span>
                <span className={styles.logoWhite}>.ai</span>
              </div>
            </div>
            <div className={styles.brandDescription}>
              Reimagining telecommunications with AI at its core — speak your vision, let AI build it.
            </div>
          </div>
          <div className={styles.socialIcons}>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>

        {/* Main content area */}
        <div className={styles.mainContent}>
          {/* About column */}
          <div className={styles.footerColumn}>
            <div className={styles.columnTitle}>About</div>
            <div className={styles.columnLinks}>
              <Link to="/vision" className={styles.footerLink}>
                Our vision
              </Link>
              <Link to="/features" className={styles.footerLink}>
                Features
              </Link>
              <Link to="/roadmap" className={styles.footerLink}>
                Roadmap
              </Link>
            </div>
          </div>

          {/* Resources column */}
          <div className={styles.footerColumn}>
            <div className={styles.columnTitle}>Ressources</div>
            <div className={styles.columnLinks}>
              <Link to="/docs/welcome/intro" className={styles.footerLink}>
                Documentation
              </Link>
              <Link to="/docs/api" className={styles.footerLink}>
                API Documentation
              </Link>
              <Link to="/faq" className={styles.footerLink}>
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact column */}
          <div className={styles.footerColumn}>
            <div className={styles.columnTitle}>Contact</div>
            <div className={styles.columnLinks}>
              <Link to="/contact" className={styles.footerLink}>
                Contact us
              </Link>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                Github
              </a>
            </div>
          </div>

          {/* Newsletter column */}
          <div className={styles.newsletterSection}>
            <div className={styles.newsletterTitle}>Be notified</div>
            <div className={styles.newsletterSubtitle}>
              When cool new stuff is published
            </div>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Email address"
                className={styles.newsletterInput}
              />
              <button className={styles.subscribeButton}>
                subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            2025© Angany.ai, all rights reserved
          </div>
          <div className={styles.legalLinks}>
            <div className={styles.legalLink}>Terms & conditions</div>
            <div className={styles.separator}>|</div>
            <div className={styles.legalLink}>Privacy policy</div>
          </div>
        </div>
      </div>
    </footer>
  );
} 