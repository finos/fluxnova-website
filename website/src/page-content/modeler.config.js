import Link from "@docusaurus/Link";
import ModelerIcon from "/img/icons/modeler.svg";

export const modelerConfig = {
  hero: {
    className: "bg-primary color-white",
    image: {
      content: <ModelerIcon fill="#007dff" />,
      side: "left",
      title: "MODELER",
    },
    elements: [
      <h1>Design it your way</h1>,
      <p className="heroDescription">
        Design and deploy business process models using BPMN and DMN standards
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
        Built for clarity and collaboration, helping business users and
        developers define logic together
      </h2>,
      <p>
        Whether you’re prototyping new workflows or refining complex
        automations, Fluxnova Modeler gives you the tools to move from idea to
        execution with confidence
      </p>,
      <div style={{ textAlign: "center" }}>
        <button className="primary">
          <Link to="https://github.com/finos/fluxnova-modeler/releases">
            Learn More
          </Link>
        </button>
      </div>,
    ],
  },
  sectionTwo: {
    image: {
      side: "left",
      content: (
        <img
          src="/img/feature/modeler/modeler-shapes.png"
          alt="Modeler Overview"
        />
      ),
    },
    elements: [
      <h3>Insights:</h3>,
      <ul>
        <li>
          Supports industry standard process diagrams (BPMN) and decision logic
          (DMN) to capture end to end business workflows and rules.
        </li>
        <li>
          Offers a desktop based visual modeling environment ideal for
          collaboration between business and technical users
        </li>
        <li>
          Provides drag and drop capabilities for building workflows, plus a
          code editor for advanced users who need fine grained XML control
        </li>
        <li>
          Ensures that models are execution ready out of the box – what you
          design runs
        </li>
        <li>
          Built to support team collaboration, allowing users to design, review
          and iterate on workflows in a streamlined manner
        </li>
      </ul>,
    ],
  },
  sectionThree: {
    elements: [
      <h2>Already have processes? Let's move them</h2>,
      <p>Switching engines doesn’t have to be difficult.</p>,
      <p>
        Fluxnova includes a powerful migration utility tool that helps you
        refactor existing processes, cleanly and quickly
      </p>,
      <h3>What it does:</h3>,
      <ul>
        <li>Automatically adjusts dependencies, namespaces and artifacts</li>
        <li>Updates BPMN and config to align with Fluxnova standards</li>
      </ul>,
    ],
  },
};
