import React from "react";
import Layout from "@theme/Layout";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import { HomeConfig as pageConfig } from "../page-content/home.config";
import TextBlock from "../components/blocks/text-block";
import ConferenceSticker from "../components/conference-promo/conference-sticker";
import ConferenceBand from "../components/conference-promo/conference-band";
import styles from "./styles.module.scss";

function Home() {
  return (
    <Layout>
      <div className={styles.homeShell}>
        <ConferenceSticker />
        <header className="hero-banner">
          <TextBlock config={pageConfig.heroSection} />
        </header>
        <main>
          <TextBlock config={pageConfig.featuresSection} />
          <ConferenceBand />
          <div className={classnames(styles.buttonsWrapper)}>
            <div className={classnames(styles.buttons)}>
              <button className="primary">
                <Link to="https://docs.fluxnova.finos.org">Get Started</Link>
              </button>
              <button className="secondary">
                <Link to="https://github.com/finos/fluxnova-bpm-platform/discussions">
                  Join the Community
                </Link>
              </button>
            </div>
          </div>
          <section
            className={styles.capabilitiesSection}
            aria-labelledby="home-capabilities-heading"
          >
            <div className={styles.capabilitiesInner}>
              <h2
                id="home-capabilities-heading"
                className={styles.capabilitiesTitle}
              >
                Fluxnova Capabilities
              </h2>
              <ul className={styles.capabilitiesGrid}>
                {pageConfig.capabilities.map((item) => (
                  <li key={item.label} className={styles.capabilityItem}>
                    <img
                      src={`/img/icons/${item.iconName}.png`}
                      alt=""
                      aria-hidden="true"
                    />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <div className={classnames(styles.mainDescription)}>
            Backed by FINOS/Linux Foundation, Fluxnova empowers digitization
            through process orchestration, helping organizations to increase
            straight through processing (STP) by automating complex processes
            involving multiple endpoints via BPM workflows.
            <div>
              Fluxnova is opensource and available under the Apache 2.0 licence,
              compliant with OSI standards.
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Home;
