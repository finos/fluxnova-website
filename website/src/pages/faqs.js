import Layout from "@theme/Layout";
import TextWithImage from "../components/blocks/text-with-image";
import TextBlock from "../components/blocks/text-block";
import { faqsConfig as pageConfig } from "../page-content/faqs.config";

export default function FAQs() {
  return (
    <Layout>
      <TextWithImage config={pageConfig.sectionOne} />
      <TextBlock config={pageConfig.sectionThree} />
      <TextBlock config={pageConfig.sectionFour} />
    </Layout>
  );
}
