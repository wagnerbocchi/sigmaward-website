"use client";

import { useId } from "react";

export default function Logo({ size = 30, mono = false }: { size?: number; mono?: boolean }) {
  const gradId = `sw-grad-${useId().replace(/:/g, "")}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      role="img"
      aria-label="Sigmaward"
    >
      {!mono && (
        <defs>
          <linearGradient
            id={gradId}
            x1="24"
            y1="16"
            x2="78"
            y2="84"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#34F0DA" />
            <stop offset="1" stopColor="#8C7BFF" />
          </linearGradient>
        </defs>
      )}
      <polyline
        points="75,24 27,24 53,50 27,76 75,76"
        fill="none"
        stroke={mono ? "currentColor" : `url(#${gradId})`}
        strokeWidth="12.5"
        strokeLinejoin="miter"
        strokeLinecap="square"
      />
    </svg>
  );
}
