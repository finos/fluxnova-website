import React from "react";
import classnames from "classnames";
import Feature from "../components/feature";
import ModelerIcon from "/img/icons/modeler.svg";
import EngineIcon from "/img/icons/engine.svg";
import APIIcon from "/img/icons/api.svg";
import MonitoringIcon from "/img/icons/monitoring.svg";
import styles from "../pages/styles.module.scss";
import Link from "@docusaurus/Link";

export const HomeConfig = {
  heroSection: {
    className: "hero-banner vertical-flex",
    elements: [
      <img
        className="fluxnova-image"
        src="/img/Fluxnova-wordmark-Wht.svg"
        alt="Fluxnova wordmark"
      />,
      <p className="hero--subtitle">AUTOMATE, ORCHESTRATE, and ACCELERATE</p>,
      <p className="fluxnova-description">
        Fluxnova is a new opensource BPM platform which aims to provide
        automation and orchestration capabilities to accelerate the digitization
        of end to end process or workflow across the organization.
      </p>,
    ],
  },
  featuresSection: {
    className: classnames(styles.features, "container"),
    elements: [
      <Feature
        {...{
          title: <>MODELER</>,
          content: <ModelerIcon height={130} fill="currentColor" />,
          description: <>Create & deploy business process models</>,
          link: "/modeler",
        }}
      />,
      <Feature
        {...{
          title: <>CORE ENGINE</>,
          content: <EngineIcon height={130} fill="currentColor" />,
          description: <>Execute processes in BPMN and DMN Engine</>,
          link: "/engine",
        }}
      />,
      <Feature
        {...{
          title: <>API</>,
          content: <APIIcon height={130} fill="currentColor" />,
          description: <>Rich API layer for system and frontend integrations</>,
          link: "/apis",
        }}
      />,
      <Feature
        {...{
          title: <>MONITORING</>,
          content: <MonitoringIcon height={130} fill="currentColor" />,
          description: <>End-to-end process visibility and insights</>,
          link: "/monitoring",
        }}
      />,
    ],
  },
  mainContent: {
    className: "vertical-flex side-padding-only",
    elements: [
      <div className={classnames(styles.buttonsWrapper)}>
        <div className={classnames(styles.buttons)}>
          <button className="primary">
            <Link to="https://docs.fluxnova.finos.org">Get Started</Link>
          </button>
          ,
          <button className="secondary">
            <Link to="https://github.com/finos/fluxnova-modeler/discussions">
              Join the Community
            </Link>
          </button>
        </div>
      </div>,
      <div>
        <img
          className={classnames(styles.fluxnovaCapabilities)}
          src="/img/fluxnova/fluxnova-capabilities-icons.png"
          alt="icons representing the capabilities of Fluxnova"
        />
        ,
      </div>,
      <div className={classnames(styles.mainDescription)}>
        Backed by FINOS/Linux Foundation, Fluxnova empowers digitization through
        process orchestration, helping organizations to increase straight
        through processing (STP) by automating complex processes involving
        multiple endpoints via BPM workflows.
        <div>
          Fluxnova is opensource and available under the Apache 2.0 licence,
          compliant with OSI standards.
        </div>
      </div>,
    ],
  },
  buttons: [
    {
      name: <>Get Started</>,
      url: "https://docs.fluxnova.finos.org",
      style: classnames("primary"),
    },
    {
      name: <>Join the Community</>,
      url: "https://github.com/finos/fluxnova-bpm-platform/discussions",
      style: classnames("secondary"),
    },
  ],
};
