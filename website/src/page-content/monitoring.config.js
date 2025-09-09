import MonitoringIcon from "/img/icons/monitoring.svg";

export const MonitoringConfig = {
  hero: {
    className: "bg-primary color-white",
    image: {
      side: "left",
      content: <MonitoringIcon fill="#007dff" />,
      title: "MONITORING",
    },
    elements: [
      <h1>Real-Time Visibility for Mission-Critical Processes</h1>,
      <p className="heroDescription">
        Fluxnova puts everything you need in one view. Get real-time insights,
        take actions, and keep your business-critical processes running
        smoothly—without the chaos.
      </p>,
    ],
  },
  sectionOne: {
    className: "bg-white color-gray",
    buttonText: "Get Started",
    image: {
      side: "right",
      content: (
        <img
          src="/img/feature/monitoring/dashboard.png"
          alt="Modeler Shape Editor"
        />
      ),
    },
    elements: [
      <p>DASHBOARD</p>,
      <h2>Need Answers Fast? Just Click the Chart.</h2>,
      <p>
        Our intuitive dashboards show you what’s happening across your
        operations—instantly. From incident counts to running process instances,
        explore the data visually and jump straight to the details with one
        click.
      </p>,
    ],
  },
  sectionTwo: {
    className: "bg-gray color-black",
    image: {
      side: "left",
      content: (
        <img src="/img/feature/monitoring/list.png" alt="Modeler Overview" />
      ),
    },
    elements: [
      <p>LISTS</p>,
      <h2>Segmented Views</h2>,
      <p>
        Fluxnova's list pages give you quick access to essential data--organized
        by:
      </p>,
      <ul>
        <li>Process Definitions</li>
        <li>Batches</li>
        <li>Deployments</li>
        <li>Decision Definitions</li>
      </ul>,
    ],
  },
  sectionThree: {
    image: {
      content: (
        <img src="/img/feature/monitoring/detail.png" alt="DetailView" />
      ),
    },
    elements: [
      <p>DETAILS</p>,
      <h2>Smarter Monitoring Starts Here</h2>,
      <p>
        Fluxnova Monitoring gives you the power to both analyze and resolve
        process issues. Identify bottlenecks and incidents at a glance with
        intuitive process model overlays. Fix issues on the fly and apply the
        latest improvements—no downtime required.
      </p>,
    ],
  },
};
