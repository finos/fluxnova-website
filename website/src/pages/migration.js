import Layout from "@theme/Layout";
import TextWithImage from "../components/blocks/text-with-image";
import TextBlock from "../components/blocks/text-block";
import { MigrationConfig as pageConfig } from "../page-content/migration.config";

export default function Migration() {
  return (
    <Layout>
      <TextWithImage config={pageConfig.sectionOne} />
      <TextWithImage config={pageConfig.sectionTwo} />
      <TextBlock config={pageConfig.sectionThree} />
      <TextBlock config={pageConfig.sectionFour} />
    </Layout>
  );
}
