import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import type {ReactNode} from 'react';

export default function Vision(): ReactNode {
  return (
    <Layout
      title="Our Vision | Angany.ai"
      description="Reimagining Telecommunications from the Ground Up">
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Reimagining Telecommunications from the Ground Up</h1>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className={styles.content}>
              <p className={styles.intro}>
                At Angany.ai, we're not just improving existing telecommunications systems—we're fundamentally 
                reimagining them for the AI era.
              </p>
              
              <p>
                Traditional telecommunications platforms are built around predefined features, requiring development 
                for each new capability. Our revolutionary approach places AI at the core of the system, creating 
                a paradigm shift in how enterprise communications are conceived, configured, and operated.
              </p>

              <div className={styles.statement}>
                <h2>Vision Statement</h2>
                <p>
                  We envision a world where telecommunications systems adapt to humans, not the other way around. 
                  Where adding new capabilities is as simple as explaining what you want in natural language. 
                  Where your communication infrastructure becomes an intelligent partner in your business operations.
                </p>
              </div>

              <div className={styles.statement}>
                <h2>Mission Statement</h2>
                <p>
                  Angany.ai's mission is to provide enterprises with a telecommunications solution that adapts 
                  precisely to their needs through AI and natural language. We're building a future where 
                  communication systems are infinitely flexible, immediately responsive, and genuinely intelligent.
                </p>
              </div>

              <h2>The Revolutionary Approach</h2>
              
              <div className={styles.comparison}>
                <div className={styles.comparisonColumn}>
                  <h3>Traditional Approach</h3>
                  <ul>
                    <li>Predetermined functionality defined by developers</li>
                    <li>Complex configuration interfaces requiring technical expertise</li>
                    <li>Siloed features with limited integration capabilities</li>
                    <li>Long development cycles for new features</li>
                  </ul>
                </div>
                
                <div className={styles.comparisonColumn}>
                  <h3>Angany.ai's Approach</h3>
                  <ul>
                    <li>AI core that adapts to specific needs</li>
                    <li>Natural language configuration accessible to everyone</li>
                    <li>Unified intelligence that connects all communication channels</li>
                    <li>Immediate adaptation through conversation with the AI</li>
                  </ul>
                </div>
              </div>

              <h2>Our Objectives</h2>
              
              <div className={styles.objective}>
                <h3>Short-Term (1 Year)</h3>
                <p>
                  Deliver a streamlined platform that intelligently manages incoming calls, acting as a 
                  sophisticated AI assistant for callers.
                </p>
              </div>
              
              <div className={styles.objective}>
                <h3>Medium-Term (2-3 Years)</h3>
                <p>
                  Expand capabilities to handle all incoming telecommunications seamlessly, becoming the 
                  intelligent gateway for all external communications.
                </p>
              </div>
              
              <div className={styles.objective}>
                <h3>Long-Term (5+ Years)</h3>
                <p>
                  Replace traditional telecommunication systems entirely, establishing a new standard where 
                  AI-powered adaptability is the foundation of enterprise communications.
                </p>
              </div>

              <div className={styles.founderNote}>
                <h2>Founder's Note</h2>
                <p>
                  Angany.ai represents my vision for the future of telecommunications—a future where the 
                  incredible power of AI is not just a feature but the fundamental architecture that powers 
                  our communications. I believe this approach will transform how businesses communicate, 
                  making systems more adaptable, more capable, and ultimately more human.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 