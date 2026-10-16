import ReleasesIcon from "/img/icons/releases.svg";
import React from "react";
import Link from "@docusaurus/Link";

export const releasesConfig = {
  sectionOne: {
    className: "bg-primary color-white",
    image: {
      content: <ReleasesIcon fill="#fff" />,
      side: "right",
    },
    elements: [
      <h1>Fluxnova Releases</h1>,
      <p className="page-lead">
        Release notes include details of new product features, important
        changes, and enhancements.
      </p>,
    ],
  },
  sectionTwo: {
    className: "bg-white color-charcoal display-block",
    elements: [
      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <h2>View Release Notes on Github</h2>
        <button className="primary">
          <Link to="https://github.com/finos/fluxnova-bpm-platform/releases">
            Release Notes
          </Link>
        </button>
      </div>,
    ],
  },
  sectionThree: {
    className: "display-block",
    elements: [
      <h1>About Fluxnova Releases</h1>,
      <p>
        Fluxnova Releases provide a complete overview of improvements, updates,
        and changes across the Fluxnova platform. Each release documents new
        features, enhancements, bug fixes, performance optimizations, and
        important notices that help understand how the platform is evolving.
        Release notes are published and are designed to give clear visibility
        into what’s new, what’s changed, and what actions if any are required.
        Whether you are adopting new capabilities, planning upgrades, or
        tracking platform stability, these releases serve as the primary source
        of truth for Fluxnova updates. For long term reference, all releases are
        accessible by version and date. Links to detailed documentation,
        migration guidance, and known issues are included where relevant to
        ensure a smooth and predictable experience for users and contributors.
      </p>,
    ],
  },
};
