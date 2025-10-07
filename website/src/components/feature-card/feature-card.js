import styles from "./styles.module.scss";

export default function FeatureCard({ config }) {
  return (
    <div
      className={`vertical-flex bg-white color-primary ${styles.featureCard}`}
    >
      <div>{config.image.content}</div>
      {config.image.title && <h3>{config.image.title}</h3>}
      {config.image?.subTitle && <div>{config.image.subTitle}</div>}
    </div>
  );
}
