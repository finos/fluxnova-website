import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import Feature from "../components/feature";
import { features } from "../components/feature-config";
import { HomeConfig as pageConfig } from "../page-content/home.config";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img
            className="fluxnova-image"
            src="/img/Fluxnova-wordmark-Wht.svg"
            alt="Fluxnova wordmark"
          ></img>
          <p className={classnames("hero--subtitle")}>{siteConfig.tagline}</p>
          <p className={styles.fluxnovaDescription}>
            Fluxnova is a modern, open source workflow orchestration engine
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
          {pageConfig.buttons && pageConfig.buttons.length && (
            <div className={styles.buttons}>
              {pageConfig.buttons.map((props, idx) => (
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
            className={styles.fluxnovaCapabilities}
            src="/img/fluxnova/fluxnova-capabilities-icons.png"
            alt="icons representing the capabilities of Fluxnova"
          ></img>
        </div>
        <div className={styles.mainDescription}>
          Backed by FINOS/Linux Foundation, Fluxnova empowers digitization
          through process orchestration, helping organizations to increase
          straight through processing(STP) by automating complex processes
          involving multiple endpoints via BPM workflows.
          <div>
            Fluxnova is open source and available under Apache 2.0 OSI
            compliance license
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
