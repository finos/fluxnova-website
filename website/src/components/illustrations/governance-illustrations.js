import React from "react";
import styles from "./governance-illustrations.module.scss";

/** Open governance under FINOS / Linux Foundation policies */
export function GovernanceHeroIllustration() {
  return (
    <svg
      className={styles.illustration}
      viewBox="0 0 360 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Open governance under FINOS and Linux Foundation policies"
    >
      <defs>
        <linearGradient id="govGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b9eff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#00d4a1" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="govCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2740" />
          <stop offset="100%" stopColor="#0e1626" />
        </linearGradient>
      </defs>
      <circle cx="180" cy="150" r="120" fill="url(#govGlow)" opacity="0.5" />
      {/* Central shield */}
      <path
        d="M180 48 L248 78 V148 C248 196 218 236 180 252 C142 236 112 196 112 148 V78 Z"
        fill="url(#govCard)"
        stroke="#5ec8ff"
        strokeWidth="2"
      />
      <path
        d="M180 72 L226 94 V146 C226 180 206 210 180 222 C154 210 134 180 134 146 V94 Z"
        fill="rgba(59,158,255,0.12)"
        stroke="#3b9eff"
        strokeWidth="1.5"
      />
      <path
        d="M162 148 L174 160 L202 128"
        stroke="#00d4a1"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Policy docs around shield */}
      <g transform="translate(42 88)">
        <rect
          width="56"
          height="72"
          rx="8"
          fill="url(#govCard)"
          stroke="#5ec8ff"
          strokeWidth="1.5"
        />
        <rect x="10" y="16" width="36" height="3" rx="1.5" fill="#5ec8ff" />
        <rect
          x="10"
          y="26"
          width="28"
          height="3"
          rx="1.5"
          fill="#5ec8ff"
          opacity="0.5"
        />
        <rect
          x="10"
          y="36"
          width="32"
          height="3"
          rx="1.5"
          fill="#5ec8ff"
          opacity="0.5"
        />
        <text
          x="28"
          y="60"
          textAnchor="middle"
          fill="#9aa8c0"
          fontSize="8"
          fontFamily="Sora, sans-serif"
        >
          Policies
        </text>
      </g>
      <g transform="translate(262 88)">
        <rect
          width="56"
          height="72"
          rx="8"
          fill="url(#govCard)"
          stroke="#00d4a1"
          strokeWidth="1.5"
        />
        <circle cx="28" cy="28" r="12" stroke="#00d4a1" strokeWidth="1.5" />
        <path
          d="M28 20 V28 H34"
          stroke="#00d4a1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <text
          x="28"
          y="60"
          textAnchor="middle"
          fill="#9aa8c0"
          fontSize="8"
          fontFamily="Sora, sans-serif"
        >
          Public
        </text>
      </g>
      <text
        x="180"
        y="278"
        textAnchor="middle"
        fill="#5ec8ff"
        fontSize="11"
        fontFamily="Sora, sans-serif"
        fontWeight="600"
        letterSpacing="0.08em"
      >
        FINOS · LINUX FOUNDATION
      </text>
    </svg>
  );
}

