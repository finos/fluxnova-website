import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import React from "react";
import { modelerConfig as pageConfig } from "../page-content/modeler.config";
import generateElements from "../utils/generate-elements";
import TextWithCard from "../components/blocks/text-with-card";
import TextWithPaddedImage from "../components/blocks/text-with-padded-image";

export default function Modeler() {
  return (
    <Layout>
      <header>
        <TextWithCard config={pageConfig.hero} />
      </header>
      <main>
        <TextWithPaddedImage config={pageConfig.sectionOne} />
        <TextWithPaddedImage config={pageConfig.sectionTwo} />
        <div className={styles.sectionThree}>
          {generateElements(pageConfig.sectionThree.elements)}
          <button className="tertiary">Try the Migration Tool</button>
        </div>
      </main>
    </Layout>
  );
}
