import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { HomeConfig as pageConfig } from "../page-content/home.config";
import TextBlock from "../components/blocks/text-block";

function Home() {
  const context = useDocusaurusContext();
  return (
    <Layout>
      <header className="hero-banner">
        <TextBlock config={pageConfig.heroSection} />
      </header>
      <main>
        <TextBlock config={pageConfig.featuresSection} />
        <TextBlock config={pageConfig.mainContent} />
      </main>
    </Layout>
  );
}

export default Home;