/** Contributor → Maintainer → Lead ladder */
export function RolesIllustration() {
  return (
    <svg
      className={styles.illustration}
      viewBox="0 0 360 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Governance roles from contributor to lead maintainer"
    >
      <defs>
        <linearGradient id="roleCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2740" />
          <stop offset="100%" stopColor="#0e1626" />
        </linearGradient>
      </defs>
      {/* Connecting line */}
      <path
        d="M180 58 V242"
        stroke="rgba(94,200,255,0.35)"
        strokeWidth="2"
        strokeDasharray="4 6"
      />
      {/* Lead */}
      <g transform="translate(90 36)">
        <rect
          width="180"
          height="52"
          rx="12"
          fill="url(#roleCard)"
          stroke="#00d4a1"
          strokeWidth="2"
        />
        <circle cx="28" cy="26" r="12" fill="rgba(0,212,161,0.2)" stroke="#00d4a1" />
        <circle cx="28" cy="22" r="4" fill="#00d4a1" />
        <path
          d="M20 34 C20 28 36 28 36 34"
          stroke="#00d4a1"
          strokeWidth="1.5"
          fill="none"
        />
        <text
          x="52"
          y="24"
          fill="#e8eef8"
          fontSize="13"
          fontFamily="Sora, sans-serif"
          fontWeight="600"
        >
          Lead Maintainer
        </text>
        <text x="52" y="40" fill="#9aa8c0" fontSize="9" fontFamily="Figtree, sans-serif">
          FINOS liaison · tie-break
        </text>
      </g>
      {/* Maintainers */}
      <g transform="translate(70 118)">
        <rect
          width="220"
          height="52"
          rx="12"
          fill="url(#roleCard)"
          stroke="#5ec8ff"
          strokeWidth="2"
        />
        <circle cx="28" cy="26" r="12" fill="rgba(94,200,255,0.15)" stroke="#5ec8ff" />
        <circle cx="24" cy="22" r="3.5" fill="#5ec8ff" />
        <circle cx="32" cy="22" r="3.5" fill="#5ec8ff" />
        <path
          d="M18 34 C18 28 38 28 38 34"
          stroke="#5ec8ff"
          strokeWidth="1.5"
          fill="none"
        />
        <text
          x="52"
          y="24"
          fill="#e8eef8"
          fontSize="13"
          fontFamily="Sora, sans-serif"
          fontWeight="600"
        >
          Maintainers
        </text>
        <text x="52" y="40" fill="#9aa8c0" fontSize="9" fontFamily="Figtree, sans-serif">
          Review · merge · steward
        </text>
      </g>
      {/* Contributors */}
      <g transform="translate(50 200)">
        <rect
          width="260"
          height="52"
          rx="12"
          fill="url(#roleCard)"
          stroke="#3b9eff"
          strokeWidth="1.5"
        />
        <circle cx="22" cy="26" r="8" fill="rgba(59,158,255,0.15)" stroke="#3b9eff" />
        <circle cx="40" cy="26" r="8" fill="rgba(59,158,255,0.15)" stroke="#3b9eff" />
        <circle cx="58" cy="26" r="8" fill="rgba(59,158,255,0.15)" stroke="#3b9eff" />
        <text
          x="78"
          y="24"
          fill="#e8eef8"
          fontSize="13"
          fontFamily="Sora, sans-serif"
          fontWeight="600"
        >
          Contributors
        </text>
        <text x="78" y="40" fill="#9aa8c0" fontSize="9" fontFamily="Figtree, sans-serif">
          Code · docs · issues · design
        </text>
      </g>
    </svg>
  );
}

