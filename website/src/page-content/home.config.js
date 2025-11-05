import classnames from "classnames";
import React from "react";

export const HomeConfig = {
  // TODO: pull all of the home config from here, not just buttons
  buttons: [
    {
      name: <>Get Started</>,
      url: "https://docs.fluxnova.finos.org",
      style: classnames("primary"),
    },
    {
      name: <>Join the Community</>,
      url: "https://github.com/finos/fluxnova-modeler/discussions",
      style: classnames("secondary"),
    },
  ],
};
