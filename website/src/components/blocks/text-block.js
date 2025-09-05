import React from "react";

import generateClassName from "../../utils/generate-classname";
import generateElements from "../../utils/generate-elements";

export default function TextBlock({ config }) {
  return (
    <div className={generateClassName(config?.className)}>
      {generateElements(config.elements)}
    </div>
  );
}
