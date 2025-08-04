import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Feature from '../components/feature';
import { features } from '../components/feature-config';
import FeaturesTwo from '../components/featuresTwo';
import { featuresTwo } from '../components/featuresTwo-config';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <div className={styles.navbarWhiteRectangle}></div>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src='img/flowave/flowave-wordmark.png' alt='Flowave wordmark'></img>
          <p className={classnames('hero--subtitle')}>{siteConfig.tagline}</p>
          <p className={styles.flowaveDescription}>Flowave is a modern, open source workflow orchestration engine tailored for regulated industries.</p>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className={styles.buttons}>
          <Link
            className={classnames(
              'button button--outline button--secondary button--lg',
              styles.button,
              styles.getStartedButton
            )}
            to={''}>
            Get Started
          </Link>
          <Link
            className={classnames(
              'button button--outline button--secondary button--lg',
              styles.button,
              styles.joinCommunityButton
            )}
            to={''}>
            Join the Community
          </Link>
        </div>
        <div>
        <img className={styles.flowaveCapabilities} src='img/flowave/flowave-capabilities-icons.png' alt='icons representing the capabilities of Flowave'></img>
        </div>
        <div className={styles.mainDescription}>
          Backed by FINOS/Linux Foundation, Flowave empowers digitization through process orchestration, helping organizations to increase straight through processing(STP) by automating complex processes involving multiple endpoints via BPM workflows.
          <div>Flowave is open source and available under Apache 2.0 OSI compliance license</div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;