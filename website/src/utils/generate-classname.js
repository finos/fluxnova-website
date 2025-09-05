const defaultBlockClassName = "block standard-padding horizontal-flex";

export default function generateClassName(className) {
  return `${defaultBlockClassName} ${className ? className : ""}`.trim();
}
