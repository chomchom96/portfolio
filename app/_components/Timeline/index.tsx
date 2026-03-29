"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  type: "work" | "education" | "certificate";
}

const TIMELINE: TimelineItem[] = [
  {
    date: "2025.12 – 현재",
    title: "AlgorithmLabs",
    subtitle: "프론트엔드 개발자 · AI Canvas 노드 개발, 편의성 기능 및 배포 전용 대시보드",
    type: "work",
  },
  {
    date: "2025.03",
    title: "SQLD",
    subtitle: "SQL 개발자 자격증 취득",
    type: "certificate",
  },
  {
    date: "2023.08",
    title: "아주대학교 수학과 졸업",
    subtitle: "이학사",
    type: "education",
  },
  {
    date: "2023.06",
    title: "정보처리기사",
    subtitle: "국가기술자격 취득",
    type: "certificate",
  },
  {
    date: "2022.10",
    title: "ADsP",
    subtitle: "데이터분석 준전문가 자격증 취득",
    type: "certificate",
  },
];

const TYPE_COLORS: Record<TimelineItem["type"], string> = {
  work: "rgba(99,102,241,0.85)",
  education: "rgba(59,130,246,0.85)",
  certificate: "rgba(139,92,246,0.85)",
};

const TYPE_LABELS: Record<TimelineItem["type"], string> = {
  work: "경력",
  education: "학력",
  certificate: "자격증",
};

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      style={{
        display: "flex",
        gap: "1.5rem",
        position: "relative",
      }}
    >
      {/* Line + dot */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
          width: "1.25rem",
        }}
      >
        <div
          style={{
            width: "0.75rem",
            height: "0.75rem",
            borderRadius: "50%",
            background: TYPE_COLORS[item.type],
            border: "2px solid var(--color-bg)",
            boxShadow: `0 0 0 2px ${TYPE_COLORS[item.type]}`,
            flexShrink: 0,
            marginTop: "0.35rem",
          }}
        />
        {index < TIMELINE.length - 1 && (
          <div
            style={{
              width: "1px",
              flex: 1,
              background: "var(--color-border-mid)",
              marginTop: "0.5rem",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div style={{ paddingBottom: "2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.35rem" }}>
          <span
            style={{
              fontSize: "0.62rem",
              fontWeight: 600,
              padding: "0.15rem 0.5rem",
              borderRadius: "9999px",
              background: TYPE_COLORS[item.type],
              color: "#fff",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.03em",
            }}
          >
            {TYPE_LABELS[item.type]}
          </span>
          <span
            style={{
              fontSize: "0.72rem",
              color: "var(--color-text-muted)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {item.date}
          </span>
        </div>
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.01em",
            marginBottom: "0.2rem",
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            fontSize: "0.84rem",
            color: "var(--color-text-secondary)",
            lineHeight: 1.6,
          }}
        >
          {item.subtitle}
        </p>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section
      id="timeline"
      style={{
        width: "100%",
        borderTop: "1px solid var(--color-border-mid)",
      }}
    >
      <div className="section-container">
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
          Timeline
        </p>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: "3rem",
          }}
        >
          Experience & Education
        </h2>

        <div style={{ maxWidth: "36rem" }}>
          {TIMELINE.map((item, i) => (
            <TimelineCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
