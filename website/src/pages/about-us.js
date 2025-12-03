import Layout from "@theme/Layout";
import TextWithImage from "../components/blocks/text-with-image";
import { AboutUsConfig as pageConfig } from "../page-content/about-us.config";
import TextBlock from "../components/blocks/text-block";

export default function AboutUs() {
  return (
    <Layout>
      <TextWithImage config={pageConfig.sectionOne} />
      <TextWithImage config={pageConfig.sectionTwo} />
      <TextBlock config={pageConfig.sectionThree} />
    </Layout>
  );
}
