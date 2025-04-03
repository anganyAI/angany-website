import React from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string | React.ReactNode;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Natural Language Programming',
    icon: <img src="/img/talk.jpeg" alt="Talk icon" className={styles.featureImage} />,
    description: (
      <>
        Forget complex configuration interfaces. With Angany.ai, simply explain what you want in conversational language, and the AI handles the technical implementation.
      </>
    ),
  },
  {
    title: 'Unlimited Adaptability',
    icon: <img src="/img/open.jpeg" alt="Open icon" className={styles.featureImage} />,
    description: (
      <>
        Our platform grows with your needs. As requirements change, the AI adapts without requiring new development or expensive upgrades.
      </>
    ),
  },
  {
    title: 'Seamless Integration',
    icon: <img src="/img/plug.jpeg" alt="Plug icon" className={styles.featureImage} />,
    description: (
      <>
        Angany.ai connects effortlessly with your existing business systems, enhancing them with AI capabilities rather than replacing them.
      </>
    ),
  },
  {
    title: 'Intelligent Call Management',
    icon: <img src="/img/phone.jpeg" alt="Phone icon" className={styles.featureImage} />,
    description: (
      <>
        From basic routing to complex interactive experiences, the AI manages calls with natural conversation flow, eliminating the frustration of traditional IVR systems.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.featuresTitle}>Key Features That Set Us Apart</h2>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
