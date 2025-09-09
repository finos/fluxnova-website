import React from "react";
import ModelerIcon from "/img/icons/modeler.svg";
import EngineIcon from "/img/icons/engine.svg";
import APIIcon from "/img/icons/api.svg";
import MonitoringIcon from "/img/icons/monitoring.svg";

export const features = [
  {
    title: <>MODELER</>,
    content: <ModelerIcon height={130} fill="currentColor" />,
    description: <>Create & deploy business process models</>,
    link: "/modeler",
  },
  {
    title: <>CORE ENGINE</>,
    content: <EngineIcon height={130} fill="currentColor" />,
    description: <>Execute processes in BPMN and DMN Engine</>,
    link: "/engine",
  },
  {
    title: <>API</>,
    content: <APIIcon height={130} fill="currentColor" />,
    description: <>Rich API layer for system and frontend integrations</>,
    link: "/apis",
  },
  {
    title: <>MONITORING</>,
    content: <MonitoringIcon height={130} fill="currentColor" />,
    description: <>End-to-end process visibility and insights</>,
    link: "/monitoring",
  },
];
