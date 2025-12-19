import React, { useState } from "react";
import { Highlight } from "prism-react-renderer";
import CopyIcon from "/img/icons/copy.svg";
import CheckMarkIcon from "/img/icons/checkmark.svg";
import styles from "./styles.module.scss";

export default function CodeBlock({ header, code }) {
  const [copied, setCopied] = useState(false);
  const customStyles = {
    borderTopRightRadius: header ? 0 : ".4rem",
    borderTopLeftRadius: header ? 0 : ".4rem",
    position: "relative",
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className={styles.codeBlockContainer}>
      {header && <div className={styles.header}>{header}</div>}
      {header && <hr />}

      <Highlight language="javascript" code={code}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={{ ...style, ...customStyles }}>
            <button className={styles.copyBtn} onClick={handleCopy}>
              {copied ? (
                <CheckMarkIcon fill="green" height={16} width={16} />
              ) : (
                <CopyIcon fill="white" height={16} width={16} />
              )}
            </button>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
