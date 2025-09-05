import styles from "./styles.module.css";

export default function FeatureCard({ config }) {
  return (
    <div
      className={`vertical-flex bg-white color-primary ${styles.featureCard}`}
    >
      <div>{config.image.content}</div>
      {config.image.title && <div>{config.image.title}</div>}
      {config.image?.subTitle && <div>{config.image.subTitle}</div>}
    </div>
  );
}
