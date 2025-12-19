import Layout from "@theme/Layout";
import React from "react";
import { modelerConfig as pageConfig } from "../page-content/modeler.config";
import TextWithCard from "../components/blocks/text-with-card";
import TextWithPaddedImage from "../components/blocks/text-with-padded-image";
import AbsoluteCta from "../components/blocks/absolute-cta";

export default function Modeler() {
  return (
    <Layout>
      <header>
        <TextWithCard config={pageConfig.hero} />
      </header>
      <main>
        <TextWithPaddedImage config={pageConfig.sectionOne} />
        <TextWithPaddedImage config={pageConfig.sectionTwo} />
        <AbsoluteCta config={pageConfig.ctaSection} />
      </main>
    </Layout>
  );
}
