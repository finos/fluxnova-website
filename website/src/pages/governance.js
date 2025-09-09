import Layout from "@theme/Layout";
import TextWithImage from "../components/blocks/text-with-image";
import TextBlock from "../components/blocks/text-block";
import { GovernanceConfig as pageConfig } from "../page-content/governance.config";

export default function Governance() {
  return (
    <Layout>
      <TextWithImage config={pageConfig.sectionOne} />
      <TextWithImage config={pageConfig.sectionTwo} />
      <TextBlock config={pageConfig.sectionThree} />
      <TextBlock config={pageConfig.sectionFour} />
      <TextBlock config={pageConfig.sectionFive} />
      <TextBlock config={pageConfig.sectionSix} />
      <TextBlock config={pageConfig.sectionSeven} />
    </Layout>
  );
}
