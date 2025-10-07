import QuestionIcon from "/img/icons/question.svg";
import FAQsIcon from "/img/icons/faqs.svg";
import PeopleExchangeIcon from "/img/icons/people-exchange.svg";
import GroupsIcon from "/img/icons/groups.svg";

export const faqsConfig = {
  sectionOne: {
    className: "bg-primary color-white",
    image: {
      content: <FAQsIcon fill="#fff" />,
      side: "right",
    },
    elements: [
      <h1>FAQs</h1>,
      <h2 className="lightWeight">
        You have questions, we have answers! Please take a moment to verify if
        your questions have already been addressed. If they have not, feel free
        to reach out to us.
      </h2>,
    ],
  },
  sectionThree: {
    className: "bg-white color-charcoal display-block",

    elements: [
      <h2 className="lightWeight">About Fluxnova</h2>,
      <h3>What is Fluxnova?</h3>,
      <p>
        Fluxnova is a process orchestration tool that helps organisations design
        and run end-to-end workflows at scale with the flexibility to evolve as
        their needs change. Governed by FINOS and built on open standards, it
        offers BPMN/DMN compatibility, migration tooling, and audit-ready
        execution from day one giving teams the freedom to automate and
        orchestrate without vendor dependence.
      </p>,
      <p>
        <a href="https://docs.fluxnova.finos.org/">Read the Documentation</a> -{" "}
        <a href="https://github.com/finos/fluxnova-bpm-platform">
          Explore the GitHub Repository
        </a>
      </p>,
      <h3>Who contributes to Fluxnova?</h3>,
      <p>
        Fluxnova is a collaborative open-source initiative governed by FINOS
        under the Linux Foundation. It’s developed and maintained by a community
        of contributors from leading financial institutions and technology teams
        currently including Fidelity, NatWest Group, Capital One, Deutsche Bank,
        and BMO with participation open to the wider industry.
      </p>,
      <p>
        <a href="/about-us">Meet the maintainers</a> -{" "}
        <a href="/governance">Learn about governance</a>
      </p>,
      <h3>When will Fluxnova be available?</h3>,
      <p>
        The first release of Fluxnova is targeted for November 2025. This
        milestone marks the beginning of the platform’s availability to the
        wider community as an open-source process orchestration solution.
      </p>,
      <h3>How is Fluxnova different from other orchestration platforms?</h3>,
      <p>
        Fluxnova is open source and community-governed under FINOS, avoiding
        costly licensing and closed ecosystems. It builds on the proven Camunda
        7 engine while evolving with contributions from multiple organizations,
        giving you transparency, flexibility, and a roadmap shaped by real-world
        needs.
      </p>,
      <h3>Do I need a licence to use Fluxnova?</h3>,
      <p>
        No. Fluxnova is released under the Apache 2.0 license, so it’s
        completely free to use, modify and distribute.
      </p>,
      <p>
        <a href="https://apache.org/licenses/LICENSE-2.0" target="_new">
          Apache 2.0
        </a>
      </p>,

      <h2 className="lightWeight paddingTop">Migration & Compatibility</h2>,
      <h3>Can I migrate from Camunda 7 to Fluxnova?</h3>,
      <p>
        Yes. Fluxnova includes a migration utility that automates much of the
        transition, updating code, dependencies, and configurations to align
        with Fluxnova. Your existing process data is preserved and active
        workflows continue without interruption.
      </p>,
      <p>
        <a href="/migration">Explore the Migration Utility Tool</a>
      </p>,
      <h3>
        Does the Migration Tooling support migration from other process
        orchestration platforms?
      </h3>,
      <p>
        Not just yet. Our initial focus is on providing a smooth migration path
        from Camunda 7, but expanding migration support from other process
        orchestration platforms is something we’re actively exploring for the
        future.
      </p>,
      <h3>Will my existing BPMN and DMN models work?</h3>,
      <p>
        Absolutely. BPMN and DMN models created for Camunda 7 work with Fluxnova
        without modification.
      </p>,
      <h3>What happens to my existing workflows during migration?</h3>,
      <p>
        In-flight cases continue running without disruption. The migrated
        environment supports both Camunda and Fluxnova namespaces to maintain
        compatibility throughout the transition.
      </p>,

      <h2 className="lightWeight paddingTop">Technology & Deployment</h2>,
      <h3>Where can I deploy Fluxnova?</h3>,
      <p>
        Fluxnova runs as an embedded engine inside a Spring Boot microservice,
        so it inherits the deployment strategy of your host application. Whether
        you run on-premises, in containers, or in the cloud, Fluxnova fits
        seamlessly into your existing environment.
      </p>,
      <h3>Which Java version does Fluxnova require?</h3>,
      <p>Fluxnova requires Java 21.</p>,

      <h2 className="lightWeight paddingTop">Tools & Features</h2>,
      <h3>Does Fluxnova include modelling and monitoring tools?</h3>,
      <p>
        Yes. Fluxnova includes a Modeler for BPMN and DMN design and a front-end
        UI for managing and monitoring process instances, both enhanced by
        ongoing community contributions.
      </p>,
      <h3>Will analytics and reporting be available?</h3>,
      <p>
        Fluxnova can integrate with your organisation’s preferred analytics
        platforms to meet reporting and insight needs.
      </p>,

      <h2 className="lightWeight paddingTop">Support & Ecosystem</h2>,
      <h3>How is Fluxnova supported?</h3>,
      <p>
        Fluxnova is backed by a growing open-source community under FINOS. For
        organizations needing additional assurance, SLA-backed enterprise
        support options will be available through trained partners.
      </p>,
      <p>
        <a
          href="https://github.com/finos/fluxnova-bpm-platform/discussions"
          target="_new"
        >
          Join the community
        </a>{" "}
        -{" "}
        <a href="https://github.com/finos/fluxnova-bpm-platform" target="_new">
          Contribute on GitHub
        </a>
      </p>,
      <h3>Is Fluxnova truly open source?</h3>,
      <p>
        Yes. Fluxnova is an Apache 2.0 licensed open-source project, ensuring
        transparency, flexibility and freedom from vendor dependence.
      </p>,
      <h3>Can I contribute to Fluxnova?</h3>,
      <p>
        Yes. As a FINOS-governed open-source project, Fluxnova welcomes
        contributions from organisations and individuals from code and
        documentation to feature ideas and feedback.
      </p>,
      <p>
        <a href="/contribute">Contribute now</a>
      </p>,

      <h2 className="lightWeight paddingTop">Ideas & Future</h2>,
      <h3>What’s next for Fluxnova?</h3>,
      <p>
        The project roadmap is community-driven and focuses on continuous
        enhancements, improved migration tooling, and expanding orchestration
        capabilities. The MVP launch in November 2025 is just the beginning,
        Fluxnova will evolve with input from multiple organizations and an
        active contributor base.
      </p>,
    ],
  },
  sectionFour: {
    className: "bg-gray color-charcoal display-block",

    elements: [
      <h3>Have you explored our documentation?</h3>,
      <p>
        Fluxnova documentation helps you move through each stage confidently.
      </p>,
      <p>
        <a href="https://docs.fluxnova.finos.org/" target="_new">
          Documentation
        </a>
      </p>,
    ],
  },
};
