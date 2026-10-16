import {
  GovernanceHeroIllustration,
  RolesIllustration,
} from "../components/illustrations/governance-illustrations";

export const GovernanceConfig = {
  sectionOne: {
    className: "bg-primary color-white",
    image: {
      variant: "media",
      content: <GovernanceHeroIllustration />,
      side: "right",
    },
    elements: [
      <div className="section-kicker" key="kicker">
        Project stewardship
      </div>,
      <h1 key="title">Governance</h1>,
      <p className="page-lead" key="lead">
        The product is governed by the Linux Foundation{" "}
        <a
          href="https://www.linuxfoundation.org/legal/antitrust-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Antitrust Policy
        </a>
        , and the FINOS{" "}
        <a
          href="https://community.finos.org/governance-docs/IP-policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          IP Policy
        </a>
        ,{" "}
        <a
          href="https://community.finos.org/docs/governance/code-of-conduct/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code of Conduct
        </a>
        ,{" "}
        <a
          href="https://community.finos.org/docs/governance/collaborative-principles/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Collaborative Principles
        </a>
        , and{" "}
        <a
          href="https://community.finos.org/docs/governance/meeting-procedures/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meeting Procedures
        </a>
        .
      </p>,
    ],
  },
  sectionTwo: {
    className: "bg-gray color-black",
    image: {
      variant: "media",
      content: <RolesIllustration />,
      side: "left",
    },
    elements: [
      <div className="section-kicker" key="kicker">
        Meritocratic and public
      </div>,
      <h2 className="section-heading" key="title">
        Roles
      </h2>,
      <p key="body">
        Fluxnova is a meritocratic, consensus-driven platform. Decisions are
        made in public — through Working Groups and public issues after open
        discussion and community input. No major changes to direction, features
        or fixes are made privately. We open proposals early and keep the
        community involved throughout the decision process. Maintainers document
        outcomes and broad consensus.
      </p>,
    ],
  },
  roleCards: [
    {
      badge: "Everyone",
      title: "Contributors",
      summary:
        "Anyone who submits a contribution — code, issues, documentation, comments, tests, or design input.",
      points: [
        "Must be covered by a FINOS Contributor License Agreement (CLA)",
        "Uncovered contributions are blocked by EasyCLA",
      ],
      note: "See FINOS Software Project Governance for CLA details.",
    },
    {
      badge: "Trusted",
      title: "Maintainers",
      summary:
        "Contributors granted write access based on sustained contributions and community trust.",
      points: [
        "Reviewing and merging pull requests",
        "Managing GitHub issues and labels",
        "Participating in community discussions",
        "Ensuring adherence to project standards",
      ],
    },
    {
      badge: "Elected",
      title: "Lead Maintainers",
      summary:
        "Primary liaison(s) with the FINOS team and FINOS Board, elected by majority vote of Maintainers.",
      points: [
        "Approving and submitting reports to FINOS",
        "Representing the project at FINOS-wide forums",
        "Facilitating consensus across Maintainers",
        "Casting tie-breaking votes if needed",
      ],
    },
  ],
  lifecycle: [
    {
      title: "Appointment",
      body: "Any contributor with a sustained track record may be nominated or apply. Approval requires maintainer consensus (or a vote if consensus cannot be reached).",
    },
    {
      title: "Annual review",
      body: "Maintainers are reviewed annually (next refresh Q1 2026 unless otherwise agreed). New maintainers may still be added anytime with consensus or a vote.",
    },
    {
      title: "Lead re-election",
      body: "Lead Maintainer(s) are re-elected annually, or earlier if required. Any current Maintainer may nominate themselves or others.",
    },
    {
      title: "Transparency",
      body: "All discussions and decisions on appointments, removals, or Lead elections are recorded and minuted publicly.",
    },
    {
      title: "Offboarding",
      body: "Maintainers may step down anytime. After 6+ months of inactivity (no PR reviews, governance participation, or meetings), respectful offboarding may follow by consensus, aligned with FINOS policies.",
    },
  ],
  principles: [
    {
      title: "Openness",
      body: "Participation is open to all who are materially affected by Fluxnova’s direction. There are no financial barriers or affiliation requirements to contribute.",
    },
    {
      title: "Lack of dominance",
      body: "No single individual, company, or interest group shall dominate decision making. Contributions are considered on their merit.",
    },
    {
      title: "Balance",
      body: "Efforts are made to involve diverse stakeholders across industry sectors to ensure well-rounded and equitable outcomes.",
    },
    {
      title: "Consideration of views",
      body: "All feedback, objections, and comments from contributors are thoroughly reviewed. Maintainers record responses and actions.",
    },
  ],
};
