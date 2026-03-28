"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SKILL_CATEGORIES } from "@/app/_lib/constants";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function SkillCard({
  title,
  icon,
  items,
  delay,
}: {
  title: string;
  icon: string;
  items: string[];
  delay: number;
}) {
  return (
    <FadeUp delay={delay}>
      <div
        className="glass-card"
        style={{
          padding: "1.75rem",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span
            style={{
              fontSize: "1.25rem",
              width: "2.25rem",
              height: "2.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(99,102,241,0.12)",
              border: "1px solid rgba(99,102,241,0.25)",
              borderRadius: "0.5rem",
            }}
          >
            {icon}
          </span>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h3>
        </div>

        {/* Items */}
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {items.map((item) => (
            <li
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                fontSize: "0.875rem",
                color: "var(--color-text-secondary)",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                style={{ flexShrink: 0 }}
              >
                <circle cx="7" cy="7" r="7" fill="rgba(99,102,241,0.15)" />
                <path
                  d="M4 7l2 2 4-4"
                  stroke="#6366f1"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </FadeUp>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        width: "100%",
        borderTop: "1px solid var(--color-border-mid)",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <FadeUp>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--color-accent-from)",
              marginBottom: "0.75rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            Skills
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              marginBottom: "0.75rem",
            }}
          >
            Skills
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--color-text-muted)",
              marginBottom: "3rem",
              maxWidth: "36rem",
            }}
          >
            프론트엔드 개발에 필요한 기술 스택과 실무에서 사용한 도구들입니다.
          </p>
        </FadeUp>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1rem",
          }}
        >
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCard
              key={cat.id}
              title={cat.title}
              icon={cat.icon}
              items={cat.items}
              delay={i * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
