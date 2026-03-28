"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useNodeGraph } from "./useNodeGraph";
import { LINKS } from "@/app/_lib/constants";

const LINES = [
  {
    text: "조용운",
    style: {
      fontSize: "clamp(3.5rem, 10vw, 6rem)",
      fontWeight: 500,
      letterSpacing: "-0.04em",
      color: "var(--color-text-primary)",
    },
  },
  {
    text: "프론트엔드 개발자",
    style: {
      fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      color: "var(--color-text-secondary)",
    },
  },
  {
    text: "복잡한 구조를 정리하는 일을 좋아하는 개발자입니다.",
    style: {
      fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
      fontWeight: 500,
      color: "var(--color-text-muted)",
      maxWidth: "28rem",
    },
  },
];

const REVEAL = {
  initial: { y: "110%" },
  animate: { y: "0%" },
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useNodeGraph(canvasRef);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        height: "100dvh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Vignette — fade canvas edges into bg */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, var(--color-bg) 100%)",
        }}
      />

      {/* Text */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: "0 clamp(1.25rem, 5vw, 5rem)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {LINES.map((line, i) => (
          <div key={i} style={{ overflow: "hidden" }}>
            <motion.p
              style={line.style}
              variants={REVEAL}
              initial="initial"
              animate="animate"
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2 + i * 0.13,
              }}
            >
              {line.text}
            </motion.p>
          </div>
        ))}

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.72 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginTop: "0.5rem",
          }}
        >
          {[
            { label: LINKS.email, href: `mailto:${LINKS.email}` },
            { label: "GitHub", href: LINKS.github },
            { label: "Velog", href: LINKS.velog },
          ].map((link, i, arr) => (
            <span key={link.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-text-muted)",
                  transition: "color 200ms",
                  fontFamily: "var(--font-mono)",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text-primary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
              >
                {link.label}
              </a>
              {i < arr.length - 1 && (
                <span style={{ color: "var(--color-border-mid)", userSelect: "none" }}>·</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.25rem",
        }}
        aria-hidden
      >
        <motion.div
          style={{
            width: "1px",
            height: "2.5rem",
            background:
              "linear-gradient(to bottom, transparent, var(--color-text-muted))",
            transformOrigin: "top",
          }}
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
      </motion.div>
    </section>
  );
}
