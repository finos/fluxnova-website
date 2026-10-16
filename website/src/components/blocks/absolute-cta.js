import React from "react";
import generateClassName from "../../utils/generate-classname";
import generateElements from "../../utils/generate-elements";
import classnames from "classnames";
import styles from "./styles.module.scss";

export default function AbsoluteCta({ config }) {
  return (
    <section
      className={classnames(
        generateClassName(config?.className),
        styles.absoluteCtaWrapper,
      )}
    >
      <div className="page-section__inner page-section__inner--cta">
        <div className="page-copy">{generateElements(config.elements)}</div>
        {config.button && (
          <div className="page-cta-action">{config.button}</div>
        )}
      </div>
    </section>
  );
}
