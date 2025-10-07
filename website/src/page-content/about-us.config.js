import LocationIcon from "/img/icons/location.svg";
import OpenBookIcon from "/img/icons/open-book.svg";
import PeopleExchangeIcon from "/img/icons/people-exchange.svg";
import GroupsIcon from "/img/icons/groups.svg";

export const AboutUsConfig = {
  sectionOne: {
    className: "bg-primary color-white",
    image: {
      content: <LocationIcon fill="currentColor" />,
      side: "right",
    },
    elements: [
      <h1>About Us</h1>,
      <h2 className="lightWeight">
        Fluxnova is a process orchestration platform that helps organizations
        design and run end-to-end workflows. Governed by FINOS and built on open
        standards, it offers BPMN/DMN compatibility, migration tooling, and
        audit-ready execution from day one giving teams the freedom to automate
        and orchestrate without vendor dependence.
      </h2>,
    ],
  },
  sectionTwo: {
    className: "bg-gray color-black",
    image: {
      content: <OpenBookIcon fill="currentColor" />,
      side: "left",
    },
    // button: {
    //   text: "try it",
    //   className: "primary",
    // },
    elements: [
      <h2>
        FINOS Launches Fluxnova with Fidelity Investments, NatWest Group,
        Deutsche Bank, BMO and Capital One - An Open-Source Orchestration
        Platform to Scale Process Automation
      </h2>,
      <p>
        Support and shape the Fluxnova ecosystem through{" "}
        <a
          href="https://www.finos.org/membership-benefits#become-a-member"
          target="_blank"
        >
          FINOS Membership
        </a>
        . Help fuel growth, influence the future direction of the project, and
        prepare for opportunities such as certification.
      </p>,
    ],
  },
  sectionThree: {
    className: "bg-white color-gray display-block",
    // image: {
    //   content: <PeopleExchangeIcon fill="black" />,
    //   side: "left",
    // },
    // button: {
    //   text: "Join the Community",
    //   className: "secondary",
    // },
    elements: [
      <h2>Member and Leadership Perspectives</h2>,
      <p>
        <q className="quotes">
          Fluxnova gives our industry the ability to build together, share
          together, and safeguard together. As the first time financial
          institutions exercise their right to fork to collaboratively chart
          their future under an open governance, this is a landmark moment in
          the open source readiness journey of this industry, showing a clear
          path to the strategic ROI open collaboration can deliver.
        </q>{" "}
        <strong> - Gabriele Columbro, Executive Director, FINOS</strong>
      </p>,
      <p>
        <q className="quotes">
          Fluxnova represents a tremendous opportunity to collaborate with our
          peers and build a robust community around production-grade code.
          Across organizations, business process modeling is a core business
          capability with many common implementation characteristics, making it
          ripe for open collaboration. We are committed to being responsible
          users and contributors within the open-source community and welcome
          the new relationships this project will bring.
        </q>{" "}
        <strong>
          {" "}
          - Joe Frazier, Head of Architecture and Engineering at Fidelity
          Investments
        </strong>
      </p>,
      <p>
        <q className="quotes">
          Fluxnova shows what's possible through open collaboration - creating
          shared solutions that make innovation faster and more accessible
          across the industry. The project gives organisations the freedom to
          modernise on their own terms while empowering engineers with the tools
          and autonomy to focus on what they do best. By reducing complexity and
          improving collaboration, we can better deliver experiences that our
          colleagues and customers truly value.
        </q>{" "}
        <strong>
          {" "}
          - James McLeod, Open Source Program Lead, NatWest Group
        </strong>
      </p>,
      <p>
        <q className="quotes">
          Fluxnova provides us with a predictable long-term model that supports
          process automation and transparent workflow management. These are
          essential activities as we improve the client experience, safeguard
          compliance and strengthen resilience.
        </q>{" "}
        <strong> - Stefan Schaffer, Deutsche Bank</strong>
      </p>,
      <p>
        <q className="quotes">
          BMO recognizes that collaboration is essential to the future of
          finance. Fluxnova provides the open, scalable, and secure foundation
          needed to support client trust and regulatory alignment.
        </q>{" "}
        <strong> - Kim Prado, BMO</strong>
      </p>,
      <p>
        <q className="quotes">
          At Capital One, open source powers our ability to accelerate
          innovation and better serve our customers. We’re committed to our role
          as sustainers in the open source community, and the Fluxnova project
          is a strong example of innovation that can arise when organizations
          are invested in open source. Fluxnova offers a scalable orchestration
          platform as enterprises continue to evolve with automation and AI.
        </q>{" "}
        <strong>
          {" "}
          - Duane O’Brien, Director and Head of Open Source Program Office,
          Capital One
        </strong>
      </p>,
    ],
  },
  // sectionFour: {
  //   className: "bg-white color-gray",
  //   image: {
  //     content: <GroupsIcon fill="black" />,
  //     side: "left",
  //   },
  //   elements: [
  //     <h2>Certification???</h2>,
  //     <p>content about the certification program...</p>,
  //   ],
  // },
};
