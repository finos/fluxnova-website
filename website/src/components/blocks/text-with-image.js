import React from "react";

import Link from "@docusaurus/Link";
import generateClassName from "../../utils/generate-classname";
import getOrderedElements from "../../utils/get-ordered-elements";
import generateElements from "../../utils/generate-elements";

export default function TextWithImage({ config }) {
  const elements = [
    <div className="flex-child">{generateElements(config.elements)}</div>,
    <div>
      <div className="vertical-flex">
        <div>{config.image.content}</div>
        {config.button && (
          <div>
            <button className={config.button.className}>
              <Link to={config.button.to}>{config.button.text}</Link>
            </button>
          </div>
        )}
      </div>
    </div>,
  ];
  return (
    <div className={generateClassName(config.className)}>
      {generateElements(getOrderedElements(config.image.side, elements))}
    </div>
  );
}
