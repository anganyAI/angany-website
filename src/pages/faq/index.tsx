import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import type {ReactNode} from 'react';

interface FAQItem {
  question: string;
  answer: ReactNode;
}

export default function FAQ(): ReactNode {
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
            You can <a href="/contact">join our waitlist</a> to be among the first to experience Angany.ai 
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
            <a href="/contact"> contact us</a> to discuss possibilities for collaboration.
          </p>
        </>
      ),
    },
  ];

  return (
    <Layout
      title="FAQ | Angany.ai"
      description="Frequently Asked Questions about Angany.ai">
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Frequently Asked Questions</h1>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
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

            <div className={styles.ctaBox}>
              <h2>Still have questions?</h2>
              <p>
                We're here to help! If you don't see your question answered above, 
                please reach out to us directly.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className="button button--primary button--lg">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 