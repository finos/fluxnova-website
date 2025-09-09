import Layout from "@theme/Layout";
import React from "react";
import { IntroConfig as pageConfig } from "../page-content/intro.config";
import TextWithImage from "../components/blocks/text-with-image";
import TextBlock from "../components/blocks/text-block";

export default function Intro() {
  return (
    <Layout>
      <TextWithImage config={pageConfig.hero} />
      <TextWithImage config={pageConfig.sectionOne} />
      <TextBlock config={pageConfig.sectionTwo} />
      <TextBlock config={pageConfig.sectionThree} />
      <TextBlock config={pageConfig.sectionFour} />
      <div className="block bg-white">
        <h2 className="standard-padding">Fluxnova Capabilities</h2>
        <div className="feature-wrapper">
          {pageConfig.sectionFive.elements.map((feature, index) => (
            <div className="feature-blip" key={index}>
              <div className="feature-icon">
                <img src={`/img/icons/${feature.iconName}.png`} />
              </div>
              <div>
                <div className="feature-header">{feature.header}</div>
                <ul>
                  <li>{feature.subHeader}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
