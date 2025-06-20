import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import styles from './Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.headerWrapper}>
      {/* Hidden navbar element for TOC JavaScript measurement */}
      <div 
        className="navbar navbar-measurement-hidden"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '60px',
          visibility: 'hidden',
          pointerEvents: 'none',
          zIndex: -1,
          opacity: 0
        }}
        aria-hidden="true"
      />
      
      <div className={styles.headerContainer}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img 
            src="/img/landing/favicon-logo.png" 
            alt="Angany.ai" 
            className={styles.logoImage}
          />
          <div className={styles.logoText}>
            <span className={styles.logoBlue}>Angany</span>
            <span className={styles.logoWhite}>.ai</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link to="/vision" className={styles.navLink}>
            Our vision
          </Link>
          <Link to="/features" className={styles.navLink}>
            Features
          </Link>
          <Link to="/roadmap" className={styles.navLink}>
            Roadmap
          </Link>
          <Link to="/#pricing" className={styles.navLink}>
            Pricing
          </Link>
          <Link to="/docs/welcome/intro" className={styles.navLink}>
            Documentation
          </Link>
          <Link to="/faq" className={styles.navLink}>
            FAQ
          </Link>
        </nav>
        
        {/* Desktop CTA Button */}
        <Link to="https://beta.angany.ai/sign-up" className={styles.ctaButton}>
          <span>Get started</span>
          <img src="/img/landing/header-button-arrow-icon.svg" alt="" className={styles.ctaIcon} />
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className={styles.mobileMenuToggle}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <nav className={styles.mobileNavContent}>
          <Link 
            to="/vision" 
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our vision
          </Link>
          <Link 
            to="/features" 
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            to="/roadmap" 
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Roadmap
          </Link>
          <Link 
            to="/#pricing" 
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            to="/docs/welcome/intro" 
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Documentation
          </Link>
          <Link 
            to="/faq" 
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </Link>
          
          {/* Mobile CTA Button */}
          <Link 
            to="https://beta.angany.ai/sign-up" 
            className={styles.mobileCtaButton}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get started
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className={styles.mobileOverlay}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </div>
  );
} 