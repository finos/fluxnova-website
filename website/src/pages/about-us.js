import Layout from "@theme/Layout";
import TextWithImage from "../components/blocks/text-with-image";
import { AboutUsConfig as pageConfig } from "../page-content/about-us.config";

export default function AboutUs() {
  return (
    <Layout>
      <TextWithImage config={pageConfig.sectionOne} />
      <TextWithImage config={pageConfig.sectionTwo} />
      <TextWithImage config={pageConfig.sectionThree} />
      <TextWithImage config={pageConfig.sectionFour} />
    </Layout>
  );
}
