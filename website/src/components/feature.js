import React from "react";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../pages/styles.module.css";
import Link from "@docusaurus/Link";

export default function Feature({ imageUrl, title, description, link }) {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    <div className={classnames("text--center col padding", styles.feature)}>
      {imgUrl && (
        <Link href={link}>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </Link>
      )}
      <h3 class="cardTitle">{title}</h3>
      <p class="cardDescription">{description}</p>
    </div>
  );
}
