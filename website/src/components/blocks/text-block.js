import React from "react";

import generateClassName from "../../utils/generate-classname";
import generateElements from "../../utils/generate-elements";

export default function TextBlock({ config }) {
  const raw = config?.className || "";
  const isContentSection =
    raw.includes("bg-") ||
    raw.includes("display-block") ||
    raw.includes("side-padding") ||
    raw.includes("space-around") ||
    raw.includes("side-bottom");

  // Preserve legacy flat layouts (e.g. homepage feature row)
  if (!isContentSection) {
    return <div className={raw}>{generateElements(config.elements)}</div>;
  }

  const isActions = raw.includes("space-around");
  const isNarrow =
    raw.includes("display-block") ||
    raw.includes("side-padding") ||
    raw.includes("side-bottom");

  const innerClass = [
    "page-section__inner",
    isNarrow ? "page-section__inner--narrow" : "",
    isActions ? "page-section__inner--actions" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={generateClassName(raw)}>
      <div className={innerClass}>{generateElements(config.elements)}</div>
    </section>
  );
}
