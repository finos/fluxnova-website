import React from "react";

import Link from "@docusaurus/Link";
import generateClassName from "../../utils/generate-classname";
import getOrderedElements from "../../utils/get-ordered-elements";
import generateElements from "../../utils/generate-elements";

export default function TextWithImage({ config }) {
  const isMedia = config.image?.variant === "media";

  const visual = isMedia ? (
    <div className="page-visual page-visual--media">{config.image.content}</div>
  ) : (
    <div className="page-visual">
      <div className="visual-panel">
        <div className="visual-panel__glow" aria-hidden="true" />
        <div className="visual-panel__content">{config.image.content}</div>
      </div>
      {config.button && (
        <div className="page-visual__action">
          <button className={config.button.className}>
            <Link to={config.button.to}>{config.button.text}</Link>
          </button>
        </div>
      )}
    </div>
  );

  const elements = [
    <div className="page-copy" key="copy">
      {generateElements(config.elements)}
    </div>,
    React.cloneElement(visual, { key: "visual" }),
  ];

  return (
    <section className={generateClassName(config.className)}>
      <div className="page-section__inner page-section__inner--split">
        {generateElements(getOrderedElements(config.image.side, elements))}
      </div>
    </section>
  );
}
