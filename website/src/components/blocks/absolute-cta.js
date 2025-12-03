import React from "react";
import generateClassName from "../../utils/generate-classname";
import generateElements from "../../utils/generate-elements";
import classnames from "classnames";
import styles from "./styles.module.scss";

export default function AbsoluteCta({ config }) {
  return (
    <div
      className={classnames(
        generateClassName(config?.className),
        styles.absoluteCtaWrapper,
      )}
      style={{ display: "block" }}
    >
      {generateElements(config.elements)}
      {config.button}
    </div>
  );
}
