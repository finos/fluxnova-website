import React from "react";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../pages/styles.module.scss";
import Link from "@docusaurus/Link";

export default function Feature({ title, description, link, content }) {
  return (
    <div className={classnames("text--center col padding", styles.feature)}>
      <Link href={link}>
        {content}
        <h3 className="cardTitle">{title}</h3>
        <p className="cardDescription">{description}</p>
      </Link>
    </div>
  );
}
