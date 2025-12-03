import React from "react";

import Layout from "@theme/Layout";
import { MonitoringConfig as pageConfig } from "../page-content/monitoring.config";
import TextWithCard from "../components/blocks/text-with-card";
import TextWithPaddedImage from "../components/blocks/text-with-padded-image";
import TextWithOffsetImage from "../components/blocks/text-with-offset-image";

export default function Monitoring() {
  return (
    <Layout>
      <header>
        <TextWithCard config={pageConfig.hero} />
      </header>
      <main>
        <TextWithPaddedImage config={pageConfig.sectionOne} />
        <TextWithPaddedImage config={pageConfig.sectionTwo} />
        <TextWithOffsetImage config={pageConfig.sectionThree} />
      </main>
    </Layout>
  );
}
