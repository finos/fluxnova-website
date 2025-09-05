import Layout from "@theme/Layout";
import React from "react";
import { APIsConfig as pageConfig } from "../page-content/apis.config";
import TextWithCard from "../components/blocks/text-with-card";
import TextWithPaddedImage from "../components/blocks/text-with-padded-image";

export default function APIs() {
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
