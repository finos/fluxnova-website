import React from "react";
import Link from "@docusaurus/Link";
import EngineIcon from "/img/icons/engine.svg";

export const engineConfig = {
  hero: {
    className: "horizontal-flex bg-primary color-white",
    image: {
      side: "left",
      content: <EngineIcon fill="#007dff" />,
      title: "CORE ENGINE",
    },
    elements: [
      <h1>
        Execute end to end workflows using a standards based process engine
      </h1>,
      <p className="heroDescription">
        Supports rules, user tasks and timed events, with built in support from
        human in the loop processing
      </p>,
    ],
  },
  sectionOne: {
    className: "bg-white color-gray",
    image: {
      side: "right",
      content: (
        <img
          src="/img/feature/engine/shape-editor.png"
          alt="Modeler Shape Editor"
        />
      ),
    },
    elements: [
      <h2>
        At the heart of Fluxnova is a lightweight, high performance process
        engine built for modern enterprise automation.
      </h2>,
      <h2 className="lightWeight">
        The Fluxnova engine empowers teams to orchestrate people, systems and
        data through clearly defined workflows, all while maintain full
        visibility and control
      </h2>,
      <div style={{ textAlign: "center" }}>
        <button className="primary">
          <Link to="https://demo-fluxnova.finos.org/fluxnova/app/welcome/default/#!/login">
            View Demo
          </Link>
        </button>
      </div>,
    ],
  },
  sectionTwo: {
    image: {
      side: "left",
      content: (
        <img src="/img/feature/engine/overview.png" alt="Modeler Overview" />
      ),
    },
    elements: [
      <h3>Insights:</h3>,
      <ul>
        <li>
          Executes BPMN based processes and DMN decision tables with accuracy
          and efficiency
        </li>
        <li>
          Designed for flexible deployment, whether embedded in applications,
          running as a standalone service or integrated into a larger platform
        </li>
        <li>
          Enables features such as process versioning, migration of live
          instances and robust error handling for long running processes
        </li>
        <li>
          Includes built in capabilities for task assignment, escalation,
          timeouts and human in the loop workflows
        </li>
        <li>
          Highly configurable, allowing teams to adapt the engine to their
          specific operating environment and performance needs
        </li>
      </ul>,
    ],
  },
};
