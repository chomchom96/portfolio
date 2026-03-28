"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import StatCard from "./StatCard";
import { LINKS, STAT_CARDS } from "@/app/_lib/constants";

const INTRO_PARAGRAPHS = [
  "수학 문제를 좋아해서 수학과에 갔고,\n알고리즘 풀기가 재밌어서 개발을 시작했습니다.",
  "현재 AI Canvas의 관리자 대시보드를 개발합니다.\nRedux 상태 설계와 컴포넌트 최적화가 주된 작업입니다.",
  "Cursor, Claude 등 AI 툴을 적극 활용합니다.\n도구를 잘 쓰는 것도 실력이라고 생각합니다.",
];

const CONTACT_LINKS = [
  {
    label: "Email",
    value: LINKS.email,
    href: `mailto:${LINKS.email}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "chomchom96",
    href: LINKS.github,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Velog",
    value: "@error_io",
    href: LINKS.velog,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3zm6.883 6.25q.945 0 1.125.9l1.463 8.303q.697-.923 1.146-1.553a14 14 0 0 0 1.283-2.273q.608-1.283.608-2.295q0-.607-.338-.967q-.315-.382-1.193-.967q.9-1.148 2.25-1.148q.72 0 1.193.428q.495.427.494 1.26q0 1.395-1.17 3.488q-1.147 2.07-4.431 6.232l-2.227.156l-1.711-9.628h-2.25V7.24q.9-.293 2.115-.63q1.215-.36 1.643-.36" />
      </svg>
    ),
  },
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

function ContactCard({
  href, icon, label, value, delay,
}: {
  href: string; icon: React.ReactNode; label: string; value: string; delay: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setOffset({
          x: (e.clientX - rect.left - rect.width / 2) * 0.22,
          y: (e.clientY - rect.top - rect.height / 2) * 0.22,
        });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      whileHover={{ borderColor: "rgba(99,102,241,0.5)", backgroundColor: "rgba(99,102,241,0.07)" }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.875rem",
        padding: "1rem 1.5rem",
        borderRadius: "0.875rem",
        border: "1px solid var(--color-border-mid)",
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        color: "var(--color-text-secondary)",
        textDecoration: "none",
        flex: 1,
        minWidth: "12rem",
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 200ms ease-out",
        cursor: "pointer",
      }}
    >
      <span style={{ opacity: 0.75, flexShrink: 0 }}>{icon}</span>
      <div>
        <p style={{ fontSize: "0.68rem", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {label}
        </p>
        <p style={{ fontSize: "0.875rem", fontWeight: 500, marginTop: "0.1rem", color: "var(--color-text-primary)" }}>
          {value}
        </p>
      </div>
    </motion.a>
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
          <p style={{
            fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.16em",
            textTransform: "uppercase", color: "var(--color-accent-from)",
            marginBottom: "3rem", fontFamily: "var(--font-mono)",
          }}>
            About
          </p>
        </FadeUp>

        {/* Profile + Intro */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "clamp(2rem, 6vw, 5rem)",
          alignItems: "start",
        }}>
          {/* Profile card */}
          <FadeUp delay={0.05}>
            <div className="glass-card" style={{
              padding: "2rem", display: "flex", flexDirection: "column",
              alignItems: "center", gap: "1rem", textAlign: "center",
            }}>
              <div style={{
                width: "7rem", height: "7rem", borderRadius: "1rem",
                overflow: "hidden", border: "1px solid var(--color-border-mid)",
                background: "var(--color-bg-elevated)", flexShrink: 0,
              }}>
                <Image
                  src="/profile.jpg" alt="조용운 프로필"
                  width={112} height={112}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  quality={90}
                />
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
                  조용운
                </p>
                <p style={{
                  fontSize: "0.75rem", color: "var(--color-accent-from)", fontWeight: 500,
                  letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.25rem",
                  fontFamily: "var(--font-mono)",
                }}>
                  Frontend Developer
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Intro text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {INTRO_PARAGRAPHS.map((para, i) => (
              <FadeUp key={i} delay={0.1 + i * 0.08}>
                <p style={{
                  fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
                  color: i === 0 ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                  fontWeight: i === 0 ? 500 : 400,
                  lineHeight: 1.85, whiteSpace: "pre-line",
                }}>
                  {para}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Stat cards */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "clamp(2.5rem, 6vw, 4rem)" }}>
          {STAT_CARDS.map((card) => (
            <StatCard key={card.label} {...card} />
          ))}
        </div>

        {/* Contact cards */}
        <div style={{ marginTop: "clamp(2.5rem, 6vw, 4rem)" }}>
          <FadeUp>
            <p style={{
              fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.16em",
              textTransform: "uppercase", color: "var(--color-accent-from)",
              marginBottom: "1.25rem", fontFamily: "var(--font-mono)",
            }}>
              Contact
            </p>
          </FadeUp>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
            {CONTACT_LINKS.map((link, i) => (
              <ContactCard key={link.label} delay={0.05 + i * 0.07} {...link} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <p style={{
          marginTop: "4rem", fontSize: "0.72rem",
          color: "var(--color-text-muted)", fontFamily: "var(--font-mono)",
        }}>
          © 2026 조용운. Built with Next.js & Paperlogy.
        </p>
      </div>
    </section>
  );
}
