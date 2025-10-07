import Layout from "@theme/Layout";
import TextWithImage from "../components/blocks/text-with-image";
import TextBlock from "../components/blocks/text-block";
import { contributeConfig as pageConfig } from "../page-content/contribute.config";

export default function contribute() {
  return (
    <Layout>
      <TextWithImage config={pageConfig.sectionOne} />
      <TextBlock config={pageConfig.sectionThree} />
      <TextBlock config={pageConfig.sectionFour} />
    </Layout>
  );
}
