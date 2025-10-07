import Layout from "@theme/Layout";
import styles from "./styles.module.scss";
import React from "react";
import { modelerConfig as pageConfig } from "../page-content/modeler.config";
import generateElements from "../utils/generate-elements";
import TextWithCard from "../components/blocks/text-with-card";
import TextWithPaddedImage from "../components/blocks/text-with-padded-image";
import Link from "@docusaurus/Link";

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
          <button className="tertiary">
            <Link to="https://github.com/finos/fluxnova-bpm-platform/tree/main/migrator">
              Try the Migration Tool
            </Link>
          </button>
        </div>
      </main>
    </Layout>
  );
}
