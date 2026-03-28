"use client";

import { useCountUp } from "./useCountUp";
import type { StatCard as StatCardType } from "@/app/_lib/types";

export default function StatCard({ value, suffix, label }: StatCardType) {
  const { count, ref } = useCountUp(value);

  return (
    <div
      ref={ref}
      className="glass-card"
      style={{
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
        flex: 1,
        minWidth: "8rem",
      }}
    >
      <span
        style={{
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          background: "linear-gradient(135deg, var(--color-accent-from), var(--color-accent-to))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)" }}>{count}</span>
        {suffix && <span style={{ fontFamily: "var(--font-sans)" }}>{suffix}</span>}
      </span>
      <span
        style={{
          fontSize: "0.8rem",
          color: "var(--color-text-muted)",
          fontWeight: 400,
          lineHeight: 1.4,
        }}
      >
        {label}
      </span>
    </div>
  );
}
