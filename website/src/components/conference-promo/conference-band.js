import React from "react";
import styles from "./styles.module.scss";

const CONFERENCE_URL =
  "https://www.finos.org/fluxnova-con-at-osff-ny-2026";

export default function ConferenceBand() {
  return (
    <section className={styles.band} aria-labelledby="fluxnova-con-heading">
      <div className={styles.bandInner}>
        <div className={styles.bandCopy}>
          <p className={styles.bandEyebrow}>Upcoming event</p>
          <h2 id="fluxnova-con-heading" className={styles.bandTitle}>
            The first Fluxnova Conference — New York
          </h2>
          <p className={styles.bandText}>
            Join us November 4, 2026 at Convene Brookfield Place for Fluxnova Con
            at OSFF NY: architecture, enterprise case studies, and agentic AI
            orchestration for regulated industries.
          </p>
        </div>
        <a
          className={styles.bandButton}
          href={CONFERENCE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Register for Fluxnova Con
        </a>
      </div>
    </section>
  );
}
