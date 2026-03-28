"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { LINKS } from "@/app/_lib/constants";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: LINKS.email,
    href: `mailto:${LINKS.email}`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Velog",
    value: "@error_io",
    href: LINKS.velog,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3zm6.883 6.25q.945 0 1.125.9l1.463 8.303q.697-.923 1.146-1.553a14 14 0 0 0 1.283-2.273q.608-1.283.608-2.295q0-.607-.338-.967q-.315-.382-1.193-.967q.9-1.148 2.25-1.148q.72 0 1.193.428q.495.427.494 1.26q0 1.395-1.17 3.488q-1.147 2.07-4.431 6.232l-2.227.156l-1.711-9.628h-2.25V7.24q.9-.293 2.115-.63q1.215-.36 1.643-.36" />
      </svg>
    ),
  },
];

function MagneticLink({
  href,
  icon,
  label,
  value,
  delay,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  delay: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setOffset({
      x: (e.clientX - cx) * 0.25,
      y: (e.clientY - cy) * 0.25,
    });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "1.25rem 2rem",
        borderRadius: "1rem",
        border: "1px solid var(--color-border-mid)",
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        color: "var(--color-text-secondary)",
        transition: "border-color 250ms, background 250ms",
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        cursor: "pointer",
        textDecoration: "none",
        minWidth: "16rem",
      }}
      whileHover={{
        borderColor: "rgba(99,102,241,0.5)",
        backgroundColor: "rgba(99,102,241,0.07)",
        color: "var(--color-text-primary)",
      }}
    >
      <span style={{ opacity: 0.8 }}>{icon}</span>
      <div>
        <p style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {label}
        </p>
        <p style={{ fontSize: "0.95rem", fontWeight: 500, marginTop: "0.1rem" }}>
          {value}
        </p>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      style={{
        width: "100%",
        borderTop: "1px solid var(--color-border-mid)",
      }}
    >
      <div
        className="section-container"
        style={{ textAlign: "center" }}
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--color-accent-from)",
              marginBottom: "1rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            Contact
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
          >
            함께 일해요
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--color-text-muted)",
              marginBottom: "3.5rem",
              maxWidth: "28rem",
              marginInline: "auto",
            }}
          >
            새로운 기회나 협업에 대해 언제든 연락 주세요.
          </p>
        </motion.div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          {CONTACT_LINKS.map((link, i) => (
            <MagneticLink key={link.label} delay={0.1 + i * 0.08} {...link} />
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            marginTop: "5rem",
            fontSize: "0.75rem",
            color: "var(--color-text-muted)",
            fontFamily: "var(--font-mono)",
          }}
        >
          © 2026 조용운. Built with Next.js & Paperlogy.
        </motion.p>
      </div>
    </section>
  );
}
