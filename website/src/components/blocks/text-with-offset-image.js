import React from "react";

import generateElements from "../../utils/generate-elements";
import styles from "./styles.module.scss";
import { MonitoringConfig as pageConfig } from "../../page-content/monitoring.config";
import classnames from "classnames";

export default function TextWithOffsetImage({ config }) {
  return (
    <div className={classnames(config.className)}>
      <div
        className={classnames(
          styles.offsetImageText,
          config.imageSide === "left" ? styles.right : styles.left,
        )}
      >
        {generateElements(config.elements)}
      </div>
      <div
        className={classnames(
          styles.offsetImageWrapper,
          config.imageSide === "left" ? styles.left : styles.right,
        )}
      >
        <div
          className={classnames(
            styles.offsetImage,
            config.imageSide === "left" ? styles.left : styles.right,
          )}
        >
          {pageConfig.sectionThree.image.content}
        </div>
      </div>
    </div>
  );
}
