export default function getOrderedElements(imageSide, elements) {
  return imageSide === "right" ? elements : [...elements].reverse();
}