/** Consensus → vote decision flow */
export function DecisionIllustration() {
  return (
    <div className={styles.decisionWrap}>
      <p className={styles.decisionCallout}>
        Always public · GitHub &amp; minutes
      </p>
      <svg
        className={styles.illustration}
        viewBox="0 0 360 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Consensus-based decision making flow"
      >
        <defs>
          <linearGradient id="decCard" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a2740" />
            <stop offset="100%" stopColor="#0e1626" />
          </linearGradient>
        </defs>
        <rect
          x="16"
          y="36"
          width="96"
          height="72"
          rx="12"
          fill="url(#decCard)"
          stroke="#5ec8ff"
        />
        <text
          x="64"
          y="68"
          textAnchor="middle"
          fill="#e8eef8"
          fontSize="12"
          fontFamily="Sora, sans-serif"
          fontWeight="600"
        >
          Proposal
        </text>
        <text
          x="64"
          y="86"
          textAnchor="middle"
          fill="#9aa8c0"
          fontSize="10"
          fontFamily="Figtree, sans-serif"
        >
          Open early
        </text>
        <path d="M120 72 H142" stroke="#5ec8ff" strokeWidth="2" />
        <rect
          x="146"
          y="36"
          width="96"
          height="72"
          rx="12"
          fill="url(#decCard)"
          stroke="#00d4a1"
        />
        <text
          x="194"
          y="68"
          textAnchor="middle"
          fill="#e8eef8"
          fontSize="12"
          fontFamily="Sora, sans-serif"
          fontWeight="600"
        >
          Consensus
        </text>
        <text
          x="194"
          y="86"
          textAnchor="middle"
          fill="#9aa8c0"
          fontSize="10"
          fontFamily="Figtree, sans-serif"
        >
          Preferred
        </text>
        <path d="M250 72 H272" stroke="#5ec8ff" strokeWidth="2" />
        <rect
          x="276"
          y="36"
          width="68"
          height="72"
          rx="12"
          fill="url(#decCard)"
          stroke="#3b9eff"
        />
        <text
          x="310"
          y="68"
          textAnchor="middle"
          fill="#e8eef8"
          fontSize="12"
          fontFamily="Sora, sans-serif"
          fontWeight="600"
        >
          Vote
        </text>
        <text
          x="310"
          y="86"
          textAnchor="middle"
          fill="#9aa8c0"
          fontSize="10"
          fontFamily="Figtree, sans-serif"
        >
          +1 / −1
        </text>
      </svg>
      <p className={styles.decisionFootnote}>
        36-hour maintainer voting window when needed
      </p>
    </div>
  );
}

/** Two standing working groups */
export function WorkingGroupsIllustration() {
  return (
    <svg
      className={styles.illustration}
      viewBox="0 0 360 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Maintainers and General working groups"
    >
      <defs>
        <linearGradient id="wgCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2740" />
          <stop offset="100%" stopColor="#0e1626" />
        </linearGradient>
      </defs>
      <rect x="24" y="40" width="140" height="130" rx="16" fill="url(#wgCard)" stroke="#5ec8ff" strokeWidth="2" />
      <circle cx="94" cy="78" r="18" fill="rgba(94,200,255,0.15)" stroke="#5ec8ff" />
      <path d="M86 78 H102 M94 70 V86" stroke="#5ec8ff" strokeWidth="2" strokeLinecap="round" />
      <text x="94" y="118" textAnchor="middle" fill="#e8eef8" fontSize="12" fontFamily="Sora, sans-serif" fontWeight="600">
        Maintainers WG
      </text>
      <text x="94" y="136" textAnchor="middle" fill="#9aa8c0" fontSize="9" fontFamily="Figtree, sans-serif">
        Technical · 60 min
      </text>
      <text x="94" y="152" textAnchor="middle" fill="#6b7a94" fontSize="8" fontFamily="Figtree, sans-serif">
        PRs · architecture · CI
      </text>

      {/* Arrow escalate */}
      <path d="M172 105 H188" stroke="#00d4a1" strokeWidth="2" />
      <polygon points="188,100 198,105 188,110" fill="#00d4a1" />

      <rect x="196" y="40" width="140" height="130" rx="16" fill="url(#wgCard)" stroke="#00d4a1" strokeWidth="2" />
      <circle cx="266" cy="78" r="18" fill="rgba(0,212,161,0.15)" stroke="#00d4a1" />
      <rect x="256" y="70" width="20" height="16" rx="3" stroke="#00d4a1" strokeWidth="1.5" fill="none" />
      <path d="M260 70 V66 H272 V70" stroke="#00d4a1" strokeWidth="1.5" />
      <text x="266" y="118" textAnchor="middle" fill="#e8eef8" fontSize="12" fontFamily="Sora, sans-serif" fontWeight="600">
        General WG
      </text>
      <text x="266" y="136" textAnchor="middle" fill="#9aa8c0" fontSize="9" fontFamily="Figtree, sans-serif">
        Programme · 30 min
      </text>
      <text x="266" y="152" textAnchor="middle" fill="#6b7a94" fontSize="8" fontFamily="Figtree, sans-serif">
        Roadmap · delivery
      </text>
    </svg>
  );
}

