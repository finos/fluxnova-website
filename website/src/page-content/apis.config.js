import React from "react";
import Link from "@docusaurus/Link";
import APIIcon from "/img/icons/api.svg";

export const APIsConfig = {
  hero: {
    className: "bg-primary color-white",
    image: {
      side: "left",
      content: <APIIcon fill="#007dff" />,
      title: "APIs",
    },
    elements: [
      <h1>Expose and consume services via a REST api</h1>,
      <p className="heroDescription">
        Integrates easily with external systems, frontend UI’s, CI/CD pipelines
        and notification services
      </p>,
    ],
  },
  sectionOne: {
    className: "bg-white color-gray",
    image: {
      side: "right",
      content: (
        <img
          src="/img/feature/modeler/shape-editor.png"
          alt="Modeler Shape Editor"
        />
      ),
    },
    elements: [
      <h2>
        Fluxnova provides a modern, secure API layer to support seamless
        integration and operational transparency.
      </h2>,
      <h2 className="lightWeight">
        Fluxnova APIs make it easy to connect business workflows to your
        existing digital landscape, enabling true end to end automation
      </h2>,
      <div style={{ textAlign: "center" }}>
        <button className="primary">
          <Link>Get Started</Link>
        </button>
      </div>,
    ],
  },
  sectionTwo: {
    image: {
      side: "left",
      content: <img src="/img/feature/APIs/CallAPIs.png" alt="API config" />,
    },
    elements: [
      <h3>Details</h3>,
      <ul>
        <li>
          A fully documented REST API enables external systems to deploy
          workflows, trigger processes, complete tasks and retrieve real time
          status
        </li>
        <li>
          Java based SDKs allow developers to embed Fluxnova functionality
          directly into their applications or services
        </li>
        <li>
          Supports querying of process history, user task management, decision
          execution and event correlation through simple API calls
        </li>
        <li>
          Extensible by design, plug in connectors, scripts or service tasks to
          integrate with databases, messaging systems or legacy tools
        </li>
      </ul>,
    ],
  },
};
