import React from "react";
import Layout from "@theme/Layout";
import TextWithImage from "../components/blocks/text-with-image";
import { GovernanceConfig as pageConfig } from "../page-content/governance.config";
import {
  DecisionIllustration,
  WorkingGroupsIllustration,
} from "../components/illustrations/governance-illustrations";
import styles from "./governance.module.scss";

export default function Governance() {
  return (
    <Layout>
      <TextWithImage config={pageConfig.sectionOne} />
      <TextWithImage config={pageConfig.sectionTwo} />

      <section className={`page-section bg-white ${styles.rolesSection}`}>
        <div className="page-section__inner">
          <div className="section-kicker">Who stewards the project</div>
          <h2 className="section-heading">Roles in detail</h2>
          <div className={styles.roleCards}>
            {pageConfig.roleCards.map((role) => (
              <article key={role.title} className={styles.roleCard}>
                <div className={styles.roleCardBadge}>{role.badge}</div>
                <h3>{role.title}</h3>
                <p>{role.summary}</p>
                {role.points && (
                  <ul>
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                {role.note && <p className={styles.roleNote}>{role.note}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`page-section bg-gray ${styles.lifecycleSection}`}>
        <div className="page-section__inner page-section__inner--narrow">
          <div className="section-kicker">Stewardship</div>
          <h2 className="section-heading">Maintainer lifecycle</h2>
          <p>
            Fluxnova encourages community-driven stewardship. These practices
            keep the Maintainer group active, representative, and aligned with
            project goals.
          </p>
          <ol className={styles.lifecycleList}>
            {pageConfig.lifecycle.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.body}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`page-section bg-white ${styles.decisionSection}`}>
        <div className="page-section__inner page-section__inner--split">
          <div className="page-copy">
            <div className="section-kicker">How decisions happen</div>
            <h2 className="section-heading">Contribution & decision making</h2>
            <p>
              Contributions must abide by the guidelines in{" "}
              <a
                href="https://github.com/finos/fluxnova-bpm-platform/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contribution Documentation
              </a>
              .
            </p>
            <h3>Consensus model</h3>
            <ul>
              <li>Preferred: all relevant Maintainers agree</li>
              <li>Acceptable: majority agrees, no strong objections</li>
              <li>
                If consensus cannot be achieved, Maintainers vote per the voting
                rules below
              </li>
            </ul>
            <h3>Maintainer voting</h3>
            <ul>
              <li>36 hours to vote: +1 (Agree), −1 (Disagree), +0 (Abstain)</li>
              <li>Majority of votes cast determines the outcome</li>
              <li>Ties broken by the Lead Maintainer</li>
              <li>Votes are public via GitHub, mailing list, or minuted meetings</li>
            </ul>
          </div>
          <div className="page-visual page-visual--media">
            <DecisionIllustration />
          </div>
        </div>
      </section>

      <section className={`page-section bg-gray ${styles.wgSection}`}>
        <div className="page-section__inner page-section__inner--split">
          <div className="page-visual page-visual--media">
            <WorkingGroupsIllustration />
          </div>
          <div className="page-copy">
            <div className="section-kicker">Collaboration forums</div>
            <h2 className="section-heading">Working group structure</h2>
            <p>
              Fluxnova operates two standing Working Groups to streamline
              technical collaboration and strategic oversight. Additional groups
              may form for specific topics.
            </p>
            <div className={styles.wgCards}>
              <article>
                <h3>Maintainers Working Group</h3>
                <p className={styles.wgMeta}>Technical forum · 60 minutes</p>
                <ul>
                  <li>Review and merge open pull requests</li>
                  <li>Discuss architecture and design proposals</li>
                  <li>
                    Ensure compliance with FINOS governance and open-source best
                    practices
                  </li>
                </ul>
              </article>
              <article>
                <h3>General Working Group</h3>
                <p className={styles.wgMeta}>Programme forum · 30 minutes</p>
                <ul>
                  <li>Oversee roadmap milestones and delivery targets</li>
                  <li>
                    Review and approve major technical changes that require wider
                    agreement
                  </li>
                  <li>
                    Ensure ongoing alignment with FINOS governance and
                    open-source best practices
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className={`page-section bg-white ${styles.principlesSection}`}>
        <div className="page-section__inner">
          <div className="section-kicker">Participation</div>
          <h2 className="section-heading">Community principles</h2>
          <p className={styles.principlesLead}>
            Fluxnova follows consensus-based decision-making. Guiding principles
            for participation:
          </p>
          <div className={styles.principleGrid}>
            {pageConfig.principles.map((item) => (
              <article key={item.title} className={styles.principleCard}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <p className={styles.amendNote}>
            This document may be amended by consensus of the Maintainers — see
            Decision Making Process.
          </p>
        </div>
      </section>
    </Layout>
  );
}
