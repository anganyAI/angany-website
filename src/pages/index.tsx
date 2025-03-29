import React from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>
          Experience the next generation of enterprise telecommunications where AI doesn't just assist—it powers the entire system. 
          Configure through natural language, automate intelligently, and adapt your communication systems effortlessly.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/#journey">
            FOLLOW OUR JOURNEY
          </Link>
          <Link
            className="button button--outline button--lg button--secondary"
            style={{marginLeft: '1rem'}}
            to="/features">
            DISCOVER HOW IT WORKS
          </Link>
        </div>
      </div>
    </header>
  );
}

function ProblemSolutionSection() {
  return (
    <section className={styles.problemSolutionSection}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.sectionTitle}>Breaking Free from Traditional Limitations</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--6">
            <div className={styles.problemBlock}>
              <h3>Today's Challenges</h3>
              <ul>
                <li>
                  <strong>Rigid Functionality:</strong> Today's telecommunication systems lock you into pre-defined features developed by vendors. Your needs must adapt to the system, not the other way around.
                </li>
                <li>
                  <strong>Complex Configuration:</strong> Setting up and modifying traditional systems requires technical expertise, specialized knowledge, and often expensive consultants.
                </li>
                <li>
                  <strong>Time-Consuming Management:</strong> Staff spend valuable time managing calls and communications rather than focusing on core business tasks.
                </li>
              </ul>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.solutionBlock}>
              <h3>The Angany.ai Solution</h3>
              <ul>
                <li>
                  <strong>AI-Powered Flexibility:</strong> Angany.ai uses artificial intelligence as its core engine, allowing virtually unlimited functionality that adapts to your needs rather than forcing you to adapt.
                </li>
                <li>
                  <strong>Natural Language Configuration:</strong> Simply tell the AI what you want in plain language. No technical knowledge required—just describe your needs, and the system configures itself.
                </li>
                <li>
                  <strong>Intelligent Automation:</strong> Let AI handle your communications intelligently. From call routing to appointment setting, the system learns and adapts to deliver precisely what you need.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderJourneySection() {
  return (
    <section className={styles.founderJourneySection} id="journey">
      <div className="container">
        <div className={styles.sectionHeading}>
          <h2>From Wazo to Angany.ai: A Founder's Evolution</h2>
          <p>Why I created a fundamentally different approach to telecommunications</p>
        </div>
        
        <div className={styles.journeyContent}>
          {/* Commented out the image div for now until a proper founder image is provided
          <div className={styles.founderImage}>
            <img src="/img/founder.jpg" alt="Founder of Wazo and Angany.ai" />
          </div>
          */}
          
          <div className={styles.founderStory}>
            <p className={styles.highlightText}>As the founder of both Wazo and Angany.ai, I've had a unique perspective on the evolution of enterprise communications.</p>
            
            <p>Wazo represented my vision for open, flexible telecommunications—a platform where developers and technical teams could build exactly what they needed through APIs and customization. It empowered those with technical expertise to create tailored communication solutions.</p>
            
            <p>But I realized something fundamental was missing: accessibility. The power of advanced telecommunications remained locked behind technical barriers, inaccessible to many businesses that could benefit from them.</p>
            
            <p>This realization led to Angany.ai—not as an iteration of Wazo, but as a complete reimagining of how telecommunications systems should work in the AI era.</p>
            
            <p className={styles.highlightText}>With Angany.ai, I'm placing artificial intelligence at the core rather than the periphery, fundamentally changing how we interact with communication systems.</p>
          </div>
        </div>
        
        <div className={styles.comparisonContainer}>
          <h3>Two Different Approaches to the Same Vision</h3>
          
          <div className={styles.comparisonCards}>
            <div className={`${styles.comparisonCard} ${styles.wazo}`}>
              <div className={styles.cardHeader}>
                <h4>Wazo</h4>
                <span className={styles.approachLabel}>Technical Enablement</span>
              </div>
              <ul className={styles.approachList}>
                <li><strong>For:</strong> Developers, service providers & technical teams</li>
                <li><strong>Approach:</strong> API-centric, code-driven customization</li>
                <li><strong>Philosophy:</strong> Unlimited flexibility through technical means</li>
                <li><strong>Configuration:</strong> Technical interfaces and code</li>
                <li><strong>Innovation:</strong> Open platform for technical customization</li>
              </ul>
            </div>
            
            <div className={`${styles.comparisonCard} ${styles.angany}`}>
              <div className={styles.cardHeader}>
                <div className={styles.logoHeader}>
                  <h4>Angany.ai</h4>
                  <img src="/img/logo/logo-without-text.png" alt="Angany.ai Logo" className={styles.cardLogo} />
                </div>
                <span className={styles.approachLabel}>AI-Driven Democratization</span>
              </div>
              <ul className={styles.approachList}>
                <li><strong>For:</strong> Businesses of all sizes, regardless of technical expertise</li>
                <li><strong>Approach:</strong> Natural language interaction with AI core</li>
                <li><strong>Philosophy:</strong> Unlimited flexibility through conversation</li>
                <li><strong>Configuration:</strong> Simply tell the AI what you want</li>
                <li><strong>Innovation:</strong> AI as the fundamental architecture</li>
              </ul>
            </div>
          </div>
          
          <div className={styles.keyInsight}>
            <p>Where Wazo empowers through technical tools, Angany.ai liberates through natural conversation. They're not competitors but complementary visions for different needs and capabilities.</p>
            <p className={styles.highlightText}>Angany.ai isn't just about adding AI to telecommunications—it's about completely reimagining what's possible when AI becomes the foundation rather than a feature.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className={styles.timelineSection} id="timeline">
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.sectionTitle}>Our Development Journey</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--4">
            <div className={styles.timelineCard}>
              <h3>Phase 1: Proof of Concept</h3>
              <ul>
                <li className={styles.completed}>Successfully demonstrated technical feasibility</li>
                <li className={styles.completed}>Core AI integration established</li>
              </ul>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.timelineCard}>
              <h3>Phase 2: First Client Implementation</h3>
              <ul>
                <li>Targeted for Q2 2025</li>
                <li>Limited release to select partners</li>
              </ul>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.timelineCard}>
              <h3>Phase 3: Full Market Release</h3>
              <ul>
                <li>Expected Q4 2025 - Q1 2026</li>
                <li>Complete feature set deployment</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col--12 text--center padding-top--md">
            <Link
              className="button button--primary button--lg"
              to="/roadmap">
              VIEW DETAILED ROADMAP
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SubscriptionSection() {
  return (
    <section className={styles.subscriptionSection}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.sectionTitle}>Be Among the First to Experience Angany.ai</h2>
            <p className={styles.sectionSubtitle}>
              Join our exclusive list to receive development updates, early access opportunities, and insights into the future of AI-powered telecommunications.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col--6 col--offset-3">
            <form className={styles.subscriptionForm}>
              <input type="email" placeholder="Email Address" className={styles.subscriptionInput} />
              <select className={styles.subscriptionInput}>
                <option value="" disabled selected>Interest</option>
                <option value="user">Potential User</option>
                <option value="investor">Investor</option>
                <option value="partner">Partner</option>
                <option value="other">Other</option>
              </select>
              <div className={styles.checkboxContainer}>
                <input type="checkbox" id="consent" />
                <label htmlFor="consent">I agree to receive updates about Angany.ai</label>
              </div>
              <button type="submit" className="button button--primary button--block">JOIN THE WAITLIST</button>
              <p className={styles.privacyNote}>We respect your privacy. Your information will never be shared with third parties.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Angany.ai redefines enterprise communications by placing artificial intelligence at the heart of the platform.">
      <HomepageHeader />
      <main>
        <ProblemSolutionSection />
        <HomepageFeatures />
        <FounderJourneySection />
        <TimelineSection />
        <SubscriptionSection />
      </main>
    </Layout>
  );
}
