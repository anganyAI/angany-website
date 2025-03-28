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

function TimelineSection() {
  return (
    <section className={styles.timelineSection} id="journey">
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
        <TimelineSection />
        <SubscriptionSection />
      </main>
    </Layout>
  );
}
