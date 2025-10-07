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
      <h1>Introduction</h1>,
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
        Fluxnova is an open-source process orchestration platform developed
        collaboratively by industry leaders.
      </h2>,
      <p>
        It provides a standards-aligned, vendor-neutral alternative which
        reduces lock-in through full code access, open governance and
        transparent Apache 2.0 licensing. Flexible deployment options let teams
        run Fluxnova embedded into a microservice – on prem, or as containers in
        the cloud.
      </p>,
    ],
  },
  sectionTwo: {
    className: "side-padding-only bg-gray color-black",
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
    className: "side-bottom-padding display-block bg-gray color-black",
    elements: [
      <h4>Key Highlights:</h4>,
      <ul>
        <li>Enables end-to-end automation of complex, multi-step processes</li>
        <li>
          Gives organizations the ability to adapt to change (e.g. new
          regulations or market shifts) without re-architecting entire systems
        </li>
        <li>
          Provides audit confidence with full workflow history, user actions,
          timestamps and real time execution tracing
        </li>
        <li>
          Backed by financial services grade ecosystem with neutral governance
          under FINOS and a public roadmap
        </li>
        <li>
          Delivers true freedom from lock-in as open source under the Apache 2.0
          license – no license fees, no proprietary restrictions and no per-user
          charges
        </li>
      </ul>,
    ],
  },
  sectionFour: {
    className: "space-around bg-white",
    elements: [
      <button className="primary">
        <Link to="https://docs.fluxnova.finos.org">Get Started</Link>
      </button>,
      <button className="secondary">
        <Link to="/contribute">Ways to Contribute</Link>
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
