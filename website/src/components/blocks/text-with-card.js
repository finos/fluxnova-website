import React from "react";

import generateClassName from "../../utils/generate-classname";
import FeatureCard from "../feature-card/feature-card";
import getOrderedElements from "../../utils/get-ordered-elements";
import generateElements from "../../utils/generate-elements";

export default function TextWithCard({ config }) {
  const elements = [
    <div className="page-copy" key="copy">
      {generateElements(config.elements)}
    </div>,
    <div className="page-visual" key="visual">
      <FeatureCard config={config} />
    </div>,
  ];

  return (
    <section className={generateClassName(config?.className)}>
      <div className="page-section__inner page-section__inner--split">
        {generateElements(getOrderedElements(config.image.side, elements))}
      </div>
    </section>
  );
}
