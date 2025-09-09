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
      <h2 className="lightWeight">
        <strong>ABOUT US - </strong> Lorem ipsum dol or sit amet consectetur.
        Fermentum sit faucibus turpis quam lectus nunc eu eu leo. At non cursus
        ultrices metus non magnis mauris malesuada tempus.
      </h2>,
    ],
  },
  sectionTwo: {
    className: "bg-gray color-black",
    image: {
      content: <OpenBookIcon fill="currentColor" />,
      side: "left",
    },
    button: {
      text: "Get Started",
      className: "primary",
    },
    elements: [
      <h2>Maintainer Role</h2>,
      <p>
        A maintainer lead and drive product strategy by contributing to roadmap,
        product features and commitment to open source.
      </p>,
      <p>
        A maintainer is a contributor who, by virtue of their contribution
        history, has been given write access to project repositories and may
        approve and merge contributions to the project.
      </p>,
      <p>
        A contributor is anyone who submits a contribution to the project.
        Contributions include code & pull requests, issues, comments,
        documentation, media, or any combination of the above.
      </p>,
    ],
  },
  sectionThree: {
    className: "bg-white color-gray",
    image: {
      content: <PeopleExchangeIcon fill="black" />,
      side: "left",
    },
    button: {
      text: "Join the Community",
      className: "secondary",
    },
    elements: [
      <h2>Maintainer Responsibilities and available resources</h2>,
      <p>
        FINOS project maintainers are responsible for technical & subject matter
        oversight of the project, and for driving commmunity growth and
        engagement. FINOS supports project maintainers and their project
        communities through:
      </p>,
      <ul>
        <li>
          Operational enablement & support: GitHub, meeting infrastructure
        </li>
        <li>
          Guidance and coaching on open source governance and best practices
        </li>
        <li>
          Project marketing: coordination and production of webinars,
          newsletters, podcasts, participation in FINOS and external conferences
          and events, project merchandising/swag
        </li>
      </ul>,
      <p>
        FINOS project maintainers are encouraged to leverage the Linux
        Foundation's LFX Project Control Center, a platform that enables
        self-service configuration for governance, membership, IT, developer and
        collaboration tools, documentation, and community roles.
      </p>,
    ],
  },
  sectionFour: {
    className: "bg-white color-gray",
    image: {
      content: <GroupsIcon fill="black" />,
      side: "left",
    },
    elements: [
      <h2>Liason to FINOS</h2>,
      <p>
        Each project is assigned a FINOS Liason to act as the primary point of
        contact between the project and FINOS. The Liason works closely with
        project maintainers to ensure that the project is receiving the support
        it needs, and to help identify opportunities for growth and engagement
        within the broader FINOS community.
      </p>,
    ],
  },
};
