import ReportIcon from "/img/icons/report.svg";
import PersonPlayIcon from "/img/icons/personPlay.svg";
import Link from "@docusaurus/Link";

export const IntroConfig = {
  hero: {
    className: "bg-primary color-white",
    image: {
      content: <ReportIcon fill="currentColor" />,
      side: "right",
    },
    elements: [
      <h2 className="lightWeight">
        Many organisations rely on aging or proprietary process orchestration
        software that can be rigid, costly or difficult to scale and often
        results in vendor lock-in, resulting in limited flexibility, increase in
        long term dependency and slowing innovation
      </h2>,
    ],
  },
  sectionOne: {
    className: "bg-gray color-black",
    image: {
      content: <PersonPlayIcon fill="currentColor" />,
      side: "left",
    },
    elements: [
      <h2>
        Fluxnova is an open-source orchestration engine developed
        collaboratively by industry leaders to address these challenges.
      </h2>,
      <p>
        It offers cloud-native, standards aligned alternatives that eliminates
        vendor lock-in by providing full access to the codebase, open governance
        and transparent licensing under Apache 2.0.
      </p>,
    ],
  },
  sectionTwo: {
    className: "bg-gray color-black",
    elements: [
      <p>
        Designed with extensibility and integration in mind, Fluxnova empowers
        institutions to modernize their workflow architecture while actively
        participating in the evolution of the platform though the FINOS
        community.
      </p>,
    ],
  },
  sectionThree: {
    className: "display-block bg-gray color-black",
    elements: [
      <h4>Key Highlights:</h4>,
      <ul>
        <li>
          Transparent governance and decision making, led by maintainers from
          across the industry
        </li>
        <li>
          Open licensing model (Apache 2.0) supporting flexibility,
          redistribution and adoption at scale
        </li>
        <li>
          Seamless integration with CI/CD pipelines and enterprise tooling
        </li>
        <li>
          A collaborative and growing community shaping the roadmap and
          priorities
        </li>
      </ul>,
    ],
  },
  sectionFour: {
    className: "space-around bg-white",
    elements: [
      <button className="primary">
        <Link>Get Started</Link>
      </button>,
      <button className="secondary">
        <Link>Ways to Contribute</Link>
      </button>,
    ],
  },
  sectionFive: {
    className: "bg-white",
    elements: [
      {
        iconName: "monitoring",
        header: "Monitoring",
        subHeader: "Manage and support end to end workflow",
      },
      {
        iconName: "people-talking",
        header: "User Task",
        subHeader: "Integrate automation with human in the loop",
      },
      {
        iconName: "clipboard",
        header: "Low Code",
        subHeader: "Faster development using BPM and workflows",
      },
      {
        iconName: "insights",
        header: "Insights",
        subHeader: "Operational excellence through visibility into bottlenecks",
      },
      {
        iconName: "paper-airplane",
        header: "Communication",
        subHeader: "Digitized automated notifications to customers",
      },
      {
        iconName: "nucleus",
        header: "Collaboration",
        subHeader: "IT/Technology and cross department alignment",
      },
      {
        iconName: "rules",
        header: "Rules",
        subHeader: "Configure and manage rules via DMN",
      },
      {
        iconName: "data-tree",
        header: "APIs",
        subHeader: "Interact with core automation engine",
      },
      {
        iconName: "data-cloud",
        header: "Integrations",
        subHeader: "Orchestrate multiple endpoints",
      },
    ],
  },
};
