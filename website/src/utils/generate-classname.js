const defaultBlockClassName = "page-section";

export default function generateClassName(className) {
  return `${defaultBlockClassName} ${className ? className : ""}`.trim();
}
