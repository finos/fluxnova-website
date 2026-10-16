import CheckmarkIcon from "/img/icons/checkmark.svg";
import Link from "@docusaurus/Link";

export const IntroConfig = {
  hero: {
    className: "bg-primary color-white",
    image: {
      variant: "media",
      content: (
        <div className="intro-hero-visual">
          <img
            src="/img/feature/modeler/overview.png"
            alt="Fluxnova process modeling canvas"
          />
        </div>
      ),
      side: "right",
    },
    elements: [
      <div className="section-kicker" key="kicker">
        Product overview
      </div>,
      <h1 key="title">Introduction</h1>,
      <p className="page-lead" key="lead">
        Many organisations rely on aging or proprietary process orchestration
        software that can be rigid, costly or difficult to scale — often
        resulting in vendor lock-in, limited flexibility, and slower innovation.
      </p>,
    ],
  },
  sectionOne: {
    className: "bg-gray color-black",
    image: {
      variant: "media",
      content: (
        <div className="intro-split-visual">
          <img
            src="/img/feature/engine/overview.png"
            alt="Fluxnova core engine overview"
          />
          <img
            src="/img/feature/monitoring/dashboard.png"
            alt="Fluxnova monitoring dashboard"
          />
        </div>
      ),
      side: "left",
    },
    elements: [
      <div className="section-kicker" key="kicker">
        Why Fluxnova
      </div>,
      <h2 className="section-heading" key="title">
        An open-source process orchestration platform developed collaboratively
        by industry leaders.
      </h2>,
      <p key="body">
        It provides a standards-aligned, vendor-neutral alternative which
        reduces lock-in through full code access, open governance and
        transparent Apache 2.0 licensing. Flexible deployment options let teams
        run Fluxnova embedded into a microservice — on prem, or as containers in
        the cloud.
      </p>,
      <p key="body2">
        Designed with extensibility and integration in mind, Fluxnova empowers
        institutions to modernize their workflow architecture while actively
        participating in the evolution of the platform through the FINOS
        community.
      </p>,
    ],
  },
  highlights: [
    "Enables end-to-end automation of complex, multi-step processes",
    "Adapt to change — new regulations or market shifts — without re-architecting entire systems",
    "Audit confidence with full workflow history, user actions, timestamps and real-time execution tracing",
    "Financial services grade ecosystem with neutral governance under FINOS and a public roadmap",
    "True freedom from lock-in under Apache 2.0 — no license fees, no proprietary restrictions, no per-user charges",
  ],
  CheckmarkIcon,
  sectionFour: {
    className: "space-around bg-white",
    elements: [
      <button className="primary" key="started">
        <Link to="https://docs.fluxnova.finos.org">Get Started</Link>
      </button>,
      <button className="secondary" key="contribute">
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
