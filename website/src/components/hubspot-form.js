import React, { useCallback, useEffect, useRef } from "react";
import { debounce } from "lodash";
import HubspotForm from "react-hubspot-form";

export default function ContactUsForm() {
  const containerRef = useRef(null);
  const resizeObserverRef = useRef(null);

  useEffect(() => {
    // Debounce the resize event to prevent a loop
    let timeout;
    const debouncedResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        // Your logic to handle the resize
        console.log("Container resized!");
      }, 500);
    };

    resizeObserverRef.current = new ResizeObserver(debouncedResize);
    if (containerRef.current) {
      resizeObserverRef.current.observe(containerRef.current);
    }
    return () => {
      clearTimeout(timeout);
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div ref={containerRef} style={{ padding: "2rem 0" }}>
      <HubspotForm
        portalId="2419532"
        formId="ddea5d0e-c8dd-4198-86d4-ffb918017d7b"
        region="na1"
        onSubmit={() => console.log("Form submitted!")}
        onReady={(form) => console.log("Form ready!")}
        loading={<div>Loading...</div>}
      />
    </div>
  );
}
