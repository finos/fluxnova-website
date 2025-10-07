import React from "react";

import Layout from "@theme/Layout";
import styles from "./styles.module.scss";
import { MonitoringConfig as pageConfig } from "../page-content/monitoring.config";
import generateElements from "../utils/generate-elements";
import TextWithCard from "../components/blocks/text-with-card";
import TextWithPaddedImage from "../components/blocks/text-with-padded-image";

export default function Monitoring() {
  return (
    <Layout>
      <header>
        <TextWithCard config={pageConfig.hero} />
      </header>
      <main>
        <TextWithPaddedImage config={pageConfig.sectionOne} />
        <TextWithPaddedImage config={pageConfig.sectionTwo} />
        <div className="block bg-white">
          <div className={styles.sectionThreeText}>
            {generateElements(pageConfig.sectionThree.elements)}
          </div>
          <div className={styles.sectionThreeImageWrapper}>
            <div className={styles.sectionThreeImage}>
              {pageConfig.sectionThree.image.content}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
