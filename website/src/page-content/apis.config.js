import React from "react";
import Link from "@docusaurus/Link";
import APIIcon from "/img/icons/api.svg";
import CodeBlock from "../components/code-block";
// import CodeBlock from '@theme/CodeBlock';
import { Highlight } from "prism-react-renderer";

export const APIsConfig = {
  hero: {
    className: "bg-primary color-white",
    image: {
      side: "left",
      content: <APIIcon fill="#007dff" />,
      title: "API",
    },
    elements: [
      <h1>Expose and consume services via a REST API</h1>,
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
          src="/img/feature/APIs/shape-editor.png"
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
      <h3>Get started by visiting our REST API documentation</h3>,
      <div style={{ textAlign: "center" }}>
        <button className="primary">
          <Link to="https://docs.fluxnova.finos.org/reference/rest/overview">
            Learn More
          </Link>
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
      <h3>Insights</h3>,
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

  sectionThree: {
    className: "bg-white color-gray display-block",
    elements: [
      <h2 className="lightWeight">API Examples</h2>,
      <h3 className="color-black">Start a Process Instance</h3>,
      <h4 className="primary-color">Endpoint:</h4>,
      <p className="code-text">
        <strong>
          {`POST /engine-rest/process-definition/key/{key}/start`}
        </strong>
      </p>,
      <ul>
        <li>{`{key}`} is the process definition key (not the ID)</li>
        <li>This endpoint starts a new instance of the process definition</li>
      </ul>,
      <h4 className="primary-color">Headers:</h4>,
      <p className="code-text">
        <strong>Content-Type: application/json</strong>
      </p>,
      <CodeBlock
        header="Code Example In Demo Environment"
        code={`POST https://demo.fluxnova.finos.org/engine-rest/process-definition/key/Process_0kzrpyy/start

Content-Type: application/json

{

 "businessKey": "my-business-key-001"

}`}
      />,
      <CodeBlock
        header="Response Body"
        code={`{

  "id": "72bf0249-a94a-11f0-90d2-0a2c3439e846",
  "definitionId": "Process_0kzrpyy:1:83cf1c26-a8e9-11f0-90d2-0a2c3439e846",
  "businessKey": "my-business-key-001",
  "caseInstanceId": null,
  "ended": false,
  "suspended": false,
  "tenantId": null,
  "definitionKey": "Process_0kzrpyy"

}`}
      />,
      <h3 className="color-black">Get Process Instance Data</h3>,
      <h4 className="primary-color">Endpoint:</h4>,
      <p className="code-text">
        <strong>GET /engine-rest/process-instance/{`{id}`}</strong>
      </p>,
      <ul>
        <li>Replace {`{id}`} with the actual process instance ID.</li>
      </ul>,
      <h4 className="primary-color">Headers:</h4>,
      <p className="code-text">
        <strong>Content-Type: application/json</strong>
      </p>,
      <CodeBlock
        header="Code Example In Demo Environment"
        code={`GET https://demo.fluxnova.finos.org/engine-rest/process-instance/734790e5-a946-11f0-90d2-0a2c3439e846

Content-Type: application/json`}
      />,
      <CodeBlock
        header="Response Body"
        code={`{
  "id": "734790e5-a946-11f0-90d2-0a2c3439e846",
  "definitionId": "Process_0kzrpyy:1:83cf1c26-a8e9-11f0-90d2-0a2c3439e846",
  "businessKey": "my-business-key-001",
  "caseInstanceId": null,
  "ended": false,
  "suspended": false,
  "tenantId": null,
  "definitionKey": "Process_0kzrpyy"
}`}
      />,
      <h3 className="color-black">
        Update Process Instance Variables
      </h3>,
      <h4 className="primary-color">Endpoint:</h4>,
      <p className="code-text">
        <strong>POST /engine-rest/process-instance/{`{id}`}/variables</strong>
      </p>,
      <ul>
        <li>Replace {`{id}`} with the actual process instance ID.</li>
      </ul>,
      <h4 className="primary-color">Headers:</h4>,
      <p className="code-text">
        <strong>Content-Type: application/json</strong>
      </p>,
      <CodeBlock
        header="Code Example In Demo Environment"
        code={`POST https://demo.fluxnova.finos.org/engine-rest/process-instance/734790e5-a946-11f0-90d2-0a2c3439e846/variables

Content-Type: application/json

{

"approvalStatus": { "value": "approved", "type": "String" }

}`}
      />,
      <h3 className="color-black">
        Get Process Instance Updated Variable Data
      </h3>,
      <h4 className="primary-color">Endpoint:</h4>,
      <p className="code-text">
        <strong>GET /engine-rest/process-instance/{`{id}`}/variables</strong>
      </p>,
      <ul>
        <li>Replace {`{id}`} with the actual process instance ID.</li>
      </ul>,
      <h4 className="primary-color">Headers:</h4>,
      <p className="code-text">
        <strong>Content-Type: application/json</strong>
      </p>,
      <CodeBlock
        header="Code Example In Demo Environment"
        code={`GET https://demo.fluxnova.finos.org/engine-rest/process-instance/734790e5-a946-11f0-90d2-0a2c3439e846/variables

Content-Type: application/json`}
      />,
      <CodeBlock
        header="Response Body"
        code={`{
  "amount": {
    "type": "Integer",
    "value": 1000,
    "valueInfo": {}
  },
  "invoiceId": {
    "type": "String",
    "value": "A123",
    "valueInfo": {}
  }
}`}
      />,
    ],
  },
};
