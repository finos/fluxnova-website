import QuestionIcon from "/img/icons/question.svg";
import ContributeIcon from "/img/icons/contribute.svg";
import PeopleExchangeIcon from "/img/icons/people-exchange.svg";
import GroupsIcon from "/img/icons/groups.svg";

export const contributeConfig = {
  sectionOne: {
    className: "bg-primary color-white",
    image: {
      content: <ContributeIcon fill="#fff" />,
      side: "right",
    },
    elements: [
      <h1>Ways to Contribute</h1>,
      <h2 className="lightWeight">
        We’re excited you’re here and want to contribute to Fluxnova! This guide
        outlines how you can contribute effectively and collaboratively.
      </h2>,
    ],
  },
  sectionThree: {
    className: "bg-white color-charcoal display-block",

    elements: [
      <h3>Contribute your knowledge</h3>,
      <p>
        Help others by participating in discussions on{" "}
        <a
          href="https://github.com/finos/fluxnova-bpm-platform/discussions"
          target="_blank"
        >
          GitHub
        </a>{" "}
        or by joining our mailing list{" "}
        <a href="mailto:fluxnova@lists.finos.org">fluxnova@lists.finos.org</a>{" "}
        (email <a href="mailto:fluxnova+subscribe@lists.finos.org">fluxnova+subscribe@lists.finos.org</a> to self subscribe to
        the list).
      </p>,
      <h3>File bugs or feature requests</h3>,
      <p>
        Found a bug in the code or have a feature that you would like to see in
        the future?{" "}
        <a
          href="https://github.com/finos/fluxnova-bpm-platform/issues"
          target="_blank"
        >
          Search our open issues
        </a>{" "}
        if we have it on the radar already or{" "}
        <a
          href="https://github.com/finos/fluxnova-bpm-platform/issues/new/choose"
          target="_blank"
        >
          create a new issue
        </a>{" "}
        otherwise.
      </p>,
      <h4>Please try to create high quality issues:</h4>,
      <ul>
        <li>
          Give enough context so that a person who doesn't know your project can
          understand your request
        </li>
        <li>
          Be concise, only add what's needed to understand the core of the
          request
        </li>
        <li>
          If you raise a bug report, describe the steps to reproduce the problem
        </li>
        <li>
          Specify your environment (e.g. Fluxnova version, Fluxnova modules you
          use, ...)
        </li>
        <li>
          Provide code. For a bug report, create a test that reproduces the
          problem. For feature requests, create mockup code that shows how the
          feature might look
        </li>
      </ul>,
      <h3>Contribute code</h3>,
      <p>
        You can contribute code that fixes bugs and/or implements features. Here
        is how it works:
      </p>,
      <ul>
        <li>
          Select an issue that you would like to work on. Have a look at our{" "}
          <a href="https://github.com/orgs/finos/projects/116" target="_blank">
            Project Board
          </a>{" "}
          or the issues lists for the individual projects, e.g.{" "}
          <a
            href="https://github.com/finos/fluxnova-bpm-platform/issues"
            target="_blank"
          >
            Fluxnova-BPM-Platform
          </a>{" "}
          Issues if you need inspiration. Be aware that some of the issues need
          good knowledge of the surrounding code.
        </li>
        <li>
          <a
            href="https://github.com/finos/flowave-bpm-platform/fork"
            target="_blank"
          >
            Create a fork
          </a>{" "}
          of the project to contribute from. Create a feature branch in your
          fork to hold your changes.
        </li>
        <li>
          Check your code changes against our{" "}
          <a
            href="https://github.com/finos/fluxnova-bpm-platform/blob/main/CONTRIBUTING.md#contribution-checklist"
            target="_blank"
          >
            contribution checklist
          </a>{" "}
          (For large changes, open a draft PR before you have finished your
          implementation to get feedback.)
        </li>
        <li>
          <a
            href="https://github.com/finos/flowave-bpm-platform/pulls"
            target="_blank"
          >
            Create a pull request
          </a>
          .
        </li>
      </ul>,

      <h2 className="lightWeight paddingTop">Browse our issues</h2>,
      <p>
        We manage issues for the multiple Fluxnova projects through our Project
        Board. You can find the full list of FINOS hosted Fluxnova projects{" "}
        <a
          href="https://github.com/finos/?q=fluxnova&type=all&language=&sort="
          target="_blank"
        >
          here
        </a>
        .
      </p>,
      <p>
        We use labels to mark and group our issues for easier browsing. We
        define the following label prefixes:{" "}
        <strong>** labels arent in Fluxnova. Needs To Be Reviewed **</strong>
      </p>,
      <ul>
        <li>
          <strong>bot:</strong> labels that control a github app, workflow, ...
        </li>
        <li>
          <strong>ci:</strong> labels that control the CI for a pull request
        </li>
        <li>
          <strong>group:</strong> Arbitrary labels that we can define to group
          tickets. If you create this, please add a DRI to the description to
          make sure someone has ownership, e.g. to decide if we still need the
          label
        </li>
        <li>
          <strong>potential:</strong> Issues that we are potentially releasing
          with the given version. This is not a guarantee and does not express
          high confidence.
        </li>
        <li>
          <strong>hacktoberfest:</strong> labels for hacktoberfest
          contributions. This prefix cannot be changed. It is a rule of
          Hacktoberfest to name it like that.
        </li>
        <li>
          <strong>scope:</strong> The technical scope in which the ticket makes
          changes.
        </li>
        <li>
          <strong>type:</strong> Issue type. Every issue should have exactly one
          of these labels. They are automatically added when you create a new
          issue from a template.
        </li>
        <li>
          <strong>version:</strong> Issues that will be released (with high
          confidence) with the given version.
        </li>
      </ul>,

      <h2 className="lightWeight paddingTop">More...</h2>,
      <h3>More details are available in these areas:</h3>,
      <ul>
        <li>Building Fluxnova BPM Platform Locally</li>
        <li>Building with GitHub Actions on FINOS</li>
        <li>Running Fluxnova BPM Platform</li>
        <li>Create a pull request</li>
        <li>Contribution checklist</li>
        <li>Contributor License Agreement (CLA)</li>
        <li>Commit message conventions</li>
        <li>Review process</li>
      </ul>,
      <p>
        <a
          href="https://github.com/finos/fluxnova-bpm-platform/blob/main/CONTRIBUTING.md"
          target="_blank"
        >
          View full details
        </a>
      </p>,
    ],
  },
  sectionFour: {
    className: "bg-gray color-charcoal display-block",

    elements: [
      <h3>Have you explored our rich documentation?</h3>,
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
