import Layout from "@theme/Layout";
import classnames from "classnames";
import styles from "./styles.module.scss";
import React from "react";
import { engineConfig as pageConfig } from "../page-content/engine.config";
import TextWithCard from "../components/blocks/text-with-card";
import TextWithPaddedImage from "../components/blocks/text-with-padded-image";

export default function Engine() {
  return (
    <Layout>
      <header>
        <TextWithCard config={pageConfig.hero} />
      </header>
      <main>
        <TextWithPaddedImage config={pageConfig.sectionOne} />
        <TextWithPaddedImage config={pageConfig.sectionTwo} />
      </main>
    </Layout>
  );
}
