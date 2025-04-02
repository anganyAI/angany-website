import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import type {ReactNode} from 'react';

export default function Contact(): ReactNode {
  return (
    <Layout
      title="Contact Us | Angany.ai"
      description="Get in touch with the Angany.ai team">
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Contact Us</h1>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <div className={styles.contactBox}>
              <h2>Join Our Journey</h2>
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
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" className={styles.formControl} placeholder="Enter your name" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address*</label>
                  <input type="email" id="email" className={styles.formControl} placeholder="Enter your email address" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" className={styles.formControl} placeholder="Enter your company name" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="interest">Your Interest</label>
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
                  <label htmlFor="message">Message (Optional)</label>
                  <textarea id="message" className={styles.formControl} rows={4} placeholder="How can we help you?"></textarea>
                </div>
                
                <div className={styles.formGroup}>
                  <div className={styles.checkboxGroup}>
                    <input type="checkbox" id="consent" required />
                    <label htmlFor="consent">I agree to receive updates about Angany.ai*</label>
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
              <h2>Other Ways to Connect</h2>
              
              <div className={styles.contactMethod}>
                <h3>Email</h3>
                <p>For general inquiries: <a href="mailto:sylvainboilydroid@gmail.com">sylvainboilydroid@gmail.com</a></p>
              </div>
              
              <div className={styles.contactMethod}>
                <h3>Location</h3>
                <p>Angany.ai is based in Quebec, Canada.</p>
              </div>
              
              <div className={styles.contactMethod}>
                <h3>Follow Us</h3>
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
    </Layout>
  );
} 
