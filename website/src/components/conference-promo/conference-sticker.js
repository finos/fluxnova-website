import React from "react";
import styles from "./styles.module.scss";

const CONFERENCE_URL =
  "https://www.finos.org/fluxnova-con-at-osff-ny-2026";

export default function ConferenceSticker() {
  return (
    <a
      className={styles.sticker}
      href={CONFERENCE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fluxnova Con New York, November 4 2026 — register now"
    >
      <span className={styles.stickerEyebrow}>First ever</span>
      <span className={styles.stickerTitle}>Fluxnova Con</span>
      <span className={styles.stickerMeta}>New York · Nov 4, 2026</span>
      <span className={styles.stickerCta}>Register →</span>
    </a>
  );
}
