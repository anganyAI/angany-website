import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import type {ReactNode} from 'react';

export default function Roadmap(): ReactNode {
  return (
    <Layout
      title="Roadmap | Angany.ai"
      description="Our Journey to Redefine Telecommunications">
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Our Journey to Redefine Telecommunications</h1>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className={styles.content}>
              <p className={styles.intro}>
                Angany.ai is being developed with a clear vision and methodical approach. Here's our 
                development roadmap, showing where we've been and where we're headed.
              </p>
              
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={`${styles.timelineMarker} ${styles.completed}`} />
                  <div className={styles.timelineContent}>
                    <h2>Phase 1: Concept Validation</h2>
                    <p className={styles.timelineDate}>Completed</p>
                    <ul>
                      <li className={styles.completedItem}>Initial architecture design</li>
                      <li className={styles.completedItem}>Technology stack selection</li>
                      <li className={styles.completedItem}>Basic prototype development</li>
                      <li className={styles.completedItem}>Technical feasibility demonstration</li>
                      <li className={styles.completedItem}>Core AI integration proof of concept</li>
                    </ul>
                  </div>
                </div>
                
                <div className={styles.timelineItem}>
                  <div className={`${styles.timelineMarker} ${styles.completed}`} />
                  <div className={styles.timelineContent}>
                    <h2>Phase 2: First Prototype</h2>
                    <p className={styles.timelineDate}>Completed</p>
                    <ul>
                      <li className={styles.completedItem}>Development of core voice agent</li>
                      <li className={styles.completedItem}>Integration of basic telephony primitives</li>
                      <li className={styles.completedItem}>Implementation of first use case: intelligent call answering</li>
                      <li className={styles.completedItem}>Limited testing with controlled scenarios</li>
                      <li className={styles.completedItem}>Feedback incorporation and iteration</li>
                    </ul>
                  </div>
                </div>
                
                <div className={styles.timelineItem}>
                  <div className={`${styles.timelineMarker} ${styles.current}`} />
                  <div className={styles.timelineContent}>
                    <h2>Phase 3: Alpha Release</h2>
                    <p className={styles.timelineDate}>Current Phase</p>
                    <ul>
                      <li>Onboarding first client partners</li>
                      <li>Implementation of basic CRM integrations</li>
                      <li>Development of administration interface</li>
                      <li>Security protocol implementation</li>
                      <li>Performance optimization for scale</li>
                    </ul>
                  </div>
                </div>
                
                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker} />
                  <div className={styles.timelineContent}>
                    <h2>Phase 4: Beta Expansion</h2>
                    <p className={styles.timelineDate}>12-18 Months</p>
                    <ul>
                      <li>Expansion to multiple client scenarios</li>
                      <li>Advanced integration capabilities</li>
                      <li>Development of monitoring and analytics</li>
                      <li>Enhanced natural language capabilities</li>
                      <li>Broader API ecosystem</li>
                    </ul>
                  </div>
                </div>
                
                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker} />
                  <div className={styles.timelineContent}>
                    <h2>Phase 5: Full Market Release</h2>
                    <p className={styles.timelineDate}>18-24 Months</p>
                    <ul>
                      <li>Complete feature set deployment</li>
                      <li>Comprehensive documentation</li>
                      <li>Partner program establishment</li>
                      <li>Integration marketplace launch</li>
                      <li>Enterprise-grade support structure</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className={styles.sectionTitle}>Development Priorities</h2>
              
              <div className={styles.prioritiesGrid}>
                <div className={styles.priorityCard}>
                  <h3>Voice Agent Development</h3>
                  <p>
                    Building a robust, natural-sounding voice interface that handles complex conversations fluidly.
                  </p>
                </div>
                
                <div className={styles.priorityCard}>
                  <h3>Platform Industrialization</h3>
                  <p>
                    Ensuring the system is reliable, scalable, and enterprise-ready while maintaining flexibility.
                  </p>
                </div>
                
                <div className={styles.priorityCard}>
                  <h3>Integration Framework</h3>
                  <p>
                    Creating a comprehensive system for connecting with various business applications and services.
                  </p>
                </div>
                
                <div className={styles.priorityCard}>
                  <h3>Security & Compliance</h3>
                  <p>
                    Implementing rigorous security measures and ensuring regulatory compliance across different regions.
                  </p>
                </div>
                
                <div className={styles.priorityCard}>
                  <h3>Administration & Analytics</h3>
                  <p>
                    Developing intuitive tools for system management and performance monitoring.
                  </p>
                </div>
              </div>

              <div className={styles.financialBox}>
                <h2>Financial Trajectory</h2>
                <p>We have ambitious but achievable financial goals:</p>
                <ul>
                  <li><strong>Year 1:</strong> Annual Recurring Revenue (ARR) of €150K</li>
                  <li><strong>Year 2:</strong> ARR growth to €500K</li>
                  <li><strong>Year 3:</strong> ARR target of €1M</li>
                </ul>
              </div>

              <div className={styles.joinBox}>
                <h2>Join Our Journey</h2>
                <p>Interested in being part of our development journey? We're seeking:</p>
                <ul>
                  <li><strong>Early Testers:</strong> Help us refine the platform with real-world feedback</li>
                  <li><strong>Integration Partners:</strong> Work with us to expand the platform's capabilities</li>
                  <li><strong>Industry Advisors:</strong> Share your expertise to shape our roadmap</li>
                </ul>
                <div className={styles.joinCta}>
                  <a href="/contact" className="button button--primary button--lg">
                    Get Involved
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 