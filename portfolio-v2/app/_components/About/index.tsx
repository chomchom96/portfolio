"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import StatCard from "./StatCard";
import { LINKS, STAT_CARDS } from "@/app/_lib/constants";

const INTRO_PARAGRAPHS = [
  "수학 문제를 좋아해서 수학과에 갔고,\n알고리즘 풀기가 재밌어서 개발을 시작했습니다.",
  "현재 AI Canvas의 관리자 대시보드를 개발합니다.\nRedux 상태 설계와 컴포넌트 최적화가 주된 작업입니다.",
  "Cursor, Claude 등 AI 툴을 적극 활용합니다.\n도구를 잘 쓰는 것도 실력이라고 생각합니다.",
];

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      style={{
        width: "100%",
        borderTop: "1px solid var(--color-border-mid)",
        background: "linear-gradient(180deg, rgba(99,102,241,0.04) 0%, transparent 40%)",
      }}
    >
      <div className="section-container">
        {/* Label */}
        <FadeUp>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--color-accent-from)",
              marginBottom: "3rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            About
          </p>
        </FadeUp>

        {/* Main grid: profile | text */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(2rem, 6vw, 5rem)",
            alignItems: "start",
          }}
        >
          {/* Profile card */}
          <FadeUp delay={0.05}>
            <div
              className="glass-card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "7rem",
                  height: "7rem",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  border: "1px solid var(--color-border-mid)",
                  background: "var(--color-bg-elevated)",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/profile.jpg"
                  alt="조용운 프로필"
                  width={112}
                  height={112}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  quality={90}
                />
              </div>

              <div>
                <p style={{ fontWeight: 600, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
                  조용운
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-accent-from)",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginTop: "0.25rem",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  Frontend Developer
                </p>
              </div>

              <div
                style={{
                  width: "100%",
                  borderTop: "1px solid var(--color-border)",
                  paddingTop: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {[
                  { label: "Email", href: `mailto:${LINKS.email}`, text: LINKS.email },
                  { label: "GitHub", href: LINKS.github, text: "chomchom96" },
                  { label: "Velog", href: LINKS.velog, text: "@error_io" },
                ].map(({ label, href, text }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.78rem",
                      padding: "0.4rem 0",
                      color: "var(--color-text-muted)",
                      transition: "color 200ms",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text-primary)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
                  >
                    <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}>
                      {label}
                    </span>
                    <span style={{ fontWeight: 500 }}>{text}</span>
                  </a>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Intro text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {INTRO_PARAGRAPHS.map((para, i) => (
              <FadeUp key={i} delay={0.1 + i * 0.08}>
                <p
                  style={{
                    fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
                    color: i === 0 ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                    fontWeight: i === 0 ? 500 : 400,
                    lineHeight: 1.85,
                    whiteSpace: "pre-line",
                  }}
                >
                  {para}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Stat cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginTop: "clamp(2.5rem, 6vw, 4rem)",
          }}
        >
          {STAT_CARDS.map((card) => (
            <StatCard key={card.label} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
