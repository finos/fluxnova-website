import React from "react";

export default function generateElements(elements) {
  return elements.map((element, idx) =>
    React.cloneElement(element, { key: idx }),
  );
}
