import QuestionIcon from "/img/icons/question.svg";
import MigrationIcon from "/img/icons/migration.svg";
import PeopleExchangeIcon from "/img/icons/people-exchange.svg";
import GroupsIcon from "/img/icons/groups.svg";

export const MigrationConfig = {
  sectionOne: {
    className: "bg-primary color-white",
    image: {
      content: <MigrationIcon fill="#fff" />,
      side: "right",
    },
    elements: [
      <h1>Why Fluxnova Migrator</h1>,
      <h2 className="lightWeight">
        Migrating workflows between BPMN platforms is rarely straightforward.
        Different engines interpret BPMN in their own ways, so even the simplest
        models can behave differently when moved causing delays, rework and
        inconsistencies. Fluxnova Migrator removes that uncertainty. It
        automates the heavy lifting of migration, transforming your existing
        Camunda-based workflows into Fluxnova ready projects with speed,
        accuracy and minimal manual effort.
      </h2>,
    ],
  },
  sectionTwo: {
    className: "bg-gray color-black",
    image: {
      content: <QuestionIcon fill="currentColor" />,
      side: "left",
    },
    button: {
      text: "Learn more",
      className: "primary",
    },
    elements: [
      <h2>How it works</h2>,
      <p>
        Fluxnova Migrator uses powerful refactoring recipes to automatically
        prepare your project for Fluxnova. It renames packages, updates imports,
        converts BPMN and DMN models and replaces dependencies all while leaving
        your existing business logic intact. Most workflows migrate
        automatically. For more complex or highly customised patterns, you may
        need to make small manual adjustments after migration but the tool
        dramatically reduces the amount of work required, letting you focus only
        on what truly matters.
      </p>,
    ],
  },
  sectionThree: {
    className: "bg-white color-charcoal display-block",

    elements: [
      <h3>What the tool does</h3>,
      <p>
        <strong>Convert:</strong> Automatically scans and transforms your source
        code updating namespaces, imports, BPMN/DMN files and dependencies so
        your workflows are compatible with Fluxnova with minimal manual changes.
      </p>,
      <p>
        <strong>Refine:</strong> Handles the majority of migration tasks
        automatically. For highly customised scenarios, only minor follow-up
        tweaks are needed, significantly reducing overall migration time and
        risk.
      </p>,
      <h3>Supported Platforms</h3>,
      <p>
        Camunda 7 Community Edition (7.24) – migrate existing workflows directly
        into Fluxnova. (Support for additional platforms will be added over
        time.)
      </p>,
    ],
  },
  sectionFour: {
    className: "bg-gray color-charcoal display-block",

    elements: [
      <h3>A Guided Journey</h3>,
      <p>
        Migration isn’t just about tools it’s about having a clear plan.
        Fluxnova Migrator helps you move through each stage confidently:
      </p>,
      <ul>
        <li>
          <strong>Prepare</strong> – Set up backups and confirm build
          requirements.
        </li>
        <li>
          <strong>Transform</strong> – Run the migrator to automatically convert
          your application.
        </li>
        <li>
          <strong>Validate</strong> – Test thoroughly with the Fluxnova runtime.
        </li>
        <li>
          <strong>Commit</strong> – Switch workloads to Fluxnova and go live.
        </li>
      </ul>,
      <h3>Benefits</h3>,
      <ul>
        <li>
          <strong>Workflows preserved:</strong> All processes including inflight
          ones migrate seamlessly, so operations continue without interruption.
        </li>
        <li>
          <strong>Lower risk:</strong> All changes are applied directly to your
          source code, so you stay in control review, adjust or revert them at
          any time using standard version control tools.
        </li>
        <li>
          <strong>Faster transformation:</strong> Automated migration completes
          in minutes, not weeks.
        </li>
        <li>
          <strong>Reduced disruption:</strong> The tool handles most changes
          automatically, keeping manual work to a minimum.
        </li>
      </ul>,
    ],
  },
};
