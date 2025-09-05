import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import Feature from "../components/feature";
import { features } from "../components/feature-config";
import { buttons } from "./landing-button-config";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <div className={styles.navbarWhiteRectangle}></div>
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img
            className="flowave-image"
            src="img/flowave/flowave-wordmark.png"
            alt="Flowave wordmark"
          ></img>
          <p className={classnames("hero--subtitle")}>{siteConfig.tagline}</p>
          <p className={styles.flowaveDescription}>
            Flowave is a modern, open source workflow orchestration engine
            tailored for regulated industries.
          </p>
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
        <div className={styles.buttonsWrapper}>
          {buttons && buttons.length && (
            <div className={styles.buttons}>
              {buttons.map((props, idx) => (
                <button className={props.style}>
                  <Link key={idx} to={props.url}>
                    {props.name}
                  </Link>
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <img
            className={styles.flowaveCapabilities}
            src="img/flowave/flowave-capabilities-icons.png"
            alt="icons representing the capabilities of Flowave"
          ></img>
        </div>
        <div className={styles.mainDescription}>
          Backed by FINOS/Linux Foundation, Flowave empowers digitization
          through process orchestration, helping organizations to increase
          straight through processing(STP) by automating complex processes
          involving multiple endpoints via BPM workflows.
          <div>
            Flowave is open source and available under Apache 2.0 OSI compliance
            license
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
