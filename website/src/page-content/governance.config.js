import LocationIcon from "/img/icons/location.svg";
import OpenBookIcon from "/img/icons/open-book.svg";
import PeopleExchangeIcon from "/img/icons/people-exchange.svg";
import GroupsIcon from "/img/icons/groups.svg";

export const GovernanceConfig = {
  sectionOne: {
    className: "bg-primary color-white",
    image: {
      content: <LocationIcon fill="currentColor" />,
      side: "right",
    },
    elements: [
      <h2 className="lightWeight">
        <strong>Governance - </strong> This document describes the governance of
        the FINOS Fluxnova project. The project is also governed by the Linux
        Foundation{" "}
        <a
          href="https://www.linuxfoundation.org/legal/antitrust-policy"
          target="_new"
        >
          Antitrust Policy
        </a>
        , and the FINOS{" "}
        <a
          href="https://community.finos.org/governance-docs/IP-policy.pdf"
          target="_new"
        >
          IP Policy
        </a>
        ,{" "}
        <a
          href="https://community.finos.org/docs/governance/code-of-conduct/"
          target="_new"
        >
          Code of Conduct
        </a>
        ,{" "}
        <a
          href="https://community.finos.org/docs/governance/collaborative-principles/"
          target="_new"
        >
          Collaborative Principles
        </a>
        , and{" "}
        <a
          href="https://community.finos.org/docs/governance/meeting-procedures/"
          target="_new"
        >
          Meeting Procedures
        </a>
        .
      </h2>,
    ],
  },
  sectionTwo: {
    className: "bg-gray color-black",
    image: {
      content: <OpenBookIcon fill="currentColor" />,
      side: "left",
    },
    elements: [
      <h2>Roles</h2>,
      <p>
        Fluxnova is a meritocratic, consensus-based community project, in so far
        that is possible, decision-making is done based on user consensus
        following open discussion on our Working Groups and issue list. No major
        decisions about the project’s direction, bug fixes, or features should
        be made in private without community involvement and participation.
        Discussions must begin at the earliest possible point on a topic; the
        community’s participation is vital during the entire decision-making
        process.
      </p>,
    ],
  },
  sectionThree: {
    className: "bg-white color-charcoal display-block",

    elements: [
      <h3>Contributors</h3>,
      <p>
        A Contributor is anyone who submits a contribution to the project.
        Contributions may include code, issues, documentation, comments, tests
        or design inputs.
      </p>,
      <p>
        <strong>(CLA) Contributor License Agreement</strong>
      </p>,
      <p>
        Contributors must be covered under a Contributor License Agreement (CLA)
        with FINOS. Contributions from those not covered will be blocked by the
        Linux Foundation EasyCLA tool. See the FINOS Software Project Governance
        page for more details.
      </p>,
      <h3>Maintainers</h3>,
      <p>
        A Maintainer is a Contributor who, based on sustained contributions and
        community trust is granted write access to the Fluxnova repositories.
        Maintainers are responsible for:
      </p>,
      <ul>
        <li>Reviewing and merging pull requests</li>
        <li>Managing GitHub issues and labels</li>
        <li>Participating in community discussions</li>
        <li>Ensuring adherence to project standards</li>
      </ul>,
      <h3>Lead Maintainers</h3>,
      <p>
        The Lead Maintainer serves as the primary liaison(s) with the FINOS team
        and FINOS Board. Responsibilities include:
      </p>,
      <ul>
        <li>Approving and submitting reports to FINOS</li>
        <li>Representing the project at FINOS-wide forums</li>
        <li>Facilitating consensus across Maintainers</li>
        <li>Casting tie-breaking votes if needed</li>
      </ul>,
      <p>
        The Lead Maintainer is elected by majority vote of the Maintainers.
      </p>,
    ],
  },
  sectionFour: {
    className: "bg-gray color-charcoal display-block",

    elements: [
      <h3>Maintainer Lifecycle</h3>,
      <p>
        Fluxnova encourages community driven stewardship. The following
        practices ensure the Maintainer group remains active, representative and
        aligned with project goals:
      </p>,

      <ul>
        <li>
          Appointment: Any contributor with a sustained track record may be
          nominated or may apply to become a Maintainer. Approval requires the
          consensus of the maintainers see Decision Making Process.
        </li>
        <li>
          Annual Review: The list of Maintainers is reviewed annually. The next
          review and refresh will occur in Q1 2026, unless otherwise agreed by
          the Working Group. While the annual review serves as a structured
          checkpoint, new maintainers may be added at any point throughout the
          year. Proposed additions must first seek consensus amongst existing
          maintainers, and where consensus cannot be reached, the voting
          mechanism described in Decision Making Process will apply.
        </li>
        <li>
          Lead Maintainer Re-election: The Lead Maintainer(s) is re-elected
          annually, or earlier if required. Any current Maintainer may nominate
          themselves or others. Elections are conducted by majority vote.
        </li>
        <li>
          Transparency: All discussions and decisions on Maintainer
          appointments, removals, or Lead Maintainer elections are recorded and
          minuted publicly.
        </li>
        <li>
          Offboarding: As part of the Annual Maintainer Review, all maintainers
          will be asked to:
          <ul className="secondary-bullets">
            <li>Reconfirm their commitment to the project</li>
            <li>Share any availability constraints</li>
            <li>
              Optionally step down if unable to contribute actively Inactivity
              Criteria: A maintainer may be considered inactive if, for 6+
              months they have not.
            </li>
          </ul>
        </li>
        <li>Reviewed or merged PRs</li>
        <li>Participated in governance or roadmap discussions</li>
        <li>
          Attended calls or asynchronous decisions e.g. GitHub issues, Email
          chains, Shared documents Offboarding
        </li>
        <li>Voluntary: Maintainers may step down at any time</li>
        <li>
          Involuntary: If inactive and unresponsive, maintainers may be
          respectfully offboarded through consensus
          <ul className="secondary-bullets">
            <li>
              Note: Any offboarding decisions will be handled with care and
              reviewed against the FINOS policies to ensure alignment with
              community and legal standards
            </li>
          </ul>
        </li>
      </ul>,
    ],
  },
  sectionFive: {
    className: "bg-white color-charcoal display-block",

    elements: [
      <h2>Contribution Guidelines</h2>,
      <p>
        Contributions must abide by the contribution guidelines set out in{" "}
        <a
          href="https://github.com/finos/fluxnova-bpm-platform/blob/main/CONTRIBUTING.md"
          target="_new"
        >
          CONTRIBUTING.md
        </a>
      </p>,
      <h3>Decision Making Process</h3>,
      <p>Fluxnova follows a consensus- based decision-making model:</p>,
      <ul>
        <li>Preferred: All relevant Maintainer agree</li>
        <li>Acceptable: Majority agrees, no strong objections</li>
        <li>
          If consensus cannot be achieved, Maintainers vote per Maintainer
          Voting
        </li>
      </ul>,
      <h3>Maintainer Voting</h3>,
      <p>
        Maintainers may hold votes when consensus is not achievable. Any
        Maintainer may call for a vote. Voting rules:
      </p>,
      <ul>
        <li>
          Maintainers have 36 hours to vote: +1 (Agree), -1 (Disagree), +0
          (Abstain)
        </li>
        <li>Majority of votes cast determines the outcome</li>
        <li>If tied, the Lead Maintainer may cast a tie-breaking vote</li>
      </ul>,
      <p>Votes MUST be public, taking place via:</p>,
      <ul>
        <li>GitHub (Issues)</li>
        <li>Public communication channels (mailing list)</li>
        <li>Minuted project meetings</li>
      </ul>,
      <p>Voting may be required but not limited to:</p>,
      <ul>
        <li>Contested pull requests</li>
        <li>Future roadmap decisions</li>
        <li>Appointing or removing Maintainers</li>
        <li>Electing or removing the Lead Maintainer</li>
        <li>Amendments to governance documents</li>
      </ul>,
    ],
  },
  sectionSix: {
    className: "bg-gray color-charcoal display-block",

    elements: [
      <h2>Working Group Structure</h2>,
      <p>
        Fluxnova operates two standing Working Groups, to streamline both
        technical collaboration and strategic oversight. Additional working
        groups may be formed, from time to time, to work on specific topics.
      </p>,
      <h3>Maintainers Working Group</h3>,
      <p>
        Purpose: Technical forum for Maintainers to discuss engine code, new
        features, build pipelines and CI automation. Duration: 60 minutes
      </p>,
      <p>Responsibilities:</p>,
      <ul>
        <li>Review and merge open pull requests</li>
        <li>Discuss architecture and design proposals</li>
        <li>
          Ensure compliance with FINOS governance and open-source best practices
        </li>
      </ul>,
      <h3>General Working Group</h3>,
      <p>
        Purpose: Programme level forum that escalates items from the Maintainers
        Working Group and steers overall delivery. Duration: 30 minutes
      </p>,
      <p>Responsibilities:</p>,
      <ul>
        <li>Oversee roadmap milestones and delivery targets</li>
        <li>
          Review and approve major technical changes that require wider
          agreement
        </li>
        <li>
          Ensure ongoing alignment with FINOS governance and open-source best
          practices
        </li>
      </ul>,
      <h3>Meeting Cadence and Chair Rotation</h3>,
      <p>
        Both Working Groups meet weekly and all sessions are minuted and
        published publicly.
      </p>,
      <table>
        <thead>
          <tr>
            <th>Period</th>
            <th>Chair & Minutes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q2 2025</td>
            <td>NatWest</td>
          </tr>
          <tr>
            <td>Q3 2025</td>
            <td>Fidelity</td>
          </tr>
          <tr>
            <td>Q4 2025</td>
            <td>Deutsche</td>
          </tr>
          <tr>
            <td>Q1 2026</td>
            <td>Capital One</td>
          </tr>
        </tbody>
      </table>,
      <p>Chair Responsibilities:</p>,
      <ul>
        <li>Set agendas and create meeting issues in GitHub</li>
        <li>Facilitate the call and manage time</li>
        <li>Ensure minutes capture key decisions and assigned actions</li>
        <li>Track action follow up and escalate risks or blockers as needed</li>
      </ul>,
    ],
  },
  sectionSeven: {
    className: "bg-white color-charcoal display-block",

    elements: [
      <h2>Community Participation</h2>,
      <p>
        Fluxnova follows consensus-based decision-making process, the guiding
        principles for participation include:
      </p>,
      <h3>Openness</h3>,
      <p>
        Participation is open to all who are materially affected by Fluxnova’s
        direction. There are no financial barriers or affiliation requirements
        to contribute.
      </p>,
      <h3>Lack of Dominance</h3>,
      <p>
        No single individual company, or interest group shall dominate decision
        making. Contributions are considered on their merit.
      </p>,
      <h3>Balance</h3>,
      <p>
        Efforts are made to involve diverse stakeholders across industry sectors
        to ensure well rounded and equitable outcomes.
      </p>,
      <h3>Consideration of Views and Objections</h3>,
      <p>
        All feedback, objections and comments from contributors shall be
        thoroughly reviewed. Maintainers are responsible for recording responses
        and actions.
      </p>,
      <h3>Changes to this Document</h3>,
      <p>
        This document MAY be amended by consensus of the Maintainers, see
        Decision Making Process.
      </p>,
    ],
  },
};
