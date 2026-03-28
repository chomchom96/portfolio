"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PROJECTS } from "@/app/_lib/constants";
import type { Project } from "@/app/_lib/types";

const PROJECT_IMAGES: Record<string, string> = {
  "ai-canvas": "/bg1.jpg",
  target: "/target.jpg",
  mokkoji: "/mokkoji.png",
};

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const imageSrc = PROJECT_IMAGES[project.id] ?? "/bg1.jpg";

  return (
    <FadeUp delay={delay}>
      <div
        className="glass-card"
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          cursor: "default",
          transition: "border-color 250ms",
        }}
        onMouseEnter={e =>
          (e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)")
        }
        onMouseLeave={e =>
          (e.currentTarget.style.borderColor = "var(--color-border-mid)")
        }
      >
        {/* Image */}
        <div style={{ position: "relative", height: "11rem", overflow: "hidden" }}>
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(9,9,11,0.7))",
            }}
          />
          {project.award && (
            <span
              style={{
                position: "absolute",
                top: "0.75rem",
                right: "0.75rem",
                fontSize: "0.7rem",
                fontWeight: 600,
                padding: "0.2rem 0.6rem",
                borderRadius: "9999px",
                background: "rgba(99,102,241,0.85)",
                color: "#fff",
                letterSpacing: "0.03em",
                fontFamily: "var(--font-mono)",
              }}
            >
              {project.award}
            </span>
          )}
        </div>

        {/* Content */}
        <div
          style={{
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            flex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "0.5rem" }}>
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--color-text-primary)",
              }}
            >
              {project.title}
            </h3>
            <span
              style={{
                fontSize: "0.72rem",
                color: "var(--color-text-muted)",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-mono)",
              }}
            >
              {project.period}
            </span>
          </div>

          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.65,
            }}
          >
            {project.summary}
          </p>

          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
              marginTop: "0.25rem",
            }}
          >
            {project.bullets.map((b, i) => (
              <li
                key={i}
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.6,
                  paddingLeft: "0.9rem",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "0.55em",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "var(--color-accent-from)",
                    display: "block",
                  }}
                />
                {b}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginTop: "auto",
              paddingTop: "0.75rem",
            }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "0.7rem",
                  padding: "0.2rem 0.55rem",
                  borderRadius: "9999px",
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        width: "100%",
        borderTop: "1px solid var(--color-border-mid)",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
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
            Projects
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              marginBottom: "0.75rem",
            }}
          >
            Selected Projects
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--color-text-muted)",
              maxWidth: "36rem",
            }}
          >
            실제 서비스와 팀 프로젝트에서 직접 설계하고 구현한 작업들입니다.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
            alignItems: "start",
          }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
