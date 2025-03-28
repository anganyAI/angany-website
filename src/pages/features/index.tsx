import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import type {ReactNode} from 'react';

export default function Features(): ReactNode {
  return (
    <Layout
      title="Features | Angany.ai"
      description="How Angany.ai Works - AI at the Core of Telecommunications">
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>How Angany.ai Works</h1>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className={styles.content}>
              <p className={styles.intro}>
                Angany.ai represents a fundamental shift in telecommunications architecture. By placing 
                AI at the core rather than as a peripheral feature, we've created a system with unprecedented 
                flexibility and intelligence.
              </p>
              
              <h2>Technical Architecture</h2>
              <div className={styles.architectureBox}>
                <p>
                  At the heart of Angany.ai is an agent based on Vocode technology. When a voice call arrives:
                </p>
                <ol>
                  <li>The system creates a conversation session</li>
                  <li>A transcriber converts voice to text</li>
                  <li>AI processes the text and determines appropriate actions</li>
                  <li>A synthesizer converts the AI's response back to voice</li>
                  <li>The process continues fluidly, creating natural conversation</li>
                </ol>
                <p>
                  Beyond this core, the system connects to n8n for workflow intelligence and integrates with 
                  business systems through APIs, webhooks, and direct connections.
                </p>
                <p>
                  All components operate independently yet communicate through a centralized catalog, allowing 
                  for tremendous flexibility and scalability.
                </p>
              </div>

              <h2>Key Capabilities</h2>
              
              <div className={styles.capability}>
                <h3>Natural Language Configuration</h3>
                <div className={styles.capabilityContent}>
                  <div className={styles.capabilityDescription}>
                    <h4>How it works</h4>
                    <p>
                      Instead of navigating complex menus and settings, administrators simply have a conversation 
                      with the AI, explaining what they want the system to do. The AI handles the technical 
                      implementation automatically.
                    </p>
                    <h4>Example</h4>
                    <p className={styles.example}>
                      "I want to set up a system where calls about technical support go to the IT team during business 
                      hours, but after hours, they should receive information about our online knowledge base and an 
                      option to leave a message."
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.capability}>
                <h3>Intelligent Call Handling</h3>
                <div className={styles.capabilityContent}>
                  <div className={styles.capabilityDescription}>
                    <h4>How it works</h4>
                    <p>
                      The system understands caller intent through natural conversation rather than forcing callers 
                      through rigid menu trees. It can handle complex scenarios, gather information, and route 
                      appropriately—all while maintaining a natural conversational flow.
                    </p>
                    <h4>Example</h4>
                    <p className={styles.example}>
                      A caller can simply say, "I need to reschedule my appointment from Tuesday to Thursday," and 
                      the AI understands the intent, accesses the appropriate systems, and handles the change.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.capability}>
                <h3>Seamless System Integration</h3>
                <div className={styles.capabilityContent}>
                  <div className={styles.capabilityDescription}>
                    <h4>How it works</h4>
                    <p>
                      Angany.ai connects to your existing business systems through various protocols (APIs, webhooks, 
                      WebSockets), allowing the AI to access and manipulate data across your organization.
                    </p>
                    <h4>Example</h4>
                    <p className={styles.example}>
                      When a customer calls, the AI can instantly access their purchase history from your CRM, appointment 
                      information from your scheduling system, and account status from your billing system—providing 
                      contextually appropriate responses.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.capability}>
                <h3>Scalable Architecture</h3>
                <div className={styles.capabilityContent}>
                  <div className={styles.capabilityDescription}>
                    <h4>How it works</h4>
                    <p>
                      Built on cloud-native principles, the system can scale from handling a few calls to thousands 
                      simultaneously. Components are modular and independent, allowing for limitless growth.
                    </p>
                    <h4>Example</h4>
                    <p className={styles.example}>
                      A business can start with basic call handling and gradually expand to complex telecommunications 
                      workflows across multiple departments and locations without changing platforms.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Technology Stack</h2>
              <div className={styles.techStack}>
                <p>Angany.ai leverages proven technologies including:</p>
                <ul>
                  <li><strong>Kamailio:</strong> For robust SIP routing</li>
                  <li><strong>Asterisk:</strong> For telecommunication functionality</li>
                  <li><strong>n8n:</strong> For workflow automation</li>
                  <li><strong>Vocode:</strong> For voice-to-text and text-to-voice processing</li>
                  <li><strong>Custom Components:</strong> Developed specifically to integrate these technologies seamlessly</li>
                </ul>
                <p>
                  Additionally, users can choose between cloud-based or on-premises AI models depending on their 
                  computing resources and data confidentiality requirements.
                </p>
              </div>

              <h2>Security and Privacy</h2>
              <div className={styles.securityBox}>
                <p>Security is foundational to Angany.ai:</p>
                <ul>
                  <li><strong>Data Storage Choice:</strong> Businesses control where their data is stored</li>
                  <li><strong>Encrypted Communications:</strong> Using technologies like WebRTC with SRTP or SIP TLS</li>
                  <li><strong>On-Premises Options:</strong> Ability to host the engine on-site if required</li>
                  <li><strong>AI Selection:</strong> Freedom to choose which AI models to utilize</li>
                  <li><strong>Regulatory Compliance:</strong> Adherence to applicable standards and regulations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 