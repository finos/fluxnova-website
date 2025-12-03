import Layout from "@theme/Layout";
import TextWithImage from "../components/blocks/text-with-image";
import { ContactUsConfig as pageConfig } from "../page-content/contact-us.config";

export default function ContactUs() {
  return (
    <Layout>
      <TextWithImage config={pageConfig.sectionOne} />
    </Layout>
  );
}
