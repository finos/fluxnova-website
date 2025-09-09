import React from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import styles from "./styles.module.scss";
import ChevronRight from "/img/icons/right-thin-chevron.svg";

export default function NavbarDropdownItem({
  label,
  dropdownItems,
  isLastItem,
  mobile,
  nameItemExpanded,
  setNameItemExpanded,
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
      {mobile && (
        <div
          className={styles.navbarItem}
          onClick={() =>
            nameItemExpanded === label
              ? setNameItemExpanded("")
              : setNameItemExpanded(label)
          }
        >
          <div className={styles.mobile}>
            <div className={styles.item}>
              {label}
              <ChevronRight
                height={20}
                style={{
                  transition: "transform .3s",
                  transform:
                    label === nameItemExpanded ? "rotate(90deg)" : undefined,
                }}
              />
            </div>
            <div
              className={classnames(
                styles.links,
                label === nameItemExpanded ? styles.expanded : null,
              )}
            >
              <div className={styles.linksContainer}>
                {dropdownItems.map((item, idx) => (
                  <div key={idx}>
                    <Link to={item.to}>{item.label}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {!mobile && (
        <div
          className={classnames(styles.navbarItem, styles.fullSize)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="navbar-item">{label}</div>
          <div className={styles.artificialPadding}></div>
          {!isHovered && (
            <div className={classnames(styles.topBar, styles.white)}></div>
          )}
          {isHovered && (
            <div
              className={classnames(
                styles.dropdown,
                isLastItem ? styles.lastItem : null,
              )}
            >
              <div className={styles.topBar}></div>
              <div className={styles.window}>
                {dropdownItems.map((item, idx) => (
                  <div key={idx}>
                    <Link to={item.to}>{item.label}</Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
