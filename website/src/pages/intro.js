import React from "react";

import Layout from "@theme/Layout";
import { IntroConfig as pageConfig } from "../page-content/intro.config";
import TextWithImage from "../components/blocks/text-with-image";
import TextBlock from "../components/blocks/text-block";

export default function Intro() {
  const Checkmark = pageConfig.CheckmarkIcon;

  return (
    <Layout>
      <TextWithImage config={pageConfig.hero} />
      <TextWithImage config={pageConfig.sectionOne} />

      <section className="page-section bg-gray">
        <div className="page-section__inner">
          <div className="section-kicker">Key highlights</div>
          <h2 className="section-heading">
            Built for regulated industries that need control without lock-in
          </h2>
          <div className="highlight-grid">
            {pageConfig.highlights.map((item, index) => (
              <div className="highlight-card" key={index}>
                <div className="highlight-card__icon" aria-hidden="true">
                  <Checkmark fill="currentColor" />
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TextBlock config={pageConfig.sectionFour} />

      <section className="page-section bg-white">
        <div className="page-section__inner">
          <div className="section-kicker">Platform capabilities</div>
          <h2 className="section-heading">What you can orchestrate</h2>
          <div className="capability-grid">
            {pageConfig.sectionFive.elements.map((feature, index) => (
              <article className="capability-card" key={index}>
                <img
                  src={`/img/icons/${feature.iconName}.png`}
                  alt=""
                  aria-hidden="true"
                />
                <h3>{feature.header}</h3>
                <p>{feature.subHeader}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
