import React from "react";
import clsx from "clsx";

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx("footer", {
        "footer--dark": style === "dark",
      })}
    >
      <div className="container-fluid">
        <div className="footer-top">
          <img
            className="footer-fluxnova-icon"
            src="/img/fluxnova/fluxnova-icon.png"
            alt="Fluxnova icon"
          />
          <div className="footer-resources">{links}</div>
        </div>
        <div className="footer__bottom">
          <img
            className="footer-finos-logo"
            src="/img/finos/finos-white.png"
            alt="Fluxnova icon"
          />
          <div className="footer-links footer__bottom text--center">
            <a href="https://www.finos.org/privacy-policy">Privacy</a>|
            <a href="https://www.finos.org/terms-of-service">
              Terms of Service
            </a>
            |
            <a href="https://www.finos.org/code-of-conduct">
              Community Code of Conduct
            </a>
            |
            <a
              className="footer__bottom"
              href="https://www.finos.org/hs/manage-preferences/unsubscribe-simple?hsLang=en-us"
            >
              Email Preferences
            </a>
            <div className="release-info">
              Released under the Apache 2.0 License
            </div>
          </div>
          <div className="contact-info">
            <div>
              <b>Contact Us</b>
            </div>
            <div>
              <b>info@finos.org</b>
            </div>
            <div>+1 (650) 665-9773</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
