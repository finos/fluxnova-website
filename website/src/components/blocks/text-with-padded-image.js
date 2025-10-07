import React from "react";

import styles from "./styles.module.scss";
import generateClassName from "../../utils/generate-classname";
import getOrderedElements from "../../utils/get-ordered-elements";
import generateElements from "../../utils/generate-elements";

export default function TextWithPaddedImage({ config }) {
  const imageSide =
    config.image.side === "left" || config.image.side === "right"
      ? config.image.side
      : "right";

  const elements = [
    <div className="textContent">{generateElements(config.elements)}</div>,
    <div className={`${styles.paddedImageWrapper} ${styles[imageSide]}`}>
      {config.image.content}
    </div>,
  ];

  return (
    <div
      className={generateClassName(config?.className)}
      style={
        config.image.side === "right"
          ? { paddingRight: "0" }
          : { paddingLeft: "0" }
      }
    >
      {generateElements(getOrderedElements(config.image.side, elements))}
    </div>
  );
}
