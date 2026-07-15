import React from "react";
import SectionShell from "@/components/ui/SectionShell";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import CheckBullet from "@/components/ui/CheckBullet";

type PillarData = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
};

export default function Pillar({
  data,
  mock,
  mockSide,
  bg,
}: {
  data: PillarData;
  mock: React.ReactNode;
  mockSide: "left" | "right";
  bg: "bg" | "bg-alt";
}) {
  // Text is always first in DOM for accessible reading order.
  // When mockSide="left", we use CSS order to visually move mock to the left.
  const isLeft = mockSide === "left";

  return (
    <SectionShell bg={bg} topBorder className="py-[94px]" label={data.eyebrow}>
      <div
        className={[
          "grid gap-[60px] items-center max-[900px]:grid-cols-1 max-[900px]:gap-10",
          isLeft
            ? "[grid-template-columns:1.06fr_1fr]"
            : "[grid-template-columns:1fr_1.06fr]",
        ].join(" ")}
      >
        {/* Text column — always first in DOM; pushed to visual right when mockSide="left" */}
        <div className={`max-[900px]:order-none ${isLeft ? "order-2" : "order-1"}`}>
          <div className="mb-4">
            <EyebrowLabel color="brand">{data.eyebrow}</EyebrowLabel>
          </div>
          <h2
            className="font-display font-semibold text-[36px] max-[900px]:text-[28px] leading-[1.12] tracking-[-0.02em] text-text-bright mb-4"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            {data.title}
          </h2>
          <p className="text-[16.5px] leading-[1.62] text-text-body mb-[26px] max-w-[460px]">
            {data.body}
          </p>
          <div>
            {data.bullets.map((b, i) => (
              <CheckBullet key={i} color="brand">
                {b}
              </CheckBullet>
            ))}
          </div>
        </div>

        {/* Mock column — visually positioned on mockSide via CSS order (glow rendered internally by mock) */}
        <div
          className={`relative max-[900px]:order-none ${isLeft ? "order-1" : "order-2"}`}
        >
          {mock}
        </div>
      </div>
    </SectionShell>
  );
}
