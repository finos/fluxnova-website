import React from "react";

import generateClassName from "../../utils/generate-classname";
import FeatureCard from "../feature-card/feature-card";
import getOrderedElements from "../../utils/get-ordered-elements";
import generateElements from "../../utils/generate-elements";

export default function TextWithCard({ config }) {
  const elements = [
    <div className="standard-padding">{generateElements(config.elements)}</div>,
    <div>
      <FeatureCard config={config} />
    </div>,
  ];

  return (
    <div className={generateClassName(config?.className)}>
      {generateElements(getOrderedElements(config.image.side, elements))}
    </div>
  );
}
