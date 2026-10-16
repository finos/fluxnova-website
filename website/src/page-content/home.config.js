import React from "react";
import classnames from "classnames";
import Feature from "../components/feature";
import ModelerIcon from "/img/icons/modeler.svg";
import EngineIcon from "/img/icons/engine.svg";
import APIIcon from "/img/icons/api.svg";
import MonitoringIcon from "/img/icons/monitoring.svg";
import styles from "../pages/styles.module.scss";

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
        Fluxnova is an open-source BPM platform that delivers automation and
        orchestration capabilities to accelerate end-to-end digitization of
        processes and workflows across the organization. Designed for regulated
        organizations, it serves the financial services industry and beyond.
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
  capabilities: [
    { iconName: "monitoring", label: "Monitoring" },
    { iconName: "insights", label: "Insights" },
    { iconName: "rules", label: "Rules" },
    { iconName: "people-talking", label: "User Task" },
    { iconName: "paper-airplane", label: "Communication" },
    { iconName: "data-tree", label: "APIs" },
    { iconName: "clipboard", label: "Low Code" },
    { iconName: "nucleus", label: "Collaboration" },
    { iconName: "data-cloud", label: "Integrations" },
  ],
};
