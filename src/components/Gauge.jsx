import React, { useEffect, useRef } from "react";

export default function Gauge({ value = 0, unit = "", label = "", color = "#2563eb" }) {
  const fillPathRef = useRef(null);

  useEffect(() => {
    if (!fillPathRef.current) return;
    const pathLength = fillPathRef.current.getTotalLength();
    const percent = Math.min(100, Math.max(0, value));
    const offset = pathLength - (percent / 100) * pathLength;
    fillPathRef.current.style.strokeDasharray = pathLength;
    fillPathRef.current.style.strokeDashoffset = offset;
  }, [value]);

  return (
    <div className="gauge">
      <svg viewBox="0 0 100 60">
        <path
          d="M10 50 A40 40 0 0 1 90 50"
          className="bg-ring"
        />
        <path
          ref={fillPathRef}
          d="M10 50 A40 40 0 0 1 90 50"
          className="fill-ring"
          style={{
            stroke: color,
            transition: "stroke-dashoffset 0.5s ease",
          }}
        />
      </svg>

      <p className="value">{value.toFixed(1)} {unit}</p>
      <p className="label">{label}</p>
    </div>
  );
}
